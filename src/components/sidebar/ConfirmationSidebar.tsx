import ConfirmationList from "./ConfirmationList";
import DealActions from "./DealActions";
import WorkspaceLinks from "./WorkspaceLinks";

export default function ConfirmationSidebar() {
    return (
        <div className="border-l-3 border-[#E4E2DC] h-full px-4 space-y-6">
            <ConfirmationList />
            <DealActions/>
            <WorkspaceLinks/>
        </div>
    )
}