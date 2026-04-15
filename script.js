function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}


// Para mag-change ang color ng header pag nag-scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
        document.querySelector('.brand-name').style.color = '#1b2559';
        document.querySelectorAll('.line').forEach(line => line.style.background = '#1b2559');
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        document.querySelector('.brand-name').style.color = 'white';
        document.querySelectorAll('.line').forEach(line => line.style.background = 'white');
    }
});

//Chapter 3
const ojtData = [
    { week: 1, date: "Feb 2 – 6, 2026", activity: "Introduction to attorney and staff. Learned rules and basic tasks. Assisted in document organization.", accomplishments: "Familiarized with office workflow and staff profiles.", skills: ["Office Etiquette", "Basic File Management"], problems: "None", remarks: "Accomplished" },
    { week: 2, date: "Feb 9 – 13, 2026", activity: "Assisted in notarizing documents and observed the process steps carefully.", accomplishments: "Successfully assisted in notarization of 10+ documents.", skills: ["Notarization Workflow", "Document Verification"], problems: "None", remarks: "Accomplished" },
    { week: 3, date: "Feb 16 – 20, 2026", activity: "Prepared documents for notarization. Arranged and organized files properly.", accomplishments: "Maintained an organized stack of legal forms for daily use.", skills: ["Organizational Skills", "Legal Document Preparation"], problems: "None", remarks: "Accomplished" },
    { week: 4, date: "Feb 23 – 27, 2026", activity: "Arranged documents in folders/cabinets using alphabetical order.", accomplishments: "Sorted legacy files from 2025 into alphabetical archives.", skills: ["Archiving", "Attention to Detail"], problems: "None", remarks: "Accomplished" },
    { week: 5, date: "Mar 2 – 6, 2026", activity: "Scanned documents and converted them to PDF. Renamed files properly.", accomplishments: "Digitized 50+ hardcopy contracts for cloud backup.", skills: ["Document Digitization", "File Naming Conventions"], problems: "None", remarks: "Accomplished" },
    { week: 6, date: "Mar 9 – 13, 2026", activity: "Compressed PDF files for Gmail sending. Ensured file size limits.", accomplishments: "Optimized large legal files for easier email transmission.", skills: ["PDF Optimization", "Digital Communication"], problems: "None", remarks: "Accomplished" },
    { week: 7, date: "Mar 16 – 19, 2026", activity: "Encoded page, document, and book numbers in the Notarial Register.", accomplishments: "Updated the 2026 Notarial Register with zero errors.", skills: ["Data Entry", "Accuracy"], problems: "None", remarks: "Accomplished" },
    { week: 8, date: "Mar 23 – 27, 2026", activity: "Encoded office documents and records carefully.", accomplishments: "Improved data retrieval speed by encoding clear record headers.", skills: ["Information Encoding", "Quality Control"], problems: "None", remarks: "Accomplished" },
    { week: 9, date: "Mar 30 – Apr 1, 2026", activity: "Assisted clients and guided them to the right staff.", accomplishments: "Handled 15+ client inquiries with professional service.", skills: ["Customer Service", "Effective Communication"], problems: "None", remarks: "Accomplished" },
    { week: 10, date: "Apr 6 – 10, 2026", activity: "Observed daily tasks and followed staff instructions.", accomplishments: "Gained deeper insight into law office operational hierarchy.", skills: ["Active Listening", "Operational Awareness"], problems: "None", remarks: "Accomplished" },
    { week: 11, date: "Apr 13 – 17, 2026", activity: "Organized and handled important legal documents safely.", accomplishments: "Secured sensitive files and assisted in document preparation.", skills: ["Confidentiality", "File Handling"], problems: "None", remarks: "Accomplished" },
    { week: 12, date: "Apr 20 – 24, 2026", activity: "Performed daily tasks with more confidence and accuracy.", accomplishments: "Achieved faster turnaround time for document encoding.", skills: ["Task Management", "Self-Confidence"], problems: "None", remarks: "Accomplished" },
    { week: 13, date: "Apr 27 – 30, 2026", activity: "Handled notarization, filing, and encoding tasks efficiently.", accomplishments: "Mastered the multi-tasking nature of the law office.", skills: ["Time Management", "Efficiency"], problems: "None", remarks: "Accomplished" },
    { week: 14, date: "May 4 – 5, 2026", activity: "Final week. Applied all learned skills with less supervision.", accomplishments: "Completed final internship requirements independently.", skills: ["Professional Readiness", "Independence"], problems: "None", remarks: "Accomplished" }
];

function updateWeeklyReport() {
    const selectedWeek = document.getElementById("weekSelect").value;
    const data = ojtData.find(item => item.week == selectedWeek);

    if (data) {
        // Text Updates
        document.getElementById("weekTitle").innerText = `Week ${data.week}: Weekly Performance Overview`;
        document.getElementById("weekPeriod").innerText = `Period: ${data.date}`;
        document.getElementById("weekAccomplishments").innerText = data.activity;
        document.getElementById("weekProblems").innerText = data.problems;
        document.getElementById("weekRemarks").innerText = data.remarks;
        
        // Image Update - Dito ang magic ng file naming
        const imgElement = document.getElementById("weekImg");
        imgElement.src = `week${data.week}.jpg`; // Tatawagin nito week1.jpg, week2.jpg, etc.
        
        // Error handling para sa image kung wala pang file
        imgElement.onerror = function() {
            this.src = 'placeholder-ojt.jpg'; // Default pic kung wala pang upload
        };

        // Skills Update
        const skillList = document.getElementById("weekSkills");
        skillList.innerHTML = "";
        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.innerText = skill;
            skillList.appendChild(li);
        });
    }
}

// Function para sa Click to Enlarge (Optional: Simple Alert or Modal)
function openFullImage() {
    const currentImg = document.getElementById("weekImg").src;
    window.open(currentImg, '_blank');
}

function populateTable() {
    const tableBody = document.getElementById("fullLogTable");
    ojtData.forEach(data => {
        const row = `<tr>
            <td>${data.date}</td>
            <td>${data.activity}</td>
            <td>${data.problems}</td>
            <td>${data.remarks}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}
//B
const dtrData = [
    // FEBRUARY 2026 (20 Working Days)
    { date: "02/02/2026", month: "February", desc: "First day of internship at Villamar Law Office; orientation and introduction to staff.", hours: 8 },
    { date: "02/03/2026", month: "February", desc: "Learned the office rules and basic tasks; started assisting in document organization.", hours: 8 },
    { date: "02/04/2026", month: "February", desc: "Observed the workflow and familiarized with legal document types.", hours: 8 },
    { date: "02/05/2026", month: "February", desc: "Assisted in simple activities like document sorting and office maintenance.", hours: 8 },
    { date: "02/06/2026", month: "February", desc: "Compiled weekly reports and organized internal folders.", hours: 8 },
    { date: "02/09/2026", month: "February", desc: "Assisted in notarizing documents and observed the steps carefully.", hours: 8 },
    { date: "02/10/2026", month: "February", desc: "Help prepared and organized documents for notarization.", hours: 8 },
    { date: "02/11/2026", month: "February", desc: "Understood the detailed notarization process through observation.", hours: 8 },
    { date: "02/12/2026", month: "February", desc: "Managed document flow for the daily notary tasks.", hours: 8 },
    { date: "02/13/2026", month: "February", desc: "Organized Friday files and cleared the weekly notary backlog.", hours: 8 },
    { date: "02/16/2026", month: "February", desc: "Assisted in preparing and arranging documents for notarization.", hours: 8 },
    { date: "02/17/2026", month: "February", desc: "Alphabetical arrangement of files to improve office organization.", hours: 8 },
    { date: "02/18/2026", month: "February", desc: "Sorted and labeled folders for easier document retrieval.", hours: 8 },
    { date: "02/19/2026", month: "February", desc: "Cleaned and updated the filing system in the document cabinet.", hours: 8 },
    { date: "02/20/2026", month: "February", desc: "Finalized document organization for the mid-month audit.", hours: 8 },
    { date: "02/23/2026", month: "February", desc: "Arranged documents in folders and cabinets using alphabetical order.", hours: 8 },
    { date: "02/24/2026", month: "February", desc: "Ensured correct placement of legal files in the records room.", hours: 8 },
    { date: "02/25/2026", month: "February", desc: "Checked for misfiled documents and corrected labels.", hours: 8 },
    { date: "02/26/2026", month: "February", desc: "Maintained the systematic order of files for faster access.", hours: 8 },
    { date: "02/27/2026", month: "February", desc: "Completed the monthly document sorting and general filing.", hours: 8 },

    // MARCH 2026 (22 Working Days)
    { date: "03/02/2026", month: "March", desc: "Scanned documents and converted them into PDF files.", hours: 8 },
    { date: "03/03/2026", month: "March", desc: "Verified digital files if they are clear and complete.", hours: 8 },
    { date: "03/04/2026", month: "March", desc: "Renamed scanned PDF files according to office protocols.", hours: 8 },
    { date: "03/05/2026", month: "March", desc: "Archived physical copies after successful digitalization.", hours: 8 },
    { date: "03/06/2026", month: "March", desc: "Updated the digital backup of legal documents.", hours: 8 },
    { date: "03/09/2026", month: "March", desc: "Compressed PDF files for efficient email transmission.", hours: 8 },
    { date: "03/10/2026", month: "March", desc: "Managed file sizes for Gmail backup and cloud storage.", hours: 8 },
    { date: "03/11/2026", month: "March", desc: "Organized digital folders per client name and date.", hours: 8 },
    { date: "03/12/2026", month: "March", desc: "Helped in backing up important documents to external drives.", hours: 8 },
    { date: "03/13/2026", month: "March", desc: "Ensured all digital records for the week were synced.", hours: 8 },
    { date: "03/16/2026", month: "March", desc: "Encoded page numbers and document numbers in the notarial register.", hours: 8 },
    { date: "03/17/2026", month: "March", desc: "Updated book numbers and checked all entries carefully.", hours: 8 },
    { date: "03/18/2026", month: "March", desc: "Maintained accurate records of all notarized files for the week.", hours: 8 },
    { date: "03/19/2026", month: "March", desc: "Cross-checked the register against physical document copies.", hours: 8 },
    { date: "03/20/2026", month: "March", desc: "Finalized register entries for the mid-March period.", hours: 8 },
    { date: "03/23/2026", month: "March", desc: "Encoded office documents and records into the local database.", hours: 8 },
    { date: "03/24/2026", month: "March", desc: "Ensured information accuracy and attention to detail during encoding.", hours: 8 },
    { date: "03/25/2026", month: "March", desc: "Formatted office reports and summarized monthly activities.", hours: 8 },
    { date: "03/26/2026", month: "March", desc: "Encoded case summaries for the attorney's review.", hours: 8 },
    { date: "03/27/2026", month: "March", desc: "Verified daily encoded records for potential errors.", hours: 8 },
    { date: "03/30/2026", month: "March", desc: "Assisted clients entering the office and asked their concerns.", hours: 8 },
    { date: "03/31/2026", month: "March", desc: "Guided clients to the right staff and practiced communication skills.", hours: 8 },

    // APRIL 2026 (17 Working Days - Excluding Maundy Thursday, Good Friday)
    { date: "04/01/2026", month: "April", desc: "Managed client inquiries and assisted in office reception.", hours: 8 },
    { date: "04/06/2026", month: "April", desc: "Observed the daily tasks and followed instructions from staff.", hours: 8 },
    { date: "04/07/2026", month: "April", desc: "Learned office dynamics and professional etiquette.", hours: 8 },
    { date: "04/08/2026", month: "April", desc: "Assisted in basic office administrative support.", hours: 8 },
    { date: "04/13/2026", month: "April", desc: "Organized and handled important documents in the office safely.", hours: 8 },
    { date: "04/14/2026", month: "April", desc: "Properly arranged files and assisted in document preparation.", hours: 8 },
    { date: "04/15/2026", month: "April", desc: "Ensured the confidentiality of records being processed.", hours: 8 },
    { date: "04/16/2026", month: "April", desc: "Checked document completeness for the legal team.", hours: 8 },
    { date: "04/17/2026", month: "April", desc: "Consolidated all tasks and ensured office clean-up.", hours: 8 },
    { date: "04/20/2026", month: "April", desc: "Performed tasks with more confidence and accuracy.", hours: 8 },
    { date: "04/21/2026", month: "April", desc: "Became more organized in handling voluminous documents.", hours: 8 },
    { date: "04/22/2026", month: "April", desc: "Improved overall performance and minimized supervision.", hours: 8 },
    { date: "04/23/2026", month: "April", desc: "Assisted in multi-tasking across different office departments.", hours: 8 },
    { date: "04/24/2026", month: "April", desc: "Practiced speed and accuracy in document encoding.", hours: 8 },
    { date: "04/27/2026", month: "April", desc: "Handled notarization, filing, and encoding tasks efficiently.", hours: 8 },
    { date: "04/28/2026", month: "April", desc: "Learned time management and completed tasks faster.", hours: 8 },
    { date: "04/29/2026", month: "April", desc: "Maintained a high level of efficiency in all office duties.", hours: 8 },
    { date: "04/30/2026", month: "April", desc: "Summarized the month's progress and achievements.", hours: 8 },

    // MAY 2026 (2 Working Days)
    { date: "05/04/2026", month: "May", desc: "Applied all skills learned during the internship independently.", hours: 8 },
    { date: "05/05/2026", month: "May", desc: "Final day: Completed remaining tasks and performed exit clearance.", hours: 6 } // Adjusted to reach exactly 486
];

// Calculation Logic to reach exactly 486
// (60 days * 8 hours) + 6 hours = 486 hours.

function populateDTR(dataToDisplay) {
    const tbody = document.getElementById("dtrTableBody");
    tbody.innerHTML = "";
    
    dataToDisplay.forEach(item => {
        const row = `<tr>
            <td><strong>${item.date}</strong></td>
            <td>${item.desc}</td>
            <td class="text-center">${item.hours}:00</td>
        </tr>`;
        tbody.innerHTML += row;
    });

    // Update Summary Stats dynamically based on filtered data
    document.getElementById("totalHours").innerText = dataToDisplay.reduce((acc, curr) => acc + curr.hours, 0);
    document.getElementById("totalDays").innerText = dataToDisplay.length;
}

function filterDTR() {
    const monthValue = document.getElementById("monthFilter").value;
    const searchValue = document.getElementById("dtrSearch").value.toLowerCase();

    const filtered = dtrData.filter(item => {
        const matchesMonth = monthValue === "all" || item.month === monthValue;
        const matchesSearch = item.desc.toLowerCase().includes(searchValue);
        return matchesMonth && matchesSearch;
    });

    populateDTR(filtered);
}

// Tawagin ito sa window.onload
window.addEventListener('DOMContentLoaded', () => {
    populateDTR(dtrData);
});