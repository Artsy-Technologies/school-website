import Cookies from 'js-cookie';

function AdminPage() {
    const value = Cookies.get('username');
    console.log(value, "from dashboard page");
    return (
        <section className="h-screen " >

        </section>
    )
}

export default AdminPage