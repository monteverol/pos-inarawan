import { Routes, Route } from 'react-router-dom';
import AdminIntro from './pages/admin_intro/admin_intro';
import SalesReport from './pages/sales_report/sales_report';
import SalesForecast from './pages/sales_forecast/sales_forecast';
import InventoryManagement from './pages/inventory_management/inventory_management';
import OrderSettings from './pages/order_settings/order_settings';
import BranchEmployeeSettings from './pages/branch_employee_settings/branch_employee_settings';
import SystemMaintenance from './pages/system_maintenance/system_maintenance';
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin-intro" element={<AdminIntro />} />
        <Route path="/sales-report" element={<SalesReport />} />
        <Route path="/sales-forecast" element={<SalesForecast />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/order-settings" element={<OrderSettings />} />
        <Route path="/branch-employee-settings" element={<BranchEmployeeSettings />} />
        <Route path="/system-maintenance" element={<SystemMaintenance />} />
      </Routes>
    </div>
  )
}

export default App
