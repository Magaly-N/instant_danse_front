const DarkMode = () => {
    return (
        <div>
            <input id="switch" type="checkbox" />
            <div className="content">
                <div className="circle">
                    <div className="crescent"></div>
                </div>

                <label htmlFor="switch">
                    <div className="toggle"></div>
                    <div className="names">
                        <p className="light">Light</p>
                        <p className="dark">Dark</p>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default DarkMode;
