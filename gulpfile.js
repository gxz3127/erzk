var gulp=require("gulp");
var server=require("gulp-webserver");
var data=require("./src/data/data.json");
gulp.task("default",function(){
    gulp.src("src")
    .pipe(server({
        port:"9999",
        open:true,
        host:"169.254.242.144",
        livereload:true,
        middleware:function(req,res,next){
            if(/\/list/g.test(req.url)){
                res.end(JSON.stringify(data))
            }  
            next();
        }
    }))
})