import { useState } from "react";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Inventory as InventoryIcon,
  People as PeopleIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  Visibility as VisibilityIcon,
  Add as AddIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  LocalShipping as StockIcon,
} from "@mui/icons-material";

import { CiMenuKebab } from "react-icons/ci";
import SearchBar from "../components/Searchfield";

const drawerWidth = 240;

// Sample data
const rows = [
  {
    id: 1,
    name: "Air Fryer",
    type: "Appliances",
    model: "Air Fryer Diablo",
    sku: "AFR1001",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Air Fryer",
    type: "Appliances",
    model: "Air Fryer Diablo",
    sku: "AFR1001",
    status: "Inactive",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Air Fryer",
    type: "Appliances",
    model: "Air Fryer Diablo",
    sku: "AFR1001",
    status: "Inactive",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Air Fryer",
    type: "Appliances",
    model: "Air Fryer Diablo",
    sku: "AFR1001",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Air Fryer",
    type: "Appliances",
    model: "Air Fryer Diablo",
    sku: "AFR1001",
    status: "Inactive",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Air Fryer",
    type: "Appliances",
    model: "Air Fryer Diablo",
    sku: "AFR1001",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const columns = [
  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Product"
        style={{ width: "50px", height: "50px" }}
      />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
    minWidth: 130,
  },
  {
    field: "model",
    headerName: "Model",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "sku",
    headerName: "SKU",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === "Active" ? "success" : "error"}
        size="small"
        variant="outlined"
      />
    ),
  },
  {
    field: "action",
    headerName: "Tools",
    type: "actions",
    width: 100,
    getActions: (params) => [
   
        <Stack direction="row" spacing={0.5}>
          <span style={{ fontSize: '12px', color: 'black' }}>View Stock</span>
          <VisibilityIcon sx={{ fontSize: '16px' }} />

        </Stack>
    ],
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 70,
    renderCell: (params) => (
      <div>
        <CiMenuKebab />
      </div>
    ),
  },
];

const menuItems = [
  { text: "Product List", icon: <InventoryIcon /> },
  { text: "Clients", icon: <PeopleIcon /> },
  { text: "Forms", icon: <DescriptionIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
];

function Main() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Paper sx={{ p: 3, mb: 3,backgroundColor:"#84C3CC" }}>
      <Box 
        sx={{
          display: 'flex',           
          justifyContent: 'center',  
          alignItems: 'center',      
          borderBottom: 1, 
          borderColor: "divider", 
          mb: 3 
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root": {
              minHeight: "48px",
              textTransform: "none",
              fontSize: "1rem",
            },
            "& .Mui-selected": {
              color: "#009EF7",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#009EF7",
            },
          }}
        >
          <Tab icon={<InventoryIcon />} iconPosition="start" label="Product List" />
          <Tab icon={<StockIcon />} iconPosition="start" label="Stock List" />
        </Tabs>
      </Box>
    </Paper>

    <Paper sx={{ p: 3, mb: 3,backgroundColor:"white" }}>
    <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h7"
            noWrap
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Total Count: 100
          </Typography>
          <SearchBar
            iconPosition="end"
            backgroundColor="#d8d8d8"
            placeholder="Search Users"
            showIcon={true}
          />
        </Box>
    </Paper>
      <Paper sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5" component="h1">
            Product List
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ bgcolor: "#009EF7" }}
          >
            Add Product
          </Button>
        </Stack>

       

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
            components={{
              Toolbar: GridToolbar,
            }}
            sx={{
              border: "none",
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default Main;
