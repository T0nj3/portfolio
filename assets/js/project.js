const params = new URLSearchParams(window.location.search)
const id = params.get("id")

fetch("../data/projects.json")
  .then(res => res.json())
  .then(projects => {
    const project = projects.find(p => p.id === id)
    if (!project) return

    document.title = `${project.title} | Portfolio`

    document.getElementById("title").textContent = project.title
    document.getElementById("intro").textContent = project.intro
    document.getElementById("image").src = project.image
    document.getElementById("description").textContent = project.description
    document.getElementById("github").href = project.github

    const liveBtn = document.getElementById("live")
    if (project.live) {
      liveBtn.href = project.live
    } else {
      liveBtn.style.display = "none"
    }

    const techList = document.getElementById("tech")
    project.tech.forEach(t => {
      const li = document.createElement("li")
      li.className = "rounded-full bg-white/5 px-3 py-1 text-sm"
      li.textContent = t
      techList.appendChild(li)
    })
  })