"use client"

import { useState, useEffect } from "react"
import "./Home.css"

const StudentHome = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("courses")
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeEventSection, setActiveEventSection] = useState("upcoming")
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [activeCourseSection, setActiveCourseSection] = useState("all")

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown-container")) {
        setIsProfileDropdownOpen(false)
      }
    }

    if (isProfileDropdownOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isProfileDropdownOpen])

  // All available courses
  const allCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      price: "$299",
      students: 1250,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      category: "Programming",
      level: "Advanced",
      description: "Master modern React concepts including hooks, context, and advanced patterns.",
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Michael Chen",
      duration: "8 weeks",
      price: "$199",
      students: 890,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
      level: "Intermediate",
      description: "Learn design thinking, prototyping, and user research methodologies.",
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Dr. Emily Rodriguez",
      duration: "16 weeks",
      price: "$399",
      students: 675,
      rating: 4.7,
      image: "/?height=200&width=300",
      category: "Data Science",
      level: "Beginner",
      description: "Complete introduction to data analysis, visualization, and machine learning.",
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      duration: "10 weeks",
      price: "$249",
      students: 1100,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      category: "Marketing",
      level: "Intermediate",
      description: "Learn SEO, social media marketing, and content strategy.",
    },
    {
      id: 5,
      title: "Full Stack JavaScript",
      instructor: "Alex Thompson",
      duration: "14 weeks",
      price: "$349",
      students: 980,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      category: "Programming",
      level: "Advanced",
      description: "Build complete web applications with Node.js, Express, and MongoDB.",
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Lisa Park",
      duration: "12 weeks",
      price: "$399",
      students: 567,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      category: "AI/ML",
      level: "Intermediate",
      description: "Introduction to ML algorithms, neural networks, and practical applications.",
    },
    {
      id: 7,
      title: "Mobile App Development",
      instructor: "Ryan Kumar",
      duration: "10 weeks",
      price: "$279",
      students: 743,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      category: "Mobile Dev",
      level: "Intermediate",
      description: "Build native mobile apps for iOS and Android using React Native.",
    },
    {
      id: 8,
      title: "Cybersecurity Essentials",
      instructor: "Maria Santos",
      duration: "8 weeks",
      price: "$229",
      students: 456,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      category: "Security",
      level: "Beginner",
      description: "Learn network security, ethical hacking, and security best practices.",
    },
  ]

  // Rename existing courses to myCourses
  const myCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      progress: 65,
      status: "in-progress",
      nextClass: "Tomorrow, 2:00 PM",
      students: 1250,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      category: "Programming",
      level: "Advanced",
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Michael Chen",
      duration: "8 weeks",
      progress: 0,
      status: "upcoming",
      startDate: "March 25, 2024",
      students: 890,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Dr. Emily Rodriguez",
      duration: "16 weeks",
      progress: 30,
      status: "in-progress",
      nextClass: "Friday, 10:00 AM",
      students: 675,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      category: "Data Science",
      level: "Beginner",
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      duration: "10 weeks",
      progress: 0,
      status: "upcoming",
      startDate: "April 1, 2024",
      students: 1100,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      category: "Marketing",
      level: "Intermediate",
    },
  ]

  // Dummy events/competitions data
  const upcomingEvents = [
    {
      id: 1,
      title: "Global Hackathon 2024",
      type: "Competition",
      deadline: "March 20, 2024",
      appliedCount: 2847,
      maxParticipants: 5000,
      prize: "$50,000",
      duration: "48 hours",
      difficulty: "Advanced",
      image: "/placeholder.svg?height=200&width=300",
      category: "Technology",
      status: "open",
      eventDate: "March 25, 2024",
    },
    {
      id: 2,
      title: "Design Challenge: Future UI",
      type: "Competition",
      deadline: "October 20, 2025",
      appliedCount: 1523,
      maxParticipants: 2000,
      prize: "$25,000",
      duration: "7 days",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
      status: "closing-soon",
      eventDate: "October 20, 2025",
    },
    {
      id: 3,
      title: "AI Innovation Summit",
      type: "Event",
      deadline: "March 30, 2024",
      appliedCount: 892,
      maxParticipants: 1000,
      prize: "Networking",
      duration: "2 days",
      difficulty: "All Levels",
      image: "/placeholder.svg?height=200&width=300",
      category: "AI/ML",
      status: "open",
      eventDate: "April 2, 2024",
    },
    {
      id: 4,
      title: "Startup Pitch Battle",
      type: "Competition",
      deadline: "April 5, 2024",
      appliedCount: 456,
      maxParticipants: 500,
      prize: "$100,000",
      duration: "1 day",
      difficulty: "Advanced",
      image: "/placeholder.svg?height=200&width=300",
      category: "Business",
      status: "open",
      eventDate: "April 10, 2024",
    },
  ]

  const eventsInPlan = [
    {
      id: 5,
      title: "Web Development Bootcamp",
      type: "Workshop",
      registeredDate: "Feb 15, 2024",
      eventDate: "March 22, 2024",
      duration: "3 days",
      location: "Tech Hub Center",
      instructor: "John Smith",
      image: "/placeholder.svg?height=200&width=300",
      category: "Programming",
      status: "registered",
      participants: 45,
    },
    {
      id: 6,
      title: "Data Science Masterclass",
      type: "Masterclass",
      registeredDate: "Feb 20, 2024",
      eventDate: "April 8, 2024",
      duration: "2 days",
      location: "Innovation Lab",
      instructor: "Dr. Sarah Chen",
      image: "/placeholder.svg?height=200&width=300",
      category: "Data Science",
      status: "registered",
      participants: 30,
    },
    {
      id: 7,
      title: "Mobile App Development Sprint",
      type: "Workshop",
      registeredDate: "March 1, 2024",
      eventDate: "April 15, 2024",
      duration: "5 days",
      location: "Digital Campus",
      instructor: "Alex Johnson",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mobile Dev",
      status: "registered",
      participants: 25,
    },
    {
      id: 8,
      title: "Career Networking Mixer",
      type: "Networking",
      registeredDate: "March 5, 2024",
      eventDate: "March 28, 2024",
      duration: "4 hours",
      location: "Business Center",
      instructor: "Industry Leaders",
      image: "/placeholder.svg?height=200&width=300",
      category: "Career",
      status: "registered",
      participants: 80,
    },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const handleCardClick = (type, id) => {
    console.log(`Navigating to ${type}:`, id)
  }

  const getTimeRemaining = (deadline) => {
    const now = new Date()
    const deadlineDate = new Date(deadline)
    const diff = deadlineDate - now
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return days > 0 ? `${days} days left` : "Deadline passed"
  }

  return (
    <div className="student-home">
      {/* Animated Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">
              <div className="logo-circle"></div>
              <div className="logo-text">EduHub</div>
            </div>
          </div>

          <div className="nav-search">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search courses, events, competitions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button type="submit" className="search-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="nav-actions">
            <button className="notification-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              <span className="notification-badge">7</span>
            </button>

            <div className="profile-dropdown-container">
              <button className="profile-btn" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
                <div className="profile-avatar">
                  <img src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <div className="online-indicator"></div>
                </div>
                <div className="profile-info">
                  <span className="profile-name">Alex Johnson</span>
                  <span className="profile-role">Student</span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`dropdown-arrow ${isProfileDropdownOpen ? "open" : ""}`}
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>

              {isProfileDropdownOpen && (
                <div className="profile-dropdown">
                  <div className="dropdown-header">
                    <div className="user-avatar-large">
                      <img src="/placeholder.svg?height=50&width=50" alt="Profile" />
                    </div>
                    <div className="user-details">
                      <h4>Alex Johnson</h4>
                      <p>alex.johnson@email.com</p>
                      <span className="user-badge">Premium Student</span>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>

                  <div className="dropdown-menu">
                    <button className="dropdown-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      My Profile
                    </button>

                    <button className="dropdown-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                      Account Settings
                    </button>

                    <button className="dropdown-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16,17 21,12 16,7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      My Courses
                    </button>

                    <button className="dropdown-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      My Events
                    </button>

                    <button className="dropdown-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      Achievements
                    </button>

                    <div className="dropdown-divider"></div>

                    <button className="dropdown-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                      Help & Support
                    </button>

                    <button className="dropdown-item logout-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16,17 21,12 16,7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Unlock Your</span>
              <span className="title-line highlight">Potential</span>
              <span className="title-line">Today</span>
            </h1>
            <p className="hero-subtitle">
              Join thousands of learners advancing their careers through world-class courses and exciting competitions
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Active Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1K+</div>
                <div className="stat-label">Expert Courses</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Competitions</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">
                <div className="card-icon">📚</div>
                <div className="card-text">Learn</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🏆</div>
                <div className="card-text">Compete</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🚀</div>
                <div className="card-text">Grow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Toggle */}
      <section className="content-section">
        <div className="container">
          <div className="section-toggle">
            <button
              className={`toggle-btn ${activeSection === "courses" ? "active" : ""}`}
              onClick={() => setActiveSection("courses")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Courses
            </button>
            <button
              className={`toggle-btn ${activeSection === "events" ? "active" : ""}`}
              onClick={() => setActiveSection("events")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Competitions & Events
            </button>
          </div>

          {/* Courses Section */}
          {activeSection === "courses" && (
            <div className="courses-section fade-in">
              <div className="section-header">
                <h2>Courses</h2>
                <p>Discover new skills and continue your learning journey</p>
              </div>

              {/* Course Sub-navigation */}
              <div className="course-sub-nav">
                <button
                  className={`sub-nav-btn ${activeCourseSection === "all" ? "active" : ""}`}
                  onClick={() => setActiveCourseSection("all")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  All Courses
                  <span className="count-badge">{allCourses.length}</span>
                </button>
                <button
                  className={`sub-nav-btn ${activeCourseSection === "my" ? "active" : ""}`}
                  onClick={() => setActiveCourseSection("my")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                  My Courses
                  <span className="count-badge">{myCourses.length}</span>
                </button>
              </div>

              {/* All Courses */}
              {activeCourseSection === "all" && (
                <div className="cards-grid">
                  {allCourses.map((course, index) => (
                    <div
                      key={course.id}
                      className="course-card available"
                      onClick={() => handleCardClick("courses", course.id)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="card-image">
                        <img src={course.image || "/placeholder.svg"} alt={course.title} />
                        <div className="card-overlay">
                          <div className="course-level">{course.level}</div>
                          <div className="course-category">{course.category}</div>
                        </div>
                      </div>

                      <div className="card-content">
                        <h3 className="course-title">{course.title}</h3>
                        <div className="course-instructor">by {course.instructor}</div>

                        <div className="course-meta">
                          <div className="meta-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                            {course.duration}
                          </div>
                          <div className="meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                            </svg>
                            {course.rating}
                          </div>
                        </div>

                        <p className="course-description">{course.description}</p>

                        <div className="course-footer">
                          <div className="course-info">
                            <div className="students-count">{course.students} students</div>
                            <div className="course-price">{course.price}</div>
                          </div>
                          <button className="enroll-btn">Enroll Now</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* My Courses */}
              {activeCourseSection === "my" && (
                <div className="cards-grid">
                  {myCourses.map((course, index) => (
                    <div
                      key={course.id}
                      className={`course-card ${course.status}`}
                      onClick={() => handleCardClick("courses", course.id)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="card-image">
                        <img src={course.image || "/placeholder.svg"} alt={course.title} />
                        <div className="card-overlay">
                          <div className="course-level">{course.level}</div>
                          <div className="course-category">{course.category}</div>
                        </div>
                        {course.status === "in-progress" && (
                          <div className="progress-ring">
                            <svg className="progress-circle" width="60" height="60">
                              <circle
                                cx="30"
                                cy="30"
                                r="25"
                                fill="none"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="3"
                              />
                              <circle
                                cx="30"
                                cy="30"
                                r="25"
                                fill="none"
                                stroke="#4ade80"
                                strokeWidth="3"
                                strokeDasharray={`${course.progress * 1.57} 157`}
                                transform="rotate(-90 30 30)"
                              />
                            </svg>
                            <div className="progress-text">{course.progress}%</div>
                          </div>
                        )}
                      </div>

                      <div className="card-content">
                        <h3 className="course-title">{course.title}</h3>
                        <div className="course-instructor">by {course.instructor}</div>

                        <div className="course-meta">
                          <div className="meta-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                            {course.duration}
                          </div>
                          <div className="meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                            </svg>
                            {course.rating}
                          </div>
                        </div>

                        <div className="course-status">
                          {course.status === "in-progress" ? (
                            <div className="status-info">
                              <div className="status-label">Next Class</div>
                              <div className="status-value">{course.nextClass}</div>
                            </div>
                          ) : (
                            <div className="status-info">
                              <div className="status-label">Starts</div>
                              <div className="status-value">{course.startDate}</div>
                            </div>
                          )}
                        </div>

                        <div className="course-footer">
                          <div className="students-count">{course.students} students</div>
                          <button className="continue-btn">
                            {course.status === "in-progress" ? "Continue" : "Start Course"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Events Section */}
          {activeSection === "events" && (
            <div className="events-section fade-in">
              <div className="section-header">
                <h2>Events & Competitions</h2>
                <p>Participate in exciting events and showcase your skills</p>
              </div>

              {/* Event Sub-navigation */}
              <div className="event-sub-nav">
                <button
                  className={`sub-nav-btn ${activeEventSection === "upcoming" ? "active" : ""}`}
                  onClick={() => setActiveEventSection("upcoming")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12,6 12,12 16,14"></polyline>
                  </svg>
                  Upcoming Events
                  <span className="count-badge">{upcomingEvents.length}</span>
                </button>
                <button
                  className={`sub-nav-btn ${activeEventSection === "planned" ? "active" : ""}`}
                  onClick={() => setActiveEventSection("planned")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4l3-3 3 3h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-4l-3 3-3-3z"></path>
                    <path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4l3-3 3 3h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4l-3 3-3-3z"></path>
                  </svg>
                  Events in Plan
                  <span className="count-badge">{eventsInPlan.length}</span>
                </button>
              </div>

              {/* Upcoming Events */}
              {activeEventSection === "upcoming" && (
                <div className="cards-grid">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className={`event-card upcoming ${event.status}`}
                      onClick={() => handleCardClick("events", event.id)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="card-image">
                        <img src={event.image || "/placeholder.svg"} alt={event.title} />
                        <div className="card-overlay">
                          <div className="event-type">{event.type}</div>
                          <div className="event-category">{event.category}</div>
                        </div>
                        <div className="deadline-badge">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                          </svg>
                          {getTimeRemaining(event.deadline)}
                        </div>
                      </div>

                      <div className="card-content">
                        <h3 className="event-title">{event.title}</h3>

                        <div className="event-meta">
                          <div className="meta-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            {event.appliedCount} applied
                          </div>
                          <div className="meta-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                            {event.duration}
                          </div>
                        </div>

                        <div className="application-progress">
                          <div className="progress-info">
                            <span>Applications</span>
                            <span>
                              {event.appliedCount}/{event.maxParticipants}
                            </span>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: `${(event.appliedCount / event.maxParticipants) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="event-details">
                          <div className="detail-item">
                            <span className="detail-label">Prize</span>
                            <span className="detail-value">{event.prize}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Event Date</span>
                            <span className="detail-value">{event.eventDate}</span>
                          </div>
                        </div>

                        <div className="event-footer">
                          <div className="deadline-info">Deadline: {event.deadline}</div>
                          <button className="apply-btn">Apply</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Events in Plan */}
              {activeEventSection === "planned" && (
                <div className="cards-grid">
                  {eventsInPlan.map((event, index) => (
                    <div
                      key={event.id}
                      className="event-card planned"
                      onClick={() => handleCardClick("events", event.id)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="card-image">
                        <img src={event.image || "/placeholder.svg"} alt={event.title} />
                        <div className="card-overlay">
                          <div className="event-type">{event.type}</div>
                          <div className="event-category">{event.category}</div>
                        </div>
                        <div className="registered-badge">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="20,6 9,17 4,12"></polyline>
                          </svg>
                          Registered
                        </div>
                      </div>

                      <div className="card-content">
                        <h3 className="event-title">{event.title}</h3>

                        <div className="event-meta">
                          <div className="meta-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            {event.participants} participants
                          </div>
                          <div className="meta-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                            {event.duration}
                          </div>
                        </div>

                        <div className="event-details">
                          <div className="detail-item">
                            <span className="detail-label">Instructor</span>
                            <span className="detail-value">{event.instructor}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Location</span>
                            <span className="detail-value">{event.location}</span>
                          </div>
                        </div>

                        <div className="event-footer">
                          <div className="event-date-info">Event: {event.eventDate}</div>
                          <button className="view-details-btn">View Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default StudentHome
