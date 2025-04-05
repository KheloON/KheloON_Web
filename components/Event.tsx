'use client';

import React, { useState, useEffect, useRef } from "react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSport, setFilterSport] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const [nearbyEvents, setNearbyEvents] = useState<any[]>([]);

  // Mock data for athletes
  const athletes = [
    {
      id: 1,
      name: "Michael Johnson",
      sport: "Track & Field",
      country: "USA",
      achievements: "4x Olympic Gold Medalist",
      imageUrl:
        "https://public.readdy.ai/ai/img_res/ce34022b51d8095306c4a1ef0af6f53c.jpg",
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      sport: "Swimming",
      country: "Spain",
      achievements: "World Record Holder",
      imageUrl:
        "https://public.readdy.ai/ai/img_res/1f58289b54bf4e9a131c22afe96e272e.jpg",
    },
    {
      id: 3,
      name: "Liu Wei",
      sport: "Badminton",
      country: "China",
      achievements: "2x World Champion",
      imageUrl:
        "https://public.readdy.ai/ai/img_res/a16559021f1b38754d85904a76234dc7.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      sport: "Tennis",
      country: "UK",
      achievements: "Grand Slam Winner",
      imageUrl:
        "https://public.readdy.ai/ai/img_res/385f7364de0fc4b9a56e16a10b1fd9c7.jpg",
    },
    {
      id: 5,
      name: "Carlos Mendez",
      sport: "Football",
      country: "Brazil",
      achievements: "FIFA World Cup Winner",
      imageUrl:
        "https://public.readdy.ai/ai/img_res/d059142a402df18d8036b205d3302453.jpg",
    },
    {
      id: 6,
      name: "Aisha Khan",
      sport: "Cricket",
      country: "India",
      achievements: "ICC Player of the Year",
      imageUrl:
        "https://public.readdy.ai/ai/img_res/30d890007becd7ee0c568e25b1e0b4f6.jpg",
    },
  ];

  // Mock data for upcoming events with location coordinates
  const upcomingEvents = [
    {
      id: 1,
      title: "National Athletics Championship",
      date: "April 15, 2025",
      location: "Delhi Sports Complex",
      sport: "Track & Field",
      status: "Registration Open",
      coordinates: { lat: 28.6139, lng: 77.209 },
      imageUrl:
        "https://public.readdy.ai/ai/img_res/9a5b4e7595d244c51fb79dae56e59a6b.jpg",
    },
    {
      id: 2,
      title: "International Swimming Meet",
      date: "April 22, 2025",
      location: "Mumbai Aquatic Center",
      sport: "Swimming",
      status: "Registration Closing Soon",
      coordinates: { lat: 19.076, lng: 72.8777 },
      imageUrl:
        "https://public.readdy.ai/ai/img_res/cf791f0d8d9739c3a82bb2a9b17f03db.jpg",
    },
    {
      id: 3,
      title: "Premier Badminton League",
      date: "May 5, 2025",
      location: "Bangalore Indoor Stadium",
      sport: "Badminton",
      status: "Closed",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      imageUrl:
        "https://public.readdy.ai/ai/img_res/0ad70f777146a9ee103bb76b39b800fd.jpg",
    },
    {
      id: 4,
      title: "Tennis Open Championship",
      date: "May 12, 2025",
      location: "Chennai Tennis Club",
      sport: "Tennis",
      status: "Registration Open",
      coordinates: { lat: 13.0827, lng: 80.2707 },
      imageUrl:
        "https://public.readdy.ai/ai/img_res/3c422b92d81aa829d2eab9a7ad16b129.jpg",
    },
  ];

  // Filter athletes based on search term and sport filter
  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = filterSport === "all" || athlete.sport === filterSport;
    return matchesSearch && matchesSport;
  });

  // Filter events based on search term
  const filteredEvents = upcomingEvents.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sports categories for filter
  const sportsCategories = [
    "all",
    ...Array.from(new Set(athletes.map((athlete) => athlete.sport))),
  ];

  // Animation for cards on load
  useEffect(() => {
    const cards = document.querySelectorAll(".athlete-card, .event-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, 100 * index);
    });
  }, [activeTab, searchTerm, filterSport]);

  // Initialize Google Maps
  useEffect(() => {
    if (showMap && mapRef.current) {
      // This would be replaced with actual Google Maps API integration
      const mockInitMap = () => {
        // Mock function to simulate finding nearby events
        const findNearbyEvents = () => {
          // In a real implementation, this would use the Google Maps Geocoding API
          // to convert the address to coordinates, then find nearby events

          // For demo purposes, we'll just return all events with a mock distance
          const mockNearbyEvents = upcomingEvents.map((event) => ({
            ...event,
            distance: Math.floor(Math.random() * 20) + 1, // Random distance 1-20 km
          }));

          // Sort by mock distance
          mockNearbyEvents.sort((a, b) => a.distance - b.distance);

          setNearbyEvents(mockNearbyEvents);
        };

        // Create a mock map element
        const mapElement = document.createElement("div");
        mapElement.className =
          "w-full h-full bg-gray-200 flex items-center justify-center";
        mapElement.innerHTML = `
          <div class="text-center">
            <i class="fas fa-map-marked-alt text-4xl text-blue-600 mb-4"></i>
            <p class="text-gray-700">Map would display here with the Google Maps API</p>
          </div>
        `;

        // Clear and append to map container
        if (mapRef.current) {
          mapRef.current.innerHTML = "";
          mapRef.current.appendChild(mapElement);

          // If there's a location search, find nearby events
          if (locationSearch.trim()) {
            findNearbyEvents();
          }
        }
      };

      mockInitMap();
    }
  }, [showMap, locationSearch]);

  // Function to handle location search
  const handleLocationSearch = () => {
    if (locationSearch.trim()) {
      setShowMap(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/70 z-10"></div>
        <img
          src="https://public.readdy.ai/ai/img_res/906a487046d80c8f2f14264ed5c31bc0.jpg"
          alt="Sports Banner"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Discover Athletic{" "}
              <span className="text-yellow-400">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Connect with top athletes, find upcoming events, and be part of
              India's growing sports community.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap !rounded-button cursor-pointer">
              Explore Events
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
              Sports <span className="text-blue-600">Directory</span>
            </h2>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search athletes or events..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <select
                className="w-full md:w-auto pl-4 pr-8 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none bg-white"
                value={filterSport}
                onChange={(e) => setFilterSport(e.target.value)}
              >
                {sportsCategories.map((sport, index) => (
                  <option key={index} value={sport}>
                    {sport === "all" ? "All Sports" : sport}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Find Nearest Events Section */}
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
              Find Nearest Events
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Enter pincode or address..."
                  className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                />
              </div>
              <button
                onClick={handleLocationSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap !rounded-button cursor-pointer"
              >
                Search
              </button>
            </div>

            {showMap && (
              <div className="mt-6">
                <div
                  ref={mapRef}
                  className="w-full h-64 rounded-lg overflow-hidden border border-gray-300 mb-4"
                ></div>

                {nearbyEvents.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Nearby Events
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {nearbyEvents.map((event) => (
                        <div
                          key={event.id}
                          className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
                        >
                          <h5 className="font-bold text-gray-800">
                            {event.title}
                          </h5>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <i className="fas fa-calendar-alt text-blue-500 mr-2"></i>
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <i className="fas fa-running text-blue-500 mr-2"></i>
                            <span>{event.sport}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <i className="fas fa-route text-blue-500 mr-2"></i>
                            <span>Approx. {event.distance} km away</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-3 px-6 font-medium text-sm focus:outline-none whitespace-nowrap cursor-pointer ${
                activeTab === "upcoming"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm focus:outline-none whitespace-nowrap cursor-pointer ${
                activeTab === "athletes"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("athletes")}
            >
              Athletes Directory
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm focus:outline-none whitespace-nowrap cursor-pointer ${
                activeTab === "about"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About KheloON
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === "upcoming" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="event-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 transform hover:shadow-lg opacity-0"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 transform hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg text-sm font-semibold">
                        {event.sport}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="fas fa-calendar-alt mr-2 text-blue-500"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.status === "Registration Open"
                              ? "bg-green-100 text-green-800"
                              : event.status === "Registration Closing Soon"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {event.status}
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 whitespace-nowrap !rounded-button cursor-pointer">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500 text-lg">
                    No events found matching your search criteria.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "athletes" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAthletes.length > 0 ? (
                filteredAthletes.map((athlete) => (
                  <div
                    key={athlete.id}
                    className="athlete-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 transform hover:shadow-lg hover:-translate-y-1 opacity-0"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={athlete.imageUrl}
                        alt={athlete.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 transform hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg text-sm font-semibold">
                        {athlete.sport}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {athlete.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="fas fa-flag mr-2 text-blue-500"></i>
                        <span>{athlete.country}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <i className="fas fa-trophy mr-2 text-blue-500"></i>
                        <span>{athlete.achievements}</span>
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 whitespace-nowrap !rounded-button cursor-pointer">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <i className="fas fa-user-slash text-4xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500 text-lg">
                    No athletes found matching your search criteria.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "about" && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    About <span className="text-blue-600">KheloON</span>
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Founded in 2023, KheloON is India's premier platform
                    connecting athletes, sports enthusiasts, and event
                    organizers. Our mission is to elevate the sports ecosystem
                    in India by providing a comprehensive platform for
                    discovering athletic talent and sporting events.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We believe in the power of sports to transform lives and
                    communities. By creating a centralized hub for all
                    sports-related activities, we aim to foster a vibrant
                    sporting culture across the country.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        500+
                      </div>
                      <div className="text-sm text-gray-500">Athletes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        200+
                      </div>
                      <div className="text-sm text-gray-500">Events</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        25+
                      </div>
                      <div className="text-sm text-gray-500">Sports</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        15+
                      </div>
                      <div className="text-sm text-gray-500">States</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    To become the most trusted platform for sports discovery and
                    engagement in India, empowering athletes and promoting
                    sporting excellence at all levels.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap !rounded-button cursor-pointer">
                    Learn More
                  </button>
                </div>
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src="https://public.readdy.ai/ai/img_res/ee65a24117ad35f6ab94cdb176819277.jpg"
                    alt="About KheloON"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        Join Our Community
                      </h3>
                      <p className="mb-4">
                        Be part of India's growing sports ecosystem
                      </p>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap !rounded-button cursor-pointer">
                        Sign Up Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team Section */}
              <div className="p-8 lg:p-12 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Our Leadership Team
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img
                        src="https://public.readdy.ai/ai/img_res/896f6a52ed72cb62f72299d8d8290640.jpg"
                        alt="CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">
                      Rajiv Sharma
                    </h4>
                    <p className="text-blue-600 mb-2">CEO & Founder</p>
                    <p className="text-gray-500 text-sm">
                      Former national athlete with 15+ years in sports
                      management
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img
                        src="https://public.readdy.ai/ai/img_res/e02dfefbd5b6cd267ad47c5574d16922.jpg"
                        alt="COO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">
                      Priya Patel
                    </h4>
                    <p className="text-blue-600 mb-2">COO</p>
                    <p className="text-gray-500 text-sm">
                      Olympic swimmer with expertise in event management
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img
                        src="https://public.readdy.ai/ai/img_res/5e27f50057b7ed2b0fd1cb018137575b.jpg"
                        alt="CTO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">
                      Vikram Mehta
                    </h4>
                    <p className="text-blue-600 mb-2">CTO</p>
                    <p className="text-gray-500 text-sm">
                      Tech innovator with passion for sports analytics
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img
                        src="https://public.readdy.ai/ai/img_res/9febdc874c005b4cbea4388dff4cff5c.jpg"
                        alt="Marketing Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">
                      Ananya Desai
                    </h4>
                    <p className="text-blue-600 mb-2">Marketing Director</p>
                    <p className="text-gray-500 text-sm">
                      Sports marketing specialist with global experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the KheloON Community?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Whether you're an athlete looking to showcase your talent, an event
            organizer, or a sports enthusiast, KheloON has something for
            everyone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap !rounded-button cursor-pointer">
              Register Now
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap !rounded-button cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .athlete-card.show, .event-card.show {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default App;
