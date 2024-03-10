import assets from "../assets";
import MasterIcon from "../icons/MasterIcon";
import PaypalIcon from "../icons/PaypalIcon";

export const invoices = [
  {
    userType: "Client",
    userID: "U12345",
    name: "Courtney Henry",
    userIcon: assets?.clientImage,
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    dateBook: "Dec 20, 2023",
    rate: 10,
    status: "Active",
  },
  {
    userType: "Individual",
    userID: "U12345",
    name: "Esther Howard",
    userIcon: assets?.clientImage,
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    dateBook: "Dec 20, 2023",
    rate: 10,
    status: "Active",
  },
  {
    userType: "Company",
    userID: "U12345",
    name: "BonTon",
    userIcon: assets?.clientImage,
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    dateBook: "Dec 20, 2023",
    rate: 10,
    status: "Blocked",
  },
  {
    userType: "Client",
    userID: "U12345",
    name: "Courtney Henry",
    userIcon: assets?.clientImage,
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    dateBook: "Dec 20, 2023",
    rate: 10,
    status: "Active",
  },
  {
    userType: "Individual",
    userID: "U12345",
    name: "Esther Howard",
    userIcon: assets?.clientImage,
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    dateBook: "Dec 20, 2023",
    rate: 10,
    status: "Active",
  },
  {
    userType: "Company",
    userID: "U12345",
    name: "BonTon",
    userIcon: assets?.clientImage,
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    dateBook: "Dec 20, 2023",
    rate: 10,
    status: "Blocked",
  },
];

export const invoices2 = [
  {
    userType: "Client",
    userID: "U12345",
    name: "Courtney Henry",
    userIcon: assets?.clientImage,
    email_address: "julia.brown@gmail.com",
    registration_date: "Dec 1, 2022",
    verification: "Verified",
    members: [
      {
        eachIcon: assets?.avatar1,
      },
      {
        eachIcon: assets?.avatar2,
      },
      {
        eachIcon: assets?.avatar3,
      },
    ],
    status: "Active",
  },
  {
    userType: "Individual",
    userID: "U12345",
    name: "Esther Howard",
    userIcon: assets?.clientImage,
    email_address: "julia.brown@gmail.com",
    registration_date: "Dec 1, 2022",
    verification: "Verified",
    members: [
      {
        eachIcon: assets?.avatar1,
      },
      {
        eachIcon: assets?.avatar2,
      },
      {
        eachIcon: assets?.avatar3,
      },
      {
        eachIcon: assets?.avatar4,
      },
      {
        eachIcon: assets?.avatar5,
      },
    ],
    status: "Active",
  },
  {
    userType: "Company",
    userID: "U12345",
    name: "BonTon",
    userIcon: assets?.clientImage,
    email_address: "julia.brown@gmail.com",
    registration_date: "Dec 1, 2022",
    verification: "Unverified",
    members: [
      {
        eachIcon: assets?.avatar1,
      },
      {
        eachIcon: assets?.avatar2,
      },
      {
        eachIcon: assets?.avatar3,
      },
    ],
    status: "Blocked",
  },
  {
    userType: "Client",
    userID: "U12345",
    name: "Courtney Henry",
    userIcon: assets?.clientImage,
    email_address: "julia.brown@gmail.com",
    registration_date: "Dec 1, 2022",
    verification: "Verified",
    members: [
      {
        eachIcon: assets?.avatar1,
      },
      {
        eachIcon: assets?.avatar2,
      },
      {
        eachIcon: assets?.avatar3,
      },
    ],
    status: "Active",
  },
  {
    userType: "Individual",
    userID: "U12345",
    name: "Esther Howard",
    userIcon: assets?.clientImage,
    email_address: "julia.brown@gmail.com",
    registration_date: "Dec 1, 2022",
    verification: "Verified",
    members: [
      {
        eachIcon: assets?.avatar1,
      },
      {
        eachIcon: assets?.avatar2,
      },
      {
        eachIcon: assets?.avatar3,
      },
      {
        eachIcon: assets?.avatar4,
      },
      {
        eachIcon: assets?.avatar5,
      },
    ],
    status: "Active",
  },
  {
    userType: "Company",
    userID: "U12345",
    name: "BonTon",
    userIcon: assets?.clientImage,
    email_address: "julia.brown@gmail.com",
    registration_date: "Dec 1, 2022",
    verification: "Unverified",
    members: [
      {
        eachIcon: assets?.avatar1,
      },
      {
        eachIcon: assets?.avatar2,
      },
      {
        eachIcon: assets?.avatar3,
      },
    ],
    status: "Blocked",
  },
];

