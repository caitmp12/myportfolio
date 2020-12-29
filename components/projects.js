const Projects = () => {
    return (
        <div>
            <h2 className="projects-title">Projects</h2>
            <hr/>
            <div className="projects-background">
            <div className="projects-container">
                <div className="picture"><h4>Picture Here</h4></div>
                <div className="project-info">
                <h2>Halloween Picks: Full-Stack React app</h2>
                <p>A full-stack app created to let users randomize (with customizable options) a list of fun activities for an evening in with friends and family.<br />
                Technologies used: Node.js, Express, React, CSS, and Mongoose.</p>
                <a href="https://zen-project3.herokuapp.com/">Project Link: Server</a>
                <a href="https://eloquent-newton-3f7527.netlify.app/">Project Link: Client-Facing</a>
                </div>
            </div>
            <br />
            <div className="projects-container">
                <div className="picture"><h4>Picture Here</h4></div>
                <div className="project-info">
                <h2>Critique Match: Mini Ruby on Rails and React App</h2>
                <p>A full CRUD app which allows users to post their writing work in order to match with critique partners.
                <br />
                Technologies used: Ruby on Rails, React, and CSS.</p>
                <a href="https://cp-match-backendp4.herokuapp.com/posts">Project Link: Server</a>
                <a href="https://priceless-dijkstra-8d10c6.netlify.app/home">Project Link: Client-Facing</a>
                </div>
            </div>
            <br />
            <div className="projects-container">
                <div className="picture"><h4>Picture Here</h4></div>
                <div className="project-info">
                <h2>Writing Prompts Daily: Full-Stack MERN App</h2>
                <p>This MERN app allows users to receive a randomized writing prompt and create posts.<br />
            Technologies used: Node.js, Express, EJS, CSS, and Mongoose.</p>
                <a href="https://cmp-zenproject2.herokuapp.com/">Project Link</a>
                </div>
            </div>
            </div>
            <div className="white-space"></div>
        </div>
    )
}

export default Projects


    // < img src = "https://i.imgur.com/xDFagBg.jpg" />