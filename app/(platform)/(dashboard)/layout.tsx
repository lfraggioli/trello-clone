import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }:
    {
        children: React.ReactNode
    }

) => {

    return (
        <div>
            <Navbar />
            <div className="h-full">
                {children}
            </div>
        </div>
    );
}
export default DashboardLayout;