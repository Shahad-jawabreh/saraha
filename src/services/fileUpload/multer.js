import multer from 'multer'

const fileUpload = ()=>{
    const storage = multer.diskStorage({})

    function fileFilter(req, file, cb) {
        console.log(file)
        if(['image/jpeg','image/jpg','image/png','image/svg+xml','image/gif'].includes(file.mimetype)){
            cb(null,true)
        }else{
            cb("invalid format",false)
        }
    }
    const upload = multer({ fileFilter,storage })
    return upload; 
}
export default fileUpload