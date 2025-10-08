const questions = [
 {
    "question": "85. What is the current range indicated by the yellow arc for Battery 1 (-59-59A)?",
    "options": ["a) -4-59A", "b) -59--5A", "c) 0-1A", "d) 2-100A"],
    "correct": 1
  },
  {
    "question": "86. What is the datum position for the Center of Gravity?",
    "options": ["a) 100\" forward of firewall", "b) 75\" forward of firewall", "c) 150\" forward of firewall", "d) 50\" forward of firewall"],
    "correct": 0
  },
  {
    "question": "87. What is the forward Center of Gravity range in terms of MAC (Mean Aerodynamic Chord)?",
    "options": ["a) 20% to 30% MAC", "b) 31.5% to 40% MAC", "c) 9.8% to 21.1% MAC", "d) 5.5% to 15.5% MAC"],
    "correct": 2
  },
  {
    "question": "88. What is the aft Center of Gravity position in terms of MAC?",
    "options": ["a) 21.1% MAC", "b) 31.5% MAC", "c) 9.8% MAC", "d) 50% MAC"],
    "correct": 1
  },
  {
    "question": "89. What is the flap setting for takeoff?",
    "options": ["a) 0%", "b) 100%", "c) 50%", "d) 25%"],
    "correct": 2
  },
  {
    "question": "90. Which of the following are valid flap settings for landing?",
    "options": ["a) 50% and 100% only", "b) 0% only", "c) 0%, 50%, and 100%", "d) 100% only"],
    "correct": 2
  },
  {
    "question": "91. What is the load factor range for Flaps 0%?",
    "options": ["a) 0g to +1.9g", "b) -1g to +1g", "c) -4g to +4g", "d) -1.9g to +3.8g"],
    "correct": 3
  },
  {
    "question": "92. What is the load factor range for Flaps 50%?",
    "options": ["a) -4g to +4g", "b) -1g to +1g", "c) 0g to +1.9g", "d) -1.9g to +3.8g"],
    "correct": 2
  },
  {
    "question": "93. What is the load factor range for Flaps 100%?",
    "options": ["a) -1g to +1g", "b) -1.9g to +3.8g", "c) 0g to +1.9g", "d) -4g to +4g"],
    "correct": 2
  },
  {
    "question": "94. What is the maximum takeoff altitude in feet Mean Sea Level (MSL)?",
    "options": ["a) 10,000 ft MSL", "b) 15,000 ft MSL", "c) 5,000 ft MSL", "d) 17,500 ft MSL"],
    "correct": 0
  },
  {
    "question": "95. What is the maximum operating altitude in feet Mean Sea Level (MSL)?",
    "options": ["a) 17,500 ft MSL", "b) 10,000 ft MSL", "c) 12,500 ft MSL", "d) 20,000 ft MSL"],
    "correct": 0
  },
  {
    "question": "96. What is the speed range for the autopilot?",
    "options": ["a) 80-185 KIAS", "b) 60-150 KIAS", "c) 100-200 KIAS", "d) 70-175 KIAS"],
    "correct": 0
  },
  {
    "question": "97. What is the minimum height for takeoff or climb when using the autopilot?",
    "options": ["a) 300 ft AGL", "b) 400 ft AGL", "c) 500 ft AGL", "d) 200 ft AGL"],
    "correct": 1
  },
  {
    "question": "98. What is the minimum height enroute or during descent for the autopilot?",
    "options": ["a) 1500 ft AGL", "b) 1200 ft AGL", "c) 1000 ft AGL", "d) 800 ft AGL"],
    "correct": 2
  },
  {
    "question": "99. What is the minimum height for approach in GP or GS mode using the autopilot?",
    "options": ["a) 400 ft AGL or MDA/DA/DH", "b) 300 ft AGL or MDA/DA/DH", "c) 100 ft AGL or MDA/DA/DH", "d) 200 ft AGL or MDA/DA/DH"],
    "correct": 3
  },
  {
    "question": "100. What are the pitch and roll limits for autopilot engagement?",
    "options": ["a) Pitch+/- 30 , Roll+/- 75", "b) Pitch +/- 25 , Roll +/- 70", "c) Pitch+/- 35 , Roll+/- 80", "d) Pitch +/- 20 , Roll +/- 60"],
    "correct": 0
  },
  {
    "question": "101. What are the pitch and roll limits for autopilot command in FD mode?",
    "options": ["a) Pitch +20 , -15 , Roll+/- 25", "b) Pitch +15 , -10 , Roll+/- 15", "c) Pitch +30 , -25 , Roll+/- 35", "d) Pitch +25 , -20 , Roll+/- 30"],
    "correct": 0
  },
  {
    "question": "102. When is VNAV disabled in relation to the teardrop?",
    "options": ["a) VNAV remains enabled throughout the teardrop", "b) During the middle of the teardrop", "c) At the end of the teardrop", "d) At the beginning of the teardrop"],
    "correct": 3
  },
  {
    "question": "103. What is the restriction regarding aerobatic maneuvers and spins for this aircraft?",
    "options": ["a) Allowed only during daylight", "b) Prohibited", "c) Restricted to specific altitudes", "d) Permitted with special authorization"],
    "correct": 1
  },
  {
    "question": "104. What is the minimum flight crew required for this aircraft?",
    "options": ["a) Two pilots", "b) One pilot and one flight engineer", "c) One pilot and one co-pilot", "d) One pilot"],
    "correct": 3
  },
  {
    "question": "105. Under what conditions is this aircraft approved to operate?",
    "options": ["a) VFR and IFR day and night", "b) VFR day only", "c) VFR day and IFR night", "d) IFR night only"],
    "correct": 0
  },
  {
    "question": "106. What is the restriction regarding flight into known icing conditions?",
    "options": ["a) Permitted with de-icing equipment", "b) Prohibited", "c) Allowed only in VFR conditions", "d) Restricted to short durations"],
    "correct": 1
  },
  {
    "question": "107. What type of runway surface can this aircraft operate on?",
    "options": ["a) Grass runways only", "b) Concrete runways only", "c) Paved runways only", "d) Any smooth runway surface"],
    "correct": 3
  },
  {
    "question": "108. What is the maximum occupancy limit for this aircraft?",
    "options": ["a) 3 persons", "b) 2 persons", "c) 4+1 persons", "d) 5 persons"],
    "correct": 2
  },
  {
    "question": "109. What is the policy regarding the use of recirculation mode during flight?",
    "options": ["a) Allowed only during descent", "b) Prohibited", "c) Required for all flights", "d) Optional based on pilot discretion"],
    "correct": 1
  },
  {
    "question": "110. What is the smoking policy in this aircraft?",
    "options": ["a) Prohibited", "b) Allowed with ventilation", "c) Allowed in designated areas", "d) Permitted during short flights"],
    "correct": 0
  },
  {
    "question": "111. What communication equipment must be available for the pilot when two-way communications are required?",
    "options": ["a) A handheld radio", "b) A speaker system", "c) A mobile phone with headset", "d) A headset meeting TSO C139 or a microphone meeting TSO C58"],
    "correct": 3
  },
  {
    "question": "112. Which components are listed as required placards for this aircraft?",
    "options": ["a) Oil filter, fuel filler, upper fuselage CAPS, APU, Doors, Wing fluid filter, cabin window, CAPS", "b) Oil filter, APU, wing fluid filter, CAPS", "c) Fuel filler, doors, cabin window", "d) Oil filter, fuel filler, landing gear"],
    "correct": 0
  }

];

