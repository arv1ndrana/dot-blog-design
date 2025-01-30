// To count the no. of blogs
const blogsNumber = document.getElementById("blog-list").childElementCount;

for (let i = 0; i < blogsNumber; i++)
{

    //To select a blog
    const selectedBlog = 'div.blog' + (i + 1).toString();

    // const nameLength = document.querySelectorAll('#name')[0].textContent.length;
    // const dateLength = document.querySelectorAll('#date')[0].textContent.length;
    
    // const totalLength = nameLength + dateLength;
    // const dotLength = 100 - totalLength;
    
    
    // document.getElementById("dots").textContent = " . ".repeat(dotLength);
}