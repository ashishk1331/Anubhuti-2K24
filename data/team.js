import rajnishsir from "../public/team/rajnishsir.jpg";
import bipinsir from "../public/team/bipinsir.jpeg";
import sujeetsir from "../public/team/sujeetSir.jpg";
import sameersir from "../public/team/sameersir.jpg";
import maleavatar from "../public/team/maleavatar.png";
import femaleavatar from "../public/team/femaleavatar.jpg";

export const team = [
  {
    image: sameersir,
    name: "Prof. Samir Srivastav",
    designation: "Convenor",
  },
  {
    image: sujeetsir,
    name: "Prof. Sujeet Agarwal",
    designation: "Convenor",
  },
  {
    image: bipinsir,
    name: "Prof. Bipin Prajapati",
    designation: "Co-Convenor",
  },
  {
    image: rajnishsir,
    name: "Prof. Rajnish Kumar",
    designation: "Co-Convenor",
  },
  {
    image: maleavatar,
    name: "Mayank Kesharwani(EL)",
    designation: "Fest Secretary",
  },
  {
    image: femaleavatar,
    name: "Deepanshi Srivastava(CE)",
    designation: "Fest Secretary",
  },
  {
    image: maleavatar,
    name: "Ayush Dubey(ME)",
    designation: "Core Team",
  },
  {
    image: maleavatar,
    name: "Amit Rankwar(EL)",
    designation: "Core Team",
  },
  {
    image: maleavatar,
    name: "Harsh Gupta(EL)",
    designation: "Core Team",
  },
  {
    image: maleavatar,
    name: "Abhishek Choudhary(EE)",
    designation: "Core Team",
  },
  {
    image: maleavatar,
    name: "Amritesh Singh(EL)",
    designation: "Core Team",
  },
  {
    image: femaleavatar,
    name: "Apeksha Chauhan(ME)",
    designation: "Core Team",
  },
  {
    image: femaleavatar,
    name: "Akansha Walia(CSE)",
    designation: "Core Team",
  },
];

// Your data
export const teamData = {
  coreTeam: [
    { name: "Mayank Kesharwani", department: "EL" },
    { name: "Ayush Dubey", department: "ME" },
    { name: "Amit Rankwar", department: "EL" },
    { name: "Harsh Gupta", department: "EL" },
    { name: "Deepanshi Srivastava", department: "CE" },
    { name: "Abhishek Choudhary", department: "EE" },
    { name: "Amitesh Singh", department: "EL" },
    { name: "Apeksha Chauhan", department: "ME" },
    { name: "Aakansha Walia", department: "CSE" },
  ],
  chairpersonFestSecretary: [
    { name: "Mayank Kesharwani", department: "EL" },
    { name: "Deepanshi Srivastava", department: "CE" },
  ],
  festCoordinator: [
    { name: "Ayush Dubey", department: "ME" },
    { name: "Apeksha Chauhan", department: "ME" },
  ],
  financeAndOperation: [
    { name: "Amit Kumar Rankwar", department: "EL" },
    { name: "Ayush Dubey", department: "ME" },
    { name: "Mayank Kesharwani", department: "EL" },
    { name: "Amitesh Singh", department: "EL" },
  ],
  competitionHead: [
    {
      name: "Shishir Pratap Singh",
      department: "EL",
      eventHead: "Cultural Council",
    },
    {
      name: "Apeksha Chauhan",
      department: "ME",
      secretary: "Cultural Council",
      core: true,
    },
    {
      name: "Rishi Srivastava",
      department: "CE",
      secretary: "Literary Council",
    },
    { name: "Ananya Singh", department: "EE", secretary: "Literary Council" },
    { name: "Shreesha Tripathi", department: "EL", secretary: "PFAC" },
    { name: "Yash Kumar Yadav", department: "EL", secretary: "PFAC" },
  ],
  informalsHeads: [
    { name: "Amitesh Singh", department: "EL", core: true },
    {
      name: "Sanskar Gangwani",
      department: "CSE",
      secretary: "Sports Council",
    },
    { name: "Karan Singh", department: "ME", secretary: "MEF" },
    { name: "Ashutosh", department: "EL" },
    { name: "Nishu Gupta", department: "IT" },
  ],
  technicalHeads: [
    { name: "Mohit Kumar Singh", department: "CSE" },
    { name: "Sudhanshu Chaubey", department: "CSE" },
    { name: "Aditya Agnihotri", department: "CSE" },
    { name: "Divyanshu Singh", department: "CSE" },
    { name: "Aakansha Walia", department: "CSE", core: true },
    { name: "Akash Mishra", department: "IT" },
    { name: "Avi Srivastava", department: "CSE" },
    { name: "Shivansh Vasu", department: "IT" },
    { name: "Manish Srivastav", department: "IT" },
  ],
  mediaMixingAndMastering: [
    { name: "Harsh Gupta", department: "EL", core: true },
    { name: "Ansh Barnwal", department: "CSE" },
    { name: "Suraj Kharwal", department: "CSE" },
    { name: "Abhimanyu Solanki", department: "EL" },
  ],
  sponsorshipHeads: [
    { name: "Amitesh Singh", department: "EL", core: true },
    { name: "Harmandeep Singh", department: "ME" },
    { name: "Anjali Khatri", department: "EE" },
    { name: "Pranjal Mishra", department: "CE" },
    { name: "Advit Mishra", department: "EL" },
    { name: "Shivansh Vasu", department: "IT" },
  ],
  outreachAndHospitality: [
    { name: "Abhishek Chaudhary", department: "EE", core: true },
    { name: "Satyam Sharma", department: "CSE" },
    { name: "Shivansh", department: "IT" },
    { name: "Anjali Khatri", department: "EE" },
    { name: "Nishu Gupta", department: "IT" },
  ],
  securityHeads: [
    { name: "Amit Kumar Rankwar", department: "EL", core: true },
    { name: "Alok Singh Rajput", department: "EL" },
    { name: "Divyanshi Diwakar", department: "CE" },
    { name: "Vikas Gangwar", department: "EL" },
    { name: "Stu Mishra", department: "EL" },
  ],
  creativeHeads: [
    { name: "Deepanshi Srivastava", department: "CE", core: true },
    { name: "Shiv Pratap Singh", department: "EL" },
    { name: "Ansh Barnwal", department: "CSE" },
    { name: "Avidha Mandal", department: "IT" },
    { name: "Sakshi Patel", department: "IT" },
    { name: "Shivangi Yadav", department: "EL" },
    { name: "Kavisha Kulshrestha", department: "CSE" },
  ],
};

// Export the data for use in your Next.js application