export const invoices3 = [
  {
    date: "Jun 14, 2023",
    withdrawal_type: "j*****n@gmail.com",
    withdrawl_name: "PayPal",
    withdrawl_icon: <PaypalIcon />,
    amount: "$55.00",
    transaction_ID: 486204945,
  },
  {
    date: "Jun 14, 2023",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    amount: "$55.00",
    transaction_ID: 486204945,
  },
  {
    date: "Jun 14, 2023",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    amount: "$55.00",
    transaction_ID: 486204945,
  },
  {
    date: "Jun 14, 2023",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    amount: "$55.00",
    transaction_ID: 486204945,
  },
  {
    date: "Jun 14, 2023",
    withdrawal_type: "j*****n@gmail.com",
    withdrawl_name: "PayPal",
    withdrawl_icon: <PaypalIcon />,
    amount: "$55.00",
    transaction_ID: 486204945,
  },
  {
    date: "Jun 14, 2023",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    amount: "$55.00",
    transaction_ID: 486204945,
  },
  {
    date: "Jun 14, 2023",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    amount: "$55.00",
    transaction_ID: 486204945,
  },
  {
    date: "Jun 14, 2023",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    amount: "$55.00",
    transaction_ID: 486204945,
  },
];

export const invoices4 = [
  {
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: "$55.00",
    status: "Upcoming",
  },
  {
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: "$55.00",
    status: "Completed",
  },
  {
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: "$55.00",
    status: "Canceled",
  },
  {
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: "$55.00",
    status: "Declined",
  },
  {
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: "$55.00",
    status: "Upcoming",
  },
  {
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: "$55.00",
    status: "Completed",
  },
  {
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: "$55.00",
    status: "Canceled",
  },
  {
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: "$55.00",
    status: "Declined",
  },
];

export const invoices5 = [
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
];

export const invoices6 = [
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50", "$70", "$90"],
  },
];

export const invoices7 = [
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
    status: "Requested",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
    status: "Upcoming",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$70"],
    status: "Declined",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
    status: "Completed",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$70"],
    status: "Canceled",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$70"],
    status: "Canceled",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
    status: "Requested",
  },
];

export const invoices10 = [
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_sub: "1st package",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
    status: "Requested",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_sub: "2nd package",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
    status: "Upcoming",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_sub: "3rd package",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$70"],
    status: "Declined",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_sub: "1st package",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
    status: "Completed",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_sub: "2nd package",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$70"],
    status: "Canceled",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_sub: "3rd package",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$70"],
    status: "Canceled",
  },
  {
    category: "Cleaning Services",
    service_image: assets?.tissue_image_small,
    service_name: "Deep Tissue Massage",
    service_sub: "1st package",
    service_quantity: "3 pack",
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$50"],
    status: "Requested",
  },
];

export const invoices8 = [
  {
    transaction_id: "486204945",
    withdrawal_type: "j*****n@gmail.com",
    withdrawl_name: "PayPal",
    withdrawl_icon: <PaypalIcon />,
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$60.50"],
    status: "Processing",
  },
  {
    transaction_id: "486204945",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$60.50"],
    status: "Rejected",
  },
  {
    transaction_id: "486204945",
    withdrawal_type: "j*****n@gmail.com",
    withdrawl_name: "PayPal",
    withdrawl_icon: <PaypalIcon />,
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$60.50"],
    status: "Declined",
  },
  {
    transaction_id: "486204945",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$60.50"],
    status: "Processed",
  },
  {
    transaction_id: "486204945",
    withdrawal_type: "j*****n@gmail.com",
    withdrawl_name: "PayPal",
    withdrawl_icon: <PaypalIcon />,
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$60.50"],
    status: "Processing",
  },
  {
    transaction_id: "486204945",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$60.50"],
    status: "Rejected",
  },
  {
    transaction_id: "486204945",
    withdrawal_type: "j*****n@gmail.com",
    withdrawl_name: "PayPal",
    withdrawl_icon: <PaypalIcon />,
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$60.50"],
    status: "Declined",
  },
  {
    transaction_id: "486204945",
    withdrawal_type: "Ending in 6375",
    withdrawl_name: "Credit card",
    withdrawl_icon: <MasterIcon />,
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    date: "Jun 14, 2023",
    time: "3:30 pm",
    amount: ["$60.50"],
    status: "Processed",
  },
];

export const invoices9 = [
  {
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    category_type: "Individual",
    date: "Dec 20, 2023",
    rate: 10,
  },
  {
    vendor_image: assets?.company_image,
    vendor_name: "Biffco Enterprises Ltd.",
    category_type: "Company",
    date: "Dec 20, 2023",
    rate: 10,
  },
  {
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    category_type: "Individual",
    date: "Dec 20, 2023",
    rate: 10,
  },
  {
    vendor_image: assets?.company_image,
    vendor_name: "Biffco Enterprises Ltd.",
    category_type: "Company",
    date: "Dec 20, 2023",
    rate: 10,
  },
  {
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    category_type: "Individual",
    date: "Dec 20, 2023",
    rate: 10,
  },
  {
    vendor_image: assets?.company_image,
    vendor_name: "Biffco Enterprises Ltd.",
    category_type: "Company",
    date: "Dec 20, 2023",
    rate: 10,
  },
  {
    vendor_image: assets?.clientImage,
    vendor_name: "Julia B.",
    category_type: "Individual",
    date: "Dec 20, 2023",
    rate: 10,
  },
  {
    vendor_image: assets?.company_image,
    vendor_name: "Biffco Enterprises Ltd.",
    category_type: "Company",
    date: "Dec 20, 2023",
    rate: 10,
  },
];

export const categoryList = [
  {
    category_name: "Beauty and Wellness",
    subcategories: 5,
    listings: 5937,
    status: "Active",
    id: "1",
    subcategories_list: [
      { subcategoy_name: "Sub-Category A", id: "1" },
      { subcategoy_name: "Sub-Category B", id: "2" },
      { subcategoy_name: "Sub-Category C", id: "3" },
    ],
  },
  {
    category_name: "Pet Care and Services",
    subcategories: 5,
    listings: 5937,
    status: "Active",
    id: "2",
    subcategories_list: [
      { subcategoy_name: "Sub-Category A", id: "1" },
      { subcategoy_name: "Sub-Category B", id: "2" },
      { subcategoy_name: "Sub-Category C", id: "3" },
    ],
  },
  {
    category_name: "Home Cleaning and Maintenance",
    subcategories: 5,
    listings: 5937,
    status: "Active",
    id: "3",
    subcategories_list: [
      { subcategoy_name: "Sub-Category A", id: "1" },
      { subcategoy_name: "Sub-Category B", id: "2" },
      { subcategoy_name: "Sub-Category C", id: "3" },
    ],
  },
  {
    category_name: "Child Care and Babysitting",
    subcategories: 5,
    listings: 5937,
    status: "Active",
    id: "4",
    subcategories_list: [
      { subcategoy_name: "Sub-Category A", id: "1" },
      { subcategoy_name: "Sub-Category B", id: "2" },
      { subcategoy_name: "Sub-Category C", id: "3" },
    ],
  },
  {
    category_name: "At-home schooling and homework help",
    subcategories: 5,
    listings: 5937,
    status: "Active",
    id: "5",
    subcategories_list: [
      { subcategoy_name: "Sub-Category A", id: "1" },
      { subcategoy_name: "Sub-Category B", id: "2" },
      { subcategoy_name: "Sub-Category C", id: "3" },
    ],
  },
];