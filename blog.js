let buttons = document.getElementsByTagName("button");



const hideBlog = (event) => {
    let id = event.target.id;

    let blogId = "blog" + id;
    let blog = document.getElementById(blogId);
    blog.classList.toggle("d-none");
    let lessId = "less" + id;
    let moreId = "more" + id;
    let less = document.getElementById(lessId);
    let more = document.getElementById(moreId);

    less.classList.toggle("d-none");
    more.classList.toggle("d-none");

};



for (let button of buttons) {
    button.addEventListener("click", hideBlog);
}