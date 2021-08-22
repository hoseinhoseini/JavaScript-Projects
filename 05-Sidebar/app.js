const sidebarToggle = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')


sidebarToggle.addEventListener('click', showSidebar)
closeBtn.addEventListener('click', hideSidebar)



function showSidebar(){
    sidebar.classList.toggle('show-sidebar')
}

function hideSidebar(){
    sidebar.classList.remove('show-sidebar')
}