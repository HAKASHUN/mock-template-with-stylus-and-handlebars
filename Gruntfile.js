var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
    /* package.jsonの内容を読み込む */
    var pkg = grunt.file.readJSON('package.json');

    // mockファイルのパス設定
    var mockConfig = {
        app: './',    //アプリが入っているディレクトリ名
        dist: 'build' //ビルドするディレクトリ名
    };

    grunt.initConfig({
        mock: mockConfig,
        //ハンドルバーズのタスク設定
        handlebars: {
            compile: {
                options: {
                    namespace: 'mock.Templates',
                    processName: function(filepath) { // input -> app/hbs/partial.hbs
                        var pieces = filepath.split("/");
                        return pieces[pieces.length - 1].replace(/.hbs$/ , ''); //output -> partial
                    }
                },
                files: {
                    "<%= mock.app %>/hbs/template.js": "<%= mock.app %>/hbs/*.hbs",
                    "<%= mock.app %>/.tmp/template.js": "<%= mock.app %>/hbs/*.hbs"
                }
            }
        },
        //スタイラスのタスク設定
        stylus: {
            compile: {
                files:{
                    //出力CSS先 : コンパイルするモックCSS先
                    '.tmp/mock.css': 'styl/mock.styl',
                    'styl/mock.css': 'styl/mock.styl'
                },
                options: {
                    urlfunc: 'b64' //b64(imageurl)で画像をBase64で埋め込む
                }
            }
        },
        //監視設定
        watch: {
            options: {
                nospawn: true
            },
            //スタイラス監視
            stylus: {
                files: ['<%= mock.app %>/styl/{,*/}*.styl'],
                tasks: ['stylus:compile']
            },
            handlebars: {
                files: [
                    '<%= mock.app %>/hbs/{,*/}*.hbs'
                ],
                tasks: ['handlebars:compile']
            },
            //ライブリロード設定
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= mock.app %>/*.html',
                    '{.tmp/styl,<%= mock.app %>/styl}/*.css',
                    '{.tmp/hbs,<%= mock.app %>/hbs}/*.hbs'
                ]
            }
        },
        //ローカルサーバー設定
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, mockConfig.app)
                        ];
                    }
                }
            }
        },
        //自動でブラウザ起動 -> ファイル表示
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>/mock.html'
            }
        },
        clean: {
            server: '.tmp'
        }
    });

    // loadNpmTasksを変更
    var taskName;
    for(taskName in pkg.devDependencies) {
        if(taskName.substring(0, 6) == 'grunt-') {
            grunt.loadNpmTasks(taskName);
        }
    }

    // defaultタスク
    grunt.registerTask('server', function(target) {
        grunt.task.run([
            'clean:server',
            'stylus:compile',
            'handlebars:compile',
            'connect:livereload',
            'open',
            'watch'
        ])
    });
    grunt.registerTask('default', function(target) {
        grunt.task.run([
            'clean:server',
            'stylus:compile',
            'handlebars:compile',
            'open'
        ])
    });

};