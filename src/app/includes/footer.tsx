export default function Footer(
    {isHomePageFooter = false}
) {
    return (
        <>
            <footer id={isHomePageFooter ? 'home-footer' : 'standard-footer' } className="footer">
                <p>©2024 Youngs Employment Services. <a href="/privacy-policy">Privacy Policy</a></p>
            </footer>
        </>
    );
}