import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from "react-icons/gi";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { RiEarthquakeFill } from "react-icons/ri";

export const locationsTab = [
  { id: 1, label: "Design", icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: "Arctic", icon: <BsSnow size={24} /> },
  { id: 3, label: "Shared Homes", icon: <MdHouseSiding size={24} /> },
  { id: 4, label: "LakeFront", icon: <MdOutlineWater size={24} /> },
  { id: 5, label: "National Parks", icon: <GiKidSlide size={24} /> },
  { id: 6, label: "Bed & Breakfast ", icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: "OMG!", icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: "Camping", icon: <FaCampground size={24} /> },
  { id: 9, label: "A-frames", icon: <GiCampingTent size={24} /> },
  { id: 10, label: "Domes", icon: <GiLightningDome size={24} /> },
  { id: 11, label: "Tiny Homes", icon: <BiHomeAlt size={24} /> },
  { id: 12, label: "Treehouses", icon: <GiEvilTree size={24} /> },
  { id: 13, label: "Surfing", icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: "CountrySide", icon: <GiMountainCave size={24} /> },
  { id: 15, label: "Caves", icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: "Golfing", icon: <GiGolfFlag size={24} /> },
  { id: 17, label: "Cabins", icon: <MdCabin size={24} /> },
  { id: 18, label: "Earth Homes", icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: "Tropical", icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: "Amazing Pools", icon: <FaSwimmingPool size={24} /> },
];

// export const locations = [
//   {
//     id: 1,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Gardon Reveira, Italy",
//     days: "Oct 2-9",
//     price: "$14,999 CAD night",
//     isNew: true,
//     rating: 4.5,
//     isLiked: false,
//   },
//   {
//     id: 2,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Joshua tree, USA",
//     days: "Sep 2-11",
//     price: "$3000 CAD night",
//     isNew: false,
//     rating: 4.99,
//     isLiked: false,
//   },
//   {
//     id: 3,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Uvita rosa, Costa Rica",
//     days: "Nov 19-22",
//     price: "$1,129 CAD night",
//     isNew: true,
//     rating: 4.6,
//     isLiked: false,
//   },
//   {
//     id: 4,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Navidad, Chile",
//     days: "Sep 13-18",
//     price: "$208 CAD night",
//     isNew: false,
//     rating: 4.2,
//     isLiked: false,
//   },
//   {
//     id: 5,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1647891940243-77a6483a152e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1587502537815-0c8b5c9ba39a?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Paraty, Brazil",
//     days: "Aug 1-6",
//     price: "$243 CAD night",
//     isNew: true,
//     rating: 4.1,
//     isLiked: false,
//   },
//   {
//     id: 6,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Raelington, Norway",
//     days: "Oct 9-15",
//     price: "$698 CAD night",
//     isNew: false,
//     rating: 4.6,
//     isLiked: false,
//   },
//   {
//     id: 7,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Terrasini, Italy",
//     days: "June 7-12",
//     price: "$467 CAD night",
//     isNew: true,
//     rating: 4.7,
//     isLiked: false,
//   },
//   {
//     id: 8,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1504392022767-a8fc0771f239?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "San Jose, Mexico",
//     days: "Jun 11-16",
//     price: "$1,767 CAD night",
//     isNew: false,
//     rating: 4.8,
//     isLiked: false,
//   },
//   {
//     id: 9,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Tulum, Mexico",
//     days: "Jul 1-6",
//     price: "$910 CAD night",
//     isNew: true,
//     rating: 4.3,
//     isLiked: false,
//   },
//   {
//     id: 10,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1518593929011-2b5ef6be57c7?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1526137844794-45f1041f397a?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Inglis, Canada",
//     days: "Jun 12-18",
//     price: "$629 CAD night",
//     isNew: false,
//     rating: 4.6,
//   },
//   {
//     id: 11,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1531756716853-09a60d38d820?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Jenner, California",
//     days: "Nov 2-7",
//     price: "$2,595 CAD night",
//     isNew: false,
//     rating: 4.1,
//     isLiked: false,
//   },
//   {
//     id: 12,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1564415637254-92c66292cd64?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Malibu, US",
//     days: "Jun 3-4",
//     price: "$4,467 CAD night",
//     isNew: false,
//     rating: 4.2,
//     isLiked: false,
//   },
//   {
//     id: 13,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1517639493569-5666a7b2f494?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1605708896118-957f660c1555?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1497449493050-aad1e7cad165?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Bolzano, Italy",
//     days: "Sep 22-25",
//     price: "$358 CAD night",
//     isNew: true,
//     rating: 4.5,
//     isLiked: false,
//   },
//   {
//     id: 14,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1533387520709-752d83de3630?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Hawaii, US",
//     days: "Nov 4-10",
//     price: "$777 CAD night",
//     isNew: true,
//     rating: 4.8,
//     isLiked: false,
//   },
//   {
//     id: 15,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1544892504-5a42d285ab6f?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Lagos, Portugal",
//     days: "Sep 25-Oct 2",
//     price: "$2,999 CAD night",
//     isNew: true,
//     rating: 4.88,
//     isLiked: false,
//   },
//   {
//     id: 16,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "LunenBurg, Canada",
//     days: "Oct 4-9",
//     price: "$500 CAD night",
//     isNew: false,
//     rating: 4.2,
//     isLiked: false,
//   },
//   {
//     id: 17,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1504803900752-c2051699d0e8?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Santa Rosa, US",
//     days: "Jun 2-9",
//     price: "$3,369 CAD night",
//     isNew: false,
//     rating: 4.1,
//     isLiked: false,
//   },
//   {
//     id: 18,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1465147264724-326b45c3c59b?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Carlux, France",
//     days: "Oct 28-Nov 4",
//     price: "$2511 CAD night",
//     isNew: true,
//     rating: 4.5,
//     isLiked: false,
//   },
//   {
//     id: 19,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Palm desert, US",
//     days: "Jun 11-16",
//     price: "$3200 CAD night",
//     isNew: true,
//     rating: 4.7,
//     isLiked: false,
//   },
//   {
//     id: 20,
//     locationImages: [
//       {
//         id: 1,
//         url:
//           "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 2,
//         url:
//           "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//       {
//         id: 3,
//         url:
//           "https://images.unsplash.com/photo-1494280986787-c49b328829dd?auto=format&fit=crop&w=400&h=250&q=80",
//       },
//       {
//         id: 4,
//         url:
//           "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=250&q=60",
//       },
//     ],
//     location: "Ressaca, Brazil",
//     days: "Oct 2-9",
//     price: "$14,999 CAD night",
//     isNew: false,
//     rating: 4.5,
//     isLiked: false,
//   },
// ];

export const people = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "maria ferguson",
    location: "Nigeria",
    quote:
      "Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "john doe",
    location: "South Africa",
    quote:
      "Hosting my studio changed my life and gifted me with memorable experiences and people.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "peter smith",
    location: "London",
    quote:
      "Airbnb has allowed me to create my own job doing what I love — taking care of guests in our home.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan andersen",
    location: "New york",
    quote:
      "I love hosting my eco-home so people can connect with nature and their loved ones.",
  },
];
export const experienceAds = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg?aki_policy=x_large",
    heading: "Create an activity, your way",
    text:
      "Food tour by bike, light photography at night, tapas on a boat, or yoga (with goats). Create and curate a unique activity people want to try.",
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/55b065f5-e6d9-4a0a-8066-9c1850db7660.jpg?aki_policy=x_large",
    heading: "Do what you love (and get paid)",
    text:
      "Scout for street art or surf at sunset, turn your passion into profit. Earn money without it feeling like a job.",
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/d1d720a0-7253-4f89-b9b4-50759c376a9a.jpg?aki_policy=x_large",
    heading: "Get voices for your cause",
    text:
      "Lead a hike with rescue dogs, or teach ethical fashion. Raise awareness of your cause in a whole new way.",
  },
];

