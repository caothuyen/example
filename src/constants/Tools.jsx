import Accounts from "assets/icons/Accounts.svg";
import Assets from "assets/icons/Assets.svg";
import Task from "assets/icons/Task.svg";
import Project from "assets/icons/Project.svg";
import Congviec from "assets/icons/Congviec.svg";
import Contacts from "assets/icons/Contacts.svg";
import Tacvu from "assets/icons/Tacvu.svg";
import Danhgiacuoinam from "assets/icons/Danhgiacuoinam.svg";
import Faq from "assets/icons/Faq.svg";
import Campaigns from "assets/icons/Campaigns.svg";
import Leads from "assets/icons/Leads.svg";
import Quotes from "assets/icons/Quotes.svg";
import SalesOrder from "assets/icons/SalesOrder.svg";
import Invoice from "assets/icons/Invoice.svg";
import Products from "assets/icons/Products.svg";
import Services from "assets/icons/Services.svg";
import Vendors from "assets/icons/Vendors.svg";
import PurchaseOrder from "assets/icons/PurchaseOrder.svg";
import BGNT from "assets/icons/BGNT.svg";
import In from "assets/icons/In.svg";
import Ra from "assets/icons/Ra.svg";
import Employee from "assets/icons/Employee.svg";
import Loan from "assets/icons/Loan.svg";

export default [
  {
    label: "Cá nhân",
    data: [
      { icon: <Task />, module: "Task" },
      { icon: <Project />, module: "Project" },
      { icon: <Congviec />, module: "Congviec" },
      { icon: <Tacvu />, module: "Tacvu" },
      { icon: <Danhgiacuoinam />, module: "Danhgiacuoinam" },
      { icon: <Faq />, module: "Faq" },
    ],
  },
  {
    label: "Kinh doanh",
    data: [
      { icon: <Campaigns />, module: "Campaigns" },
      { icon: <Leads />, module: "Leads" },
      { icon: <Accounts />, module: "Accounts" },
      { icon: <Contacts />, module: "Contacts" },
      { icon: <Quotes />, module: "Quotes" },
      { icon: <SalesOrder />, module: "SalesOrder" },
      { icon: <Invoice />, module: "Invoice" },
    ],
  },
  {
    label: "Kho hàng",
    data: [
      { icon: <Products />, module: "Products" },
      { icon: <Services />, module: "Services" },
      { icon: <Assets />, module: "Assets" },
      { icon: <Vendors />, module: "Vendors" },
      { icon: <PurchaseOrder />, module: "PurchaseOrder" },
      { icon: <BGNT />, module: "BGNT" },
      { icon: <In />, module: "In" },
      { icon: <Ra />, module: "Ra" },
    ],
  },
  {
    label: "Nhân sự",
    data: [
      { icon: <Employee />, module: "Employee" },
      { icon: <Loan />, module: "Loan" },
    ],
  },
];
