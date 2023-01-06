import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function AsideLinks() {
    return (
        <>
        <aside className="links d-flex flex-column">
            <a href="https://www.linkedin.com/in/gabrielfabilena/" target="blank"><LinkedInIcon sx={{fontSize: "2em"}}/></a>
            <a href="https://github.com/gfortiching" target="blank"><GitHubIcon sx={{fontSize: "2em"}}/></a>
        </aside>
        </>
    )
}

export default AsideLinks;