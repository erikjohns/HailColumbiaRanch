import HCRLogo from '../../Assets/Images/HCRLogo.png'

const ComingSoon = () => {
    return (
        <div className={"coming-soon"}>
            <img src={HCRLogo} />
            <div className={"coming-soon-content"}>
                <h1>Coming Soon</h1>
                <p>Launching shortly, come back soon!</p>
            </div>
        </div>
    )
}

export default ComingSoon;