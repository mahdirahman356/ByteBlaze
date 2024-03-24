
let getBlog = () => {
     let getBlogId = localStorage.getItem('blogs')
     if(getBlogId){
       return JSON.parse(getBlogId)
     }
     else{
        return []
     }
}


   let saveBlogs = (id) => {
        let getBlogIds = getBlog()
        let findBlog = getBlogIds.find(blog => blog === id)
        if(!findBlog)
         getBlogIds.push(id)
         localStorage.setItem('blogs',JSON.stringify(getBlogIds))
   }

   export {saveBlogs,getBlog}