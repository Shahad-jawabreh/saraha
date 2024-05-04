import multer from 'multer'
export const typeOfFile = {
    image : ['image/jpeg','image/jpg','image/png','image/svg+xml','image/gif'],
    pdf : ['application/pdf']
}
const fileUpload = (typeOfFile=[])=>{
    const storage = multer.diskStorage({})

    function fileFilter(req, file, cb) {
        console.log(file)
        if(typeOfFile.includes(file.mimetype)){
            cb(null,true)
        }else{
            cb("invalid format",false)
        }
    }
    const upload = multer({ fileFilter,storage })
    return upload; 
}
export default fileUpload