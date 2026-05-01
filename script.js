document.documentElement.classList.add('js-enabled');
/* ==========================================
   SIDEBAR & UI LOGIC
   ========================================== */
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Header color change on scroll
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

/* ==========================================
   CHAPTER III: WEEKLY REPORTS LOGIC
   ========================================== */
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
        document.getElementById("weekTitle").innerText = `Week ${data.week}: Weekly Performance Overview`;
        document.getElementById("weekPeriod").innerText = `Period: ${data.date}`;
        document.getElementById("weekAccomplishments").innerText = data.activity;
        document.getElementById("weekProblems").innerText = data.problems;
        document.getElementById("weekRemarks").innerText = data.remarks;
        
        const imgElement = document.getElementById("weekImg");
        imgElement.src = `week${data.week}.jpg`; 
        
        imgElement.onerror = function() {
            this.src = 'placeholder-ojt.jpg'; 
        };

        const skillList = document.getElementById("weekSkills");
        skillList.innerHTML = "";
        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.innerText = skill;
            skillList.appendChild(li);
        });
    }
}

function populateTable() {
    const tableBody = document.getElementById("fullLogTable");
    if(!tableBody) return;
    tableBody.innerHTML = "";
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

// Chapter 3 Click to Enlarge (Zoom Modal)
function openFullImage() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImg");
    const currentImg = document.getElementById("weekImg");
    if(modal && modalImg && currentImg) {
        modal.style.display = "flex";
        modalImg.src = currentImg.src;
        document.body.style.overflow = "hidden";
    }
}

function closeFullImage() {
    const modal = document.getElementById("imageModal");
    if(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

/* ==========================================
   CHAPTER III - B: DTR LOGIC
   ========================================== */
const dtrData = [
    { date: "02/02/2026", month: "February", desc: "First day orientation at Villamar Law Office.", hours: 8 },
    { date: "02/03/2026", month: "February", desc: "Learned office rules and basic tasks.", hours: 8 },
    { date: "02/04/2026", month: "February", desc: "Observed workflow and document types.", hours: 8 },
    { date: "02/05/2026", month: "February", desc: "Assisted in document sorting.", hours: 8 },
    { date: "02/06/2026", month: "February", desc: "Compiled weekly reports.", hours: 8 },
    { date: "02/09/2026", month: "February", desc: "Assisted in notarizing documents.", hours: 8 },
    { date: "02/10/2026", month: "February", desc: "Prepared documents for notarization.", hours: 8 },
    { date: "02/11/2026", month: "February", desc: "Understood notarization process.", hours: 8 },
    { date: "02/12/2026", month: "February", desc: "Managed document flow.", hours: 8 },
    { date: "02/13/2026", month: "February", desc: "Cleared weekly notary backlog.", hours: 8 },
    { date: "02/16/2026", month: "February", desc: "Arranged documents for notarization.", hours: 8 },
    { date: "02/17/2026", month: "February", desc: "Alphabetical arrangement of files.", hours: 8 },
    { date: "02/18/2026", month: "February", desc: "Sorted and labeled folders.", hours: 8 },
    { date: "02/19/2026", month: "February", desc: "Updated filing system.", hours: 8 },
    { date: "02/20/2026", month: "February", desc: "Finalized document organization.", hours: 8 },
    { date: "02/23/2026", month: "February", desc: "Alphabetical filing in cabinets.", hours: 8 },
    { date: "02/24/2026", month: "February", desc: "Corrected placement of legal files.", hours: 8 },
    { date: "02/25/2026", month: "February", desc: "Checked for misfiled documents.", hours: 8 },
    { date: "02/26/2026", month: "February", desc: "Maintained systematic file order.", hours: 8 },
    { date: "02/27/2026", month: "February", desc: "Completed monthly sorting.", hours: 8 },
    { date: "03/02/2026", month: "March", desc: "Scanned documents and converted to PDF.", hours: 8 },
    { date: "03/03/2026", month: "March", desc: "Verified digital files quality.", hours: 8 },
    { date: "03/04/2026", month: "March", desc: "Renamed PDF files per protocol.", hours: 8 },
    { date: "03/05/2026", month: "March", desc: "Archived physical copies.", hours: 8 },
    { date: "03/06/2026", month: "March", desc: "Updated digital backups.", hours: 8 },
    { date: "03/09/2026", month: "March", desc: "Compressed PDF files for email.", hours: 8 },
    { date: "03/10/2026", month: "March", desc: "Managed file sizes for cloud storage.", hours: 8 },
    { date: "03/11/2026", month: "March", desc: "Organized digital client folders.", hours: 8 },
    { date: "03/12/2026", month: "March", desc: "Backed up documents to external drives.", hours: 8 },
    { date: "03/13/2026", month: "March", desc: "Synced weekly digital records.", hours: 8 },
    { date: "03/16/2026", month: "March", desc: "Encoded register numbers.", hours: 8 },
    { date: "03/17/2026", month: "March", desc: "Updated book numbers in register.", hours: 8 },
    { date: "03/18/2026", month: "March", desc: "Maintained notarized file records.", hours: 8 },
    { date: "03/19/2026", month: "March", desc: "Cross-checked registers.", hours: 8 },
    { date: "03/20/2026", month: "March", desc: "Finalized mid-month entries.", hours: 8 },
    { date: "03/23/2026", month: "March", desc: "Encoded documents to local database.", hours: 8 },
    { date: "03/24/2026", month: "March", desc: "Information accuracy checking.", hours: 8 },
    { date: "03/25/2026", month: "March", desc: "Formatted office monthly reports.", hours: 8 },
    { date: "03/26/2026", month: "March", desc: "Encoded legal case summaries.", hours: 8 },
    { date: "03/27/2026", month: "March", desc: "Verified encoded daily records.", hours: 8 },
    { date: "03/30/2026", month: "March", desc: "Assisted client inquiries.", hours: 8 },
    { date: "03/31/2026", month: "March", desc: "Guided clients to staff.", hours: 8 },
    { date: "04/01/2026", month: "April", desc: "Managed office reception.", hours: 8 },
    { date: "04/06/2026", month: "April", desc: "Observed and followed instructions.", hours: 8 },
    { date: "04/07/2026", month: "April", desc: "Learned professional etiquette.", hours: 8 },
    { date: "04/08/2026", month: "April", desc: "Administrative office support.", hours: 8 },
    { date: "04/13/2026", month: "April", desc: "Organized important documents safely.", hours: 8 },
    { date: "04/14/2026", month: "April", desc: "Properly arranged legal files.", hours: 8 },
    { date: "04/15/2026", month: "April", desc: "Ensured confidentiality of records.", hours: 8 },
    { date: "04/16/2026", month: "April", desc: "Checked document completeness.", hours: 8 },
    { date: "04/17/2026", month: "April", desc: "Consolidated weekly tasks.", hours: 8 },
    { date: "04/20/2026", month: "April", desc: "Performed tasks with confidence.", hours: 8 },
    { date: "04/21/2026", month: "April", desc: "Handled voluminous documents.", hours: 8 },
    { date: "04/22/2026", month: "April", desc: "Minimized supervision in tasks.", hours: 8 },
    { date: "04/23/2026", month: "April", desc: "Multi-tasked office departments.", hours: 8 },
    { date: "04/24/2026", month: "April", desc: "Practiced encoding speed.", hours: 8 },
    { date: "04/27/2026", month: "April", desc: "Handled notarization efficiently.", hours: 8 },
    { date: "04/28/2026", month: "April", desc: "Improved time management.", hours: 8 },
    { date: "04/29/2026", month: "April", desc: "Maintained office efficiency.", hours: 8 },
    { date: "04/30/2026", month: "April", desc: "Summarized monthly achievements.", hours: 8 },
    { date: "05/04/2026", month: "May", desc: "Applied skills independently.", hours: 8 },
    { date: "05/05/2026", month: "May", desc: "Final day and exit clearance.", hours: 6 }
];

function populateDTR(dataToDisplay) {
    const tbody = document.getElementById("dtrTableBody");
    if(!tbody) return;
    tbody.innerHTML = "";
    
    dataToDisplay.forEach(item => {
        const row = `<tr>
            <td><strong>${item.date}</strong></td>
            <td>${item.desc}</td>
            <td class="text-center">${item.hours}:00</td>
        </tr>`;
        tbody.innerHTML += row;
    });

    const totalHoursEl = document.getElementById("totalHours");
    const totalDaysEl = document.getElementById("totalDays");
    if(totalHoursEl) totalHoursEl.innerText = dataToDisplay.reduce((acc, curr) => acc + curr.hours, 0);
    if(totalDaysEl) totalDaysEl.innerText = dataToDisplay.length;
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

/* ==========================================
   APPENDICES GALLERY LOGIC
   ========================================== */
let activeImages = [];
let currentIndex = 0;

function openGallery(images, startIndex = 0) {
    activeImages = images;
    currentIndex = startIndex;
    updateViewer();
    const viewer = document.getElementById("docViewer");
    if(viewer) {
        viewer.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeGallery() {
    const viewer = document.getElementById("docViewer");
    if(viewer) {
        viewer.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex >= activeImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = activeImages.length - 1;
    updateViewer();
}

function updateViewer() {
    const imgElement = document.getElementById("viewerImg");
    const indicator = document.getElementById("pageIndicator");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if(imgElement) imgElement.src = activeImages[currentIndex];
    if(indicator) indicator.innerText = `${currentIndex + 1} / ${activeImages.length}`;

    if (activeImages.length <= 1) {
        if(prevBtn) prevBtn.style.visibility = "hidden";
        if(nextBtn) nextBtn.style.visibility = "hidden";
    } else {
        if(prevBtn) prevBtn.style.visibility = "visible";
        if(nextBtn) nextBtn.style.visibility = "visible";
    }
}

// Keyboard support
document.addEventListener('keydown', function(e) {
    const docViewer = document.getElementById("docViewer");
    const zoomModal = document.getElementById("imageModal");

    // Escape to close either modal
    if (e.key === "Escape") {
        if (docViewer && docViewer.style.display === "flex") closeGallery();
        if (zoomModal && zoomModal.style.display === "flex") closeFullImage();
    }
    
    // Gallery Navigation
    if (docViewer && docViewer.style.display === "flex") {
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "ArrowLeft") changeImage(-1);
    }
});

/* ==========================================
   INITIALIZATION
   ========================================== */
window.addEventListener('DOMContentLoaded', () => {
    // Populate DTR if element exists
    populateDTR(dtrData);
    
    // Populate Weekly Table if element exists
    populateTable();

    // Initial Weekly Report update
    if(document.getElementById("weekSelect")) {
        updateWeeklyReport();
    }
});

function toggleDropdown(element) {
    // I-rotate ang arrow
    element.classList.toggle('active');
    
    // Hanapin ang katabing sub-menu at i-show/hide
    const subMenu = element.parentElement.nextElementSibling;
    if (subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
    } else {
        subMenu.classList.add('show');
    }
}

function introduce(role) {
    let title = "";
    let message = "";

    switch(role) {
        case 'atty':
            title = "Atty. Lawrence P. Villamar";
            message = "He is the Lead Counsel and Owner of Villamar Law Office. He oversees all legal strategies and ensures the firm provides top-tier legal services to every client.";
            break;
        case 'secretary':
            title = "Ana Liza Sales";
            message = "She is our Secretary. She manages legal documentation, client appointments, and ensures the office's administrative workflow runs smoothly.";
            break;
        case 'staff':
            title = "Micle Pascual";
            message = "He is our dedicated Office Staff. He assists in day-to-day operations and provides essential support for various administrative and legal tasks.";
            break;
        default:
            title = "Team Member";
            message = "A valuable member of the Villamar Law Office team.";
    }

    // Displays the introduction in a browser alert box
    alert("Meet " + title + "\n\n" + message);
}
document.addEventListener("DOMContentLoaded", function() {
    let progressBar = document.getElementById("progress-bar");
    let percentageText = document.querySelector(".loading-percentage");
    let loader = document.getElementById("loader-wrapper");
    let modal = document.getElementById("info-modal");

    let width = 0;
    let loadingInterval = setInterval(function() {
        if (width >= 100) {
            clearInterval(loadingInterval);
            // Pag tapos na ang loading
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                // Lalabas ang Modal pagkatapos ng loading
                modal.style.display = "flex";
                setTimeout(() => modal.classList.add("active"), 10);
            }, 500);
        } else {
            width++;
            progressBar.style.width = width + "%";
            percentageText.innerHTML = width + "%";
        }
    }, 25); // Bilis ng loading (25ms per 1%)
});

function closeModal() {
    let modal = document.getElementById("info-modal");
    modal.classList.remove("active");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}



// Circular Progress Animation
window.onload = function() {
    const circle = document.getElementById('progress-circle');
    const rating = 4.86;
    const maxRating = 5;
    const percentage = (rating / maxRating) * 100;
    
    // Formula for circle offset: 440 - (440 * percentage) / 100
    const offset = 440 - (440 * percentage) / 100;
    
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 500);
};

// Intersection Observer para sa Scroll Animation
const observerOptions = {
    threshold: 0.1 // Lalabas ang box kapag 10% na nito ang kita
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        } else {
            // Tanggalin ito kung gusto mong isang beses lang lumabas
            // Pero sabi mo "pataas at pababa", kaya dapat i-remove para mag-animate ulit
            entry.target.classList.remove('reveal');
        }
    });
}, observerOptions);

// I-apply sa lahat ng sections na may class na content-card
document.querySelectorAll('.content-card').forEach(section => {
    observer.observe(section);
});

// Smooth Scroll para sa lahat ng links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
