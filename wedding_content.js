/**
 * WEDDING INVITATION — CONTENT TEMPLATE CONFIGURATION
 * 
 * Updated with exact first-page content and metadata:
 * - Invocations: Murugan Thunai · Subhamasthu
 * - Hosts: Mr. G. Kandavel & Mrs. K. Vasanthi together with Mr. G. Kumaravel & Mrs. K. Bharathi
 * - Joining Phrase: "joining in sacred matrimony with"
 * - Couple: Chiranjeevi K. Santhosh & Sowbhagyavathi S. Raja Meenakshi
 * - Bride's Parents: Mr. T. Sivanantha Saraswathi & Mrs. S. Ambika Rani
 * - Siblings Compliments: K. Akash, K.V.B. Vijay Vignesh, Dr. K.V.B. Aishwarrya
 * - Events: Muhurtham (28 Jan 2027, 9:00 AM - 10:30 AM at Sriram Mahal, Madurai)
 *           Grand Reception (30 Jan 2027, 6:30 PM onwards at Kiran Palace, TNHB Colony, Korattur, Chennai)
 */

window.WEDDING_DATA = {
  // ─── SACRED INVOCATIONS ───
  invocations: {
    mantraMurugan: "Murugan Thunai",
    mantraSubhamasthu: "Subhamasthu"
  },

  // ─── GENERAL HEADINGS ───
  invitationTitle: "Wedding Invitation",
  tagline: "Together with their families, warmly invite you and your family to share in our happiness",

  // ─── INVITATION MESSAGE & HOSTS ───
  invitationMessage: {
    prelude: "With hearts full of gratitude and joy,",
    hosts: "Mr. G. Kandavel & Mrs. K. Vasanthi",
    togetherWith: "together with",
    elders: "Mr. G. Kumaravel & Mrs. K. Bharathi",
    inviteText: "warmly invite you and your family to share in our happiness and shower your blessings upon our beloved son",
    joiningPhrase: "joining in sacred matrimony with",
    journeyText: "as they begin their journey together."
  },

  // ─── THE COUPLE ───
  couple: {
    groom: {
      honorific: "Chiranjeevi",
      name: "K. Santhosh",
      profession: "Executive, ITC Limited, Chennai",
      roleInFamily: "Elder Son of",
      parents: "Mr. G. Kandavel & Mrs. K. Vasanthi",
      native: "Chennai",
      paternalGrandparents: "Late K.S. Govindasamy Nadar & Mrs. K. Santhanalakshmi (Chennai)",
      maternalGrandparents: "Late P. Srinivasan Nadar & Mrs. S. Nageswari (Sirkazhi)"
    },
    bride: {
      honorific: "Sowbhagyavathi",
      name: "S. Raja Meenakshi",
      profession: "Associate Team Lead, Neeyamo Enterprise Pvt. Ltd",
      roleInFamily: "Youngest Daughter of",
      parents: "Mr. T. Sivanantha Saraswathi & Mrs. S. Ambika Rani",
      native: "Madurai",
      paternalGrandparents: "Late T. Sivananda Nadar & Mrs. S. Meenambal (Madurai)",
      maternalGrandparents: "Late C. Sundarapandian & Mrs. S. Rathinammal (Madurai)"
    },
    caricatureArtwork: "assets/custom_couple_caricature.jpg"
  },

  // ─── SIBLINGS & EXTENDED FAMILY INVITATION ───
  siblings: [
    "K. Akash",
    "K.V.B. Vijay Vignesh",
    "Dr. K.V.B. Aishwarrya"
  ],

  // ─── CEREMONIES & EVENTS (STRICTLY 3 EVENTS) ───
  events: {
    nichayathartham: {
      title: "Nichayathartham",
      subtitle: "The Auspicious Engagement",
      dayAndDate: "Wednesday, 27th January 2027",
      time: "6:30 PM – 7:30 PM",
      venueName: "Sriram Mahal",
      address: "Kulamangalam Main Rd, Kosakulam, Madurai",
      mapsUrl: "https://maps.app.goo.gl/MWeFeFqyJtrJmTv77"
    },
    muhurtham: {
      title: "Muhurtham",
      subtitle: "Sacred Wedding Muhurtham",
      dayAndDate: "Thursday, 28th January 2027",
      tamilAlmanac: "Parabhava Varudam, Thai Month 14th Day",
      auspiciousTime: "between 9:00 AM – 10:30 AM",
      astrologyNotes: "Meena Lagnam, Chithirai Nakshatram",
      venueName: "Sriram Mahal",
      address: "Kulamangalam Main Rd, Kosakulam, Madurai",
      mapsUrl: "https://maps.app.goo.gl/MWeFeFqyJtrJmTv77",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Muhurtham+|+Santhosh+%26+Raja+Meenakshi&dates=20270128T033000Z/20270128T050000Z&details=Sacred+Wedding+Muhurtham+of+K.+Santhosh+%26+S.+Raja+Meenakshi+at+Sriram+Mahal,+Madurai.&location=Sriram+Mahal,+Kulamangalam+Main+Rd,+Kosakulam,+Madurai"
    },
    reception: {
      title: "Grand Reception",
      subtitle: "Groom's Family Celebration",
      dayAndDate: "Saturday, 30th January 2027",
      time: "6:30 PM onwards",
      venueName: "Kiran Palace",
      address: "TNHB Colony, Korattur, Chennai",
      countdownTargetIso: "2027-01-30T18:30:00+05:30",
      mapsUrl: "https://maps.app.goo.gl/UEqebarVW3SBahhA9",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+|+Santhosh+%26+Raja+Meenakshi&dates=20270130T130000Z/20270130T173000Z&details=Grand+Wedding+Reception+of+K.+Santhosh+%26+S.+Raja+Meenakshi+at+Kiran+Palace,+TNHB+Colony,+Korattur,+Chennai.&location=Kiran+Palace,+TNHB+Colony,+Korattur,+Chennai"
    }
  },

  // ─── BLESSINGS & COMPLIMENTS ───
  blessingsQuote: "Two souls, one sacred path. Guided by divine love and blessed by family elders, we begin our eternal journey.",
  tamilKural: "அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை பண்பும் பயனும் அது.",
  compliments: "With best compliments from Family, Relatives & Friends."
};
