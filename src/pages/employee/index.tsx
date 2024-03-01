import Nav from "@/components/molecules/Nav";
import EmployeeViews from "@/components/templates/EmployeeViews";

export default function Employee() {
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col items-center">
      <Nav dark />
      <EmployeeViews />
    </div>
  );
}
