const express = require('express');
const router = express.Router();
const Travel = require('../models/travel');

router.post('/add-initial-data', async (req, res) => {
    try {
        const initialData = [
            {
                state: 'California',
                activities: [
                    'Visit Yosemite National Park',
                    'Explore San Francisco',
                    'Relax at Santa Monica Beach',
                    'Drive along the Pacific Coast Highway',
                    'Tour the Hollywood Walk of Fame',
                    'Explore Napa Valley Vineyards',
                    'Hike in Joshua Tree National Park',
                    'Visit Disneyland in Anaheim',
                    'Explore Lake Tahoe',
                    'Enjoy Big Sur’s Scenic Views'
                ]
            },
            {
                state: 'New York',
                activities: [
                    'See Times Square',
                    'Visit Central Park',
                    'Explore the Statue of Liberty',
                    'Walk the Brooklyn Bridge',
                    'Visit the Metropolitan Museum of Art',
                    'See a Broadway Show',
                    'Tour the Empire State Building',
                    'Visit the 9/11 Memorial',
                    'Explore the American Museum of Natural History',
                    'Stroll Through the High Line'
                ]
            },
            {
                state: 'Texas',
                activities: [
                    'Visit the Alamo in San Antonio',
                    'Explore the Space Center in Houston',
                    'Stroll Through the Dallas Arboretum',
                    'Relax at South Padre Island',
                    'Tour the Texas State Capitol in Austin',
                    'Visit the Fort Worth Stockyards',
                    'Hike in Big Bend National Park',
                    'Enjoy Music at Austin City Limits',
                    'Explore the San Antonio River Walk',
                    'Visit the Houston Museum of Natural Science'
                ]
            },
            {
                state: 'Florida',
                activities: [
                    'Visit Walt Disney World',
                    'Relax on Miami Beach',
                    'Explore the Everglades National Park',
                    'Visit Universal Studios in Orlando',
                    'Tour the Kennedy Space Center',
                    'Stroll Through the Vizcaya Museum and Gardens',
                    'Enjoy Art at the Salvador Dalí Museum',
                    'Snorkel in the Florida Keys',
                    'Explore the Art Deco District in Miami',
                    'Visit the Naples Botanical Garden'
                ]
            },
            {
                state: 'Illinois',
                activities: [
                    'See the Willis Tower Skydeck',
                    'Visit Millennium Park',
                    'Tour the Art Institute of Chicago',
                    'Explore Navy Pier',
                    'Stroll Through Lincoln Park Zoo',
                    'See a Cubs Game at Wrigley Field',
                    'Cruise the Chicago River Architecture Tour',
                    'Visit the Museum of Science and Industry',
                    'Walk the Magnificent Mile',
                    'See a Show at the Chicago Theatre'
                ]
            },
            {
                state: 'Nevada',
                activities: [
                    'Visit the Las Vegas Strip',
                    'Explore Red Rock Canyon',
                    'See the Hoover Dam',
                    'Tour the Neon Museum',
                    'Hike in Valley of Fire State Park',
                    'Visit Lake Tahoe',
                    'Explore Great Basin National Park',
                    'Enjoy a Show in Las Vegas',
                    'Stroll Through the Bellagio Conservatory',
                    'Tour the Mob Museum'
                ]
            },
            {
                state: 'Hawaii',
                activities: [
                    'Relax on Waikiki Beach',
                    'Visit Pearl Harbor',
                    'Hike Diamond Head',
                    'Explore the Na Pali Coast',
                    'Snorkel at Hanauma Bay',
                    'Tour the Volcanoes National Park',
                    'Visit Maui’s Road to Hana',
                    'Enjoy a Luau',
                    'Surf in North Shore Oahu',
                    'Explore the Maui Ocean Center'
                ]
            },
            {
                state: 'Arizona',
                activities: [
                    'Visit the Grand Canyon',
                    'Explore Antelope Canyon',
                    'Hike in Sedona',
                    'Tour the Desert Botanical Garden',
                    'Visit Monument Valley',
                    'Explore Saguaro National Park',
                    'Tour the Heard Museum',
                    'Stroll Through Old Town Scottsdale',
                    'See the Petrified Forest',
                    'Visit Horseshoe Bend'
                ]
            },
            {
                state: 'Colorado',
                activities: [
                    'Hike in Rocky Mountain National Park',
                    'Ski in Aspen',
                    'Explore Garden of the Gods',
                    'Visit Mesa Verde National Park',
                    'Tour the Denver Art Museum',
                    'Drive the Million Dollar Highway',
                    'Relax in Glenwood Springs',
                    'Visit Pikes Peak',
                    'Tour the U.S. Air Force Academy',
                    'Explore the Royal Gorge Bridge'
                ]
            },
            {
                state: 'Massachusetts',
                activities: [
                    'Walk the Freedom Trail in Boston',
                    'Visit Harvard University',
                    'Tour the Salem Witch Museum',
                    'Relax on Cape Cod',
                    'See Plymouth Rock',
                    'Explore the Boston Common',
                    'Visit the Museum of Fine Arts',
                    'Tour the USS Constitution',
                    'See a Game at Fenway Park',
                    'Explore Martha’s Vineyard'
                ]
            },
            {
                state: 'Washington',
                activities: [
                    'Visit the Space Needle',
                    'Explore Mount Rainier National Park',
                    'Tour Pike Place Market',
                    'See the Chihuly Garden and Glass',
                    'Hike in Olympic National Park',
                    'Visit the Museum of Pop Culture',
                    'Tour the Seattle Art Museum',
                    'Explore the San Juan Islands',
                    'Visit Leavenworth',
                    'Tour the Boeing Museum of Flight'
                ]
            },
            {
                state: 'Georgia',
                activities: [
                    'Visit the Georgia Aquarium',
                    'Tour the World of Coca-Cola',
                    'Explore Stone Mountain Park',
                    'Stroll Through the Atlanta Botanical Garden',
                    'Visit the Martin Luther King Jr. National Historic Site',
                    'See the Savannah Historic District',
                    'Hike in the Chattahoochee National Forest',
                    'Tour the CNN Center',
                    'Relax on Tybee Island',
                    'Explore the Augusta Canal'
                ]
            }
        ];

        await Travel.insertMany(initialData);
        res.status(201).json({ message: 'Initial data added successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { state, activities } = req.body;

    const travel = new Travel({
        state,
        activities
    });

    try {
        const newTravel = await travel.save();
        res.status(201).json(newTravel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
