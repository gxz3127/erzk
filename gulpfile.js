var gulp=require("gulp");
var server=require("gulp-webserver");
gulp.task("default",function(){
    gulp.src("src")
    .pipe(server({
        port:"7080",
        open:true,
        host:"localhost",
        livereload:true,
        middleware:function(req,res,next){
            next();
        }
    }))
})