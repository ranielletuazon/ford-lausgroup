import Footer from "./components/Footer";
import SEO from "./components/SEO";
import Header from "./components/Header";
export default function NotFound() {
    return (
        <>
            <SEO
                title="Page Not Found"
                description="The page you are looking for could not be found."
                noindex
            />
            <Header />
            <main className="w-full max-w-full">
                <div className="container mx-auto"></div>
            </main>
            <Footer />
        </>
    );
}
