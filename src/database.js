const database = {
  communityPosts: [
    {
      id: "post1",
      author: "FishMaster99",
      title: "Amazing Catch at Crystal Lake",
      content: "Had an incredible day fishing at Crystal Lake. The early morning bite was fantastic! Caught three beautiful rainbow trout using my new spinner set. The weather was perfect and the water conditions were ideal. If you're planning to visit, make sure to get there early!",
      date: "2024-03-18",
      likes: 24,
      imageUrl: "/src/assets/zab-consulting-QTXAXnJA3oY-unsplash.jpg",
      comments: [
        {
          user: "AnglePro",
          text: "Great catch! Those morning sessions are always worth it. What size were they?",
          date: "2024-03-18"
        },
        {
          user: "LakeExplorer",
          text: "I was there last week too! The trout were really active in the shallows.",
          date: "2024-03-18"
        }
      ]
    },
    {
      id: "post2",
      author: "FishingNewbie",
      title: "First Time Fly Fishing",
      content: "Finally tried fly fishing at Blue River. The community here is so helpful! Special thanks to @FlyFishPro for the tips. Still learning the casting technique but managed to catch my first trout! Can't wait to go back and practice more.",
      date: "2024-03-17",
      likes: 15,
      imageUrl: "/src/assets/zab-consulting-b_uZ6-Wrqvs-unsplash.jpg",
      comments: [
        {
          user: "FlyFishPro",
          text: "Great job! Keep practicing the casting. It gets easier with time!",
          date: "2024-03-17"
        }
      ]
    },
    {
      id: "post3",
      author: "SaltWaterKing",
      title: "Deep Sea Adventure",
      content: "Just got back from an amazing deep-sea fishing trip! Caught several halibut and even a small shark. The weather was perfect and the crew was fantastic. Highly recommend trying out deep sea fishing if you haven't yet!",
      date: "2024-03-16",
      likes: 42,
      imageUrl: "/src/assets/calin-stan-jW2zQnopO4s-unsplash.jpg",
      comments: [
        {
          user: "OceanExplorer",
          text: "Those halibut look massive! What bait were you using?",
          date: "2024-03-16"
        }
      ]
    }
  ],
  locations: [
    {
      id: "loc1",
      name: "Crystal Lake",
      imageUrl: "/src/assets/federico-giampieri-R0lftflMYPw-unsplash.jpg",
      coordinates: { lat: 45.3052, lng: -121.7542 },
      description: "Mountain lake with excellent trout fishing and stunning views. Perfect for both beginners and experienced anglers. The lake is stocked regularly and offers great shore fishing opportunities.",
      fishSpecies: ["Rainbow Trout", "Brown Trout", "Bass", "Kokanee Salmon"],
      bestSeasons: ["Spring", "Summer", "Fall"],
      difficulty: "Beginner",
      regulations: "Catch and release only. Artificial lures. Daily limit: 5 fish. Minimum size: 8 inches.",
      tips: "Early morning fishing yields best results. Try using small spinners or flies near the shoreline. Watch for rising fish in the evening."
    },
    {
      id: "loc2",
      name: "Blue River",
      imageUrl: "/src/assets/wynand-van-poortvliet-86gwJv3rd-M-unsplash.jpg",
      coordinates: { lat: 44.2361, lng: -122.1542 },
      description: "Scenic river perfect for fly fishing, with multiple access points and varied water conditions. Known for its wild trout population and beautiful surroundings.",
      fishSpecies: ["Salmon", "Steelhead", "Brook Trout", "Cutthroat Trout"],
      bestSeasons: ["Summer", "Fall", "Winter"],
      difficulty: "Intermediate",
      regulations: "Seasonal restrictions apply. Check local regulations for current limits and methods.",
      tips: "Use lighter tackle for better results. Focus on deep pools during summer months. Match the hatch for best success."
    },
    {
      id: "loc3",
      name: "Coastal Bay",
      imageUrl: "/src/assets/gary-tresize-fffsh5XnyTI-unsplash.jpg",
      coordinates: { lat: 45.5152, lng: -122.6784 },
      description: "Saltwater bay offering excellent opportunities for salmon and halibut fishing. Popular charter destination with consistent action throughout the season.",
      fishSpecies: ["Chinook Salmon", "Pacific Halibut", "Rockfish", "Lingcod"],
      bestSeasons: ["Summer", "Fall"],
      difficulty: "Advanced",
      regulations: "Saltwater fishing license required. Seasonal restrictions apply. Check current regulations.",
      tips: "Best fishing during incoming tide. Use heavy tackle and consider hiring a guide for your first trip."
    }
  ],
  equipment: {
    rods: [
      {
        id: "rod1",
        name: "Beginner Spinning Rod",
        category: "Rods",
        imageUrl: "/src/assets/drew-farwell-a9JsPbN-R_A-unsplash.jpg",
        description: "Perfect for beginners, this versatile spinning rod is easy to use and great for various fishing techniques. Features comfortable grip and sensitive tip.",
        difficulty: "Beginner",
        price: "$49.99",
        bestFor: ["Bass", "Trout", "Panfish"]
      },
      {
        id: "rod2",
        name: "Pro Fly Rod",
        category: "Rods",
        imageUrl: "/src/assets/jakob-owens-VEobb3p5yOI-unsplash.jpg",
        description: "High-performance fly rod designed for precision casting and delicate presentations. Perfect for experienced anglers looking for top-quality gear.",
        difficulty: "Advanced",
        price: "$199.99",
        bestFor: ["Trout", "Salmon", "Steelhead"]
      },
      {
        id: "rod3",
        name: "Heavy Action Surf Rod",
        category: "Rods",
        imageUrl: "/src/assets/john-cameron-ShLDezSsZJk-unsplash.jpg",
        description: "Powerful rod designed for surf fishing and handling large saltwater species. Built to withstand harsh conditions.",
        difficulty: "Intermediate",
        price: "$129.99",
        bestFor: ["Halibut", "Rockfish", "Surf Perch"]
      }
    ],
    reels: [
      {
        id: "reel1",
        name: "Standard Spinning Reel",
        category: "Reels",
        imageUrl: "/src/assets/stephen-momot-UivGzIDhVyw-unsplash.jpg",
        description: "Reliable and smooth operation. Perfect for all-around freshwater fishing. Features quality drag system and anti-reverse.",
        difficulty: "Beginner",
        price: "$39.99",
        bestFor: ["All-purpose"]
      },
      {
        id: "reel2",
        name: "Premium Fly Reel",
        category: "Reels",
        imageUrl: "/src/assets/laura-kessler-MJbz1VIjGXs-unsplash.jpg",
        description: "Balanced fly reel with sealed drag system. Ideal for trout and salmon fishing in all conditions.",
        difficulty: "Advanced",
        price: "$149.99",
        bestFor: ["Fly Fishing"]
      }
    ],
    lures: [
      {
        id: "lure1",
        name: "Colorful Spinners Set",
        category: "Lures",
        imageUrl: "/src/assets/jakob-owens-GoRsrsoxoL8-unsplash.jpg",
        description: "Variety pack of spinning lures in various colors and sizes. Perfect for targeting multiple species in different conditions.",
        difficulty: "Beginner",
        price: "$19.99",
        bestFor: ["Trout", "Bass"]
      },
      {
        id: "lure2",
        name: "Pro Fly Selection",
        category: "Lures",
        imageUrl: "/src/assets/r-mac-wheeler-YZ_OgitihfM-unsplash.jpg",
        description: "Comprehensive selection of dry flies, nymphs, and streamers. Includes popular patterns for all seasons.",
        difficulty: "Advanced",
        price: "$39.99",
        bestFor: ["Trout", "Salmon"]
      }
    ]
  },
  techniques: [
    {
      id: "tech1",
      name: "Basic Casting",
      imageUrl: "/src/assets/alan-bishop-gjshuj_QB2s-unsplash.jpg",
      difficulty: "Beginner",
      description: "Learn the fundamentals of casting with a spinning rod. Essential skill for all anglers that will help you present your lure effectively.",
      steps: [
        "Hold rod at waist level",
        "Press and hold reel release",
        "Swing rod back over shoulder",
        "Cast forward in smooth motion",
        "Release reel button at eye level"
      ],
      bestFor: ["All fish species"],
      tips: [
        "Practice in an open area",
        "Start with shorter casts",
        "Keep your movements smooth"
      ]
    },
    {
      id: "tech2",
      name: "Fly Casting",
      imageUrl: "/src/assets/ar-cS67vV_1wBw-unsplash.jpg",
      difficulty: "Advanced",
      description: "Master the art of fly casting. This technique requires practice but offers the most delicate and precise lure presentation.",
      steps: [
        "Start with short line",
        "Practice false casting",
        "Learn to mend line",
        "Master roll casting",
        "Control line speed"
      ],
      bestFor: ["Trout", "Salmon"],
      tips: [
        "Watch your back cast",
        "Keep rod tip up",
        "Practice rhythm"
      ]
    },
    {
      id: "tech3",
      name: "Bottom Fishing",
      imageUrl: "/src/assets/wynand-van-poortvliet-86gwJv3rd-M-unsplash.jpg",
      difficulty: "Intermediate",
      description: "Effective technique for catching fish that feed near the bottom. Perfect for targeting larger species.",
      steps: [
        "Set up sinker and bait",
        "Cast to desired location",
        "Wait for bite indication",
        "Set hook firmly",
        "Reel in steadily"
      ],
      bestFor: ["Catfish", "Carp", "Halibut"],
      tips: [
        "Use appropriate weight",
        "Check bait regularly",
        "Be patient"
      ]
    }
  ],
  fishingEvents: [
    {
      id: "event1",
      title: "Spring Trout Tournament",
      date: "2024-04-15",
      location: "Crystal Lake",
      description: "Annual spring trout fishing tournament. Prizes for largest catch and most fish caught. Registration required.",
      imageUrl: "/src/assets/federico-giampieri-R0lftflMYPw-unsplash.jpg",
      registrationDeadline: "2024-04-10",
      entryFee: "$25",
      maxParticipants: 50,
      currentParticipants: 32
    },
    {
      id: "event2",
      title: "Fly Fishing Workshop",
      date: "2024-05-01",
      location: "Blue River",
      description: "Learn the basics of fly fishing from expert instructors. Equipment provided for beginners.",
      imageUrl: "/src/assets/wynand-van-poortvliet-86gwJv3rd-M-unsplash.jpg",
      registrationDeadline: "2024-04-25",
      entryFee: "$75",
      maxParticipants: 20,
      currentParticipants: 15
    },
    {
      id: "event3",
      title: "Family Fishing Day",
      date: "2024-06-10",
      location: "Coastal Bay",
      description: "Family-friendly fishing event with activities for kids and beginners. Free equipment rental available.",
      imageUrl: "/src/assets/gary-tresize-fffsh5XnyTI-unsplash.jpg",
      registrationDeadline: "2024-06-05",
      entryFee: "Free",
      maxParticipants: 100,
      currentParticipants: 45
    }
  ],
  successStories: [
    {
      id: "story1",
      title: "Record-Breaking Salmon",
      author: "Mike Johnson",
      date: "2024-03-15",
      content: "Caught a massive 45-pound Chinook salmon at Coastal Bay. The fight lasted over 30 minutes!",
      imageUrl: "/src/assets/calin-stan-jW2zQnopO4s-unsplash.jpg",
      location: "Coastal Bay",
      fishSpecies: "Chinook Salmon",
      weight: "45 lbs",
      likes: 156,
      comments: [
        {
          user: "SalmonPro",
          text: "That's an incredible catch! What tackle were you using?",
          date: "2024-03-15"
        }
      ]
    },
    {
      id: "story2",
      title: "First Trout on Fly",
      author: "Sarah Chen",
      date: "2024-03-10",
      content: "After months of practice, finally caught my first rainbow trout on a dry fly! The moment was magical.",
      imageUrl: "/src/assets/zab-consulting-QTXAXnJA3oY-unsplash.jpg",
      location: "Blue River",
      fishSpecies: "Rainbow Trout",
      weight: "3.5 lbs",
      likes: 89,
      comments: [
        {
          user: "FlyFishMaster",
          text: "Congratulations! That's a beautiful fish. What pattern did you use?",
          date: "2024-03-10"
        }
      ]
    }
  ]
};

export default database;