export const experienceCards = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg?aki_policy=x_large",
    title: "Culture & History",
    text: "Share the story behind famous landmarks in your city.",
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/eca85a07-8fad-4648-a4a4-b4c9283fdd65.jpg?aki_policy=x_large",
    title: "Food & Drink",
    text: "Host a food tour, cooking class, dining experience, and more.",
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/1ecf2c03-5b86-4af3-a194-c18764eafbb3.jpg?aki_policy=x_large",
    title: "Nature & Outdoor",
    text: "Lead nature hikes, water sports, mountain activities, and more.",
  },
];
export const experienceHosts = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/b7f0cbdb-2251-4513-b3cc-b93546606c7c.jpg?aki_policy=x_large",
    name: "DJ Jigüe",
    story:
      "DJ Jigüe is dedicated to sharing his passion for Afro-Cuban music. Some of the guests he’s exposed to Cuba’s complex musical history even went to see him play a show in Austin, Texas.",
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/ff8d1952-e25c-4df8-889f-a846f7b34897.jpg?aki_policy=x_large",
    name: "Cici",
    story:
      "Shanghai resident and culinary host Cici believes cooking can bring happiness. She welcomes guests into her kitchen to learn how to make classic Chinese dumplings in a fun way.",
  },
];
export const dashboardInfo = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-alarm.e0a2b02fa7d1e956cd4135847fc0cda1.gif",
    text: "Tasks",
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-calendar.ace59291b2904181320cb34108a24537.gif",
    text: "Scheduling",
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-money-saved.0d988c4ec128a1a11fdc5c499940dec8.gif",
    text: "Payments",
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-graph.3f8bd411622845e624b9be5ba9631168.gif",
    text: "Insights",
  },
];
export const perks = [
  {
    image:
      "https://a0.muscache.com/im/pictures/3a775aa8-1242-4343-bd3e-70104b1b9a3c.jpg?aki_policy=x_large",
    text: "News",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/b4c1f176-6cfb-496e-aca2-83e139963502.jpg?aki_policy=x_large",
    text: "Perks",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/53682240-aa14-4690-9df2-14b521e9c884.jpg?aki_policy=x_large",
    text: "Events",
  },
];
export const registrationProcess = [
  {
    id: 1,
    heading: "Learn our quality standards",
    text:
      "Make sure your experience meets our bar for expertise, insider access, and connection.",
  },
  {
    id: 2,
    heading: "Create an experience page",
    text:
      "Your page is how people find you. Make a great first impression by highlighting your expertise and adding high quality photos.",
  },
  {
    id: 3,
    heading: "Start hosting your experience",
    text:
      "As long as your experience meets the standards, you’re ready to add dates and start hosting.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Do I have to host a home to host an experience?",
    answer:
      "No. You don’t have to host guests overnight in your home or space to be an experience host.",
  },
  {
    id: 2,
    question: "What’s the time commitment?",
    answer:
      "You can host as often as you like—feel free to adjust your dates and times until you find what works best for you.",
  },
  {
    id: 3,
    question: "Do I need a business license?",
    answer:
      "Depending on activities involved, certain experiences may require a business license. Make sure to check local laws in your area to determine which licenses may be required for your experience, especially if there is food, alcohol, or transportation involved.",
  },
  {
    id: 4,
    question: "Can I set a minimum number of guests per experience?",
    answer:
      "The minimum number of guests you can host during each instance of your experience is 1.",
  },
  {
    id: 5,
    question: "Do I need insurance?",
    answer:
      "With AirCover for Hosts you get Experiences liability insurance. That coverage applies to you in the rare event a guest is hurt or their property is damaged during a covered Experience.",
  },
  {
    id: 6,
    question: "Can I host with someone else?",
    answer:
      "If you want to host with one other person, make sure their name is mentioned on your experience listing so that guests know who they’ll be with. They’ll also need to have a verified Airbnb profile.",
  },
];

