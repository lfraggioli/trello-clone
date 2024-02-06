import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {

    const { orgId } = auth();
    return (
        <div>
            <div className="mb-2 p-2">
                {/* <OrganizationSwitcher /> */}
            </div>
            <h1>Organization: {orgId}</h1>
        </div>
    );
}

export default OrganizationIdPage;