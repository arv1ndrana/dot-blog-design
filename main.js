// To count the no. of blogs
const blogsNumber = document.getElementById("blog-list").childElementCount;

for (let i = 0; i < blogsNumber; i++)
{

    // To select a blog
    const selectedBlog = 'div.blog' + (i + 1).toString();
    console.log("BLOG: " + selectedBlog);

    // TODO: To count the inner content of name and date id


    const nameLength = document.querySelectorAll(selectedBlog + " > span")[0].textContent.length;
    const dateLength = document.querySelectorAll(selectedBlog + " > span")[2].textContent.length;
    console.log("TITLE LENGTH: " + nameLength)
    console.log("DATE LENGTH: " + dateLength)
    // const nameLength = document.querySelectorAll('#name')[0].textContent.length;
    // const dateLength = document.querySelectorAll('#date')[0].textContent.length;
    
    const totalLength = nameLength + dateLength;
    console.log("TOTAL LENGTH: " + totalLength);
    const dotLength = 100 - totalLength;
    console.log("DOT LENGTH: " + dotLength);
    
    
    document.querySelectorAll(selectedBlog + " > span")[1].textContent = " . ".repeat(dotLength);
}