const express = require('express');
const router = express.Router();
const Travel = require('../models/travel');

router.post('/add-initial-data', async (req, res) => {
    try {
        const initialData = [
            {
                state: 'Alabama',
                activities: [
                    'Visit the U.S. Space & Rocket Center',
                    'Tour the Birmingham Civil Rights Institute',
                    'Relax on Gulf Shores beaches',
                    'Explore the Huntsville Botanical Garden',
                    'Visit the Alabama Jazz Hall of Fame',
                    'Tour the Mobile Carnival Museum',
                    'See the Montgomery Zoo',
                    'Hike in Little River Canyon National Preserve',
                    'Tour the Barber Vintage Motorsports Museum',
                    'Visit the Dauphin Island Sea Lab'
                ]
            },
            {
                state: 'Alaska',
                activities: [
                    'Visit Denali National Park',
                    'Explore Glacier Bay National Park',
                    'Cruise the Kenai Fjords',
                    'See the Northern Lights in Fairbanks',
                    'Tour the Alaska Native Heritage Center',
                    'Hike in Wrangell-St. Elias National Park',
                    'See wildlife at the Alaska Wildlife Conservation Center',
                    'Visit the Anchorage Museum',
                    'Explore the Mendenhall Glacier',
                    'Go whale watching in Juneau'
                ]
            },
            {
                state: 'Arkansas',
                activities: [
                    'Visit Hot Springs National Park',
                    'Tour the Crystal Bridges Museum of American Art',
                    'Explore the Ozark National Forest',
                    'See the Blanchard Springs Caverns',
                    'Tour the Little Rock Central High School National Historic Site',
                    'Hike in Petit Jean State Park',
                    'Visit the Clinton Presidential Library',
                    'Explore the Buffalo National River',
                    'Tour the Arkansas Air and Military Museum',
                    'Visit the Garvan Woodland Gardens'
                ]
            },
            {
                state: 'Connecticut',
                activities: [
                    'Visit Mystic Seaport Museum',
                    'Tour Yale University and Art Gallery',
                    'Explore the Mark Twain House',
                    'Visit the Connecticut Science Center',
                    'Relax at Hammonasset Beach State Park',
                    'Tour the Gillette Castle State Park',
                    'See the New England Air Museum',
                    'Explore the Beardsley Zoo',
                    'Hike in Sleeping Giant State Park',
                    'Visit the Mashantucket Pequot Museum'
                ]
            },
            {
                state: 'Delaware',
                activities: [
                    'Relax at Rehoboth Beach',
                    'Tour the Winterthur Museum',
                    'Visit the Hagley Museum and Library',
                    'Explore the Delaware Art Museum',
                    'Tour the Nemours Mansion and Gardens',
                    'Visit the Air Mobility Command Museum',
                    'See wildlife at the Bombay Hook National Wildlife Refuge',
                    'Explore the Brandywine Zoo',
                    'Hike in Cape Henlopen State Park',
                    'Visit the John Dickinson Plantation'
                ]
            },
            {
                state: 'Idaho',
                activities: [
                    'Visit Shoshone Falls',
                    'Explore Craters of the Moon National Monument',
                    'Hike in the Sawtooth National Recreation Area',
                    'Tour the Old Idaho Penitentiary',
                    'Visit the Idaho State Capitol',
                    'See the World Center for Birds of Prey',
                    'Relax at Coeur d\'Alene Lake',
                    'Tour the Museum of Idaho',
                    'Ski at Sun Valley Resort',
                    'Hike in City of Rocks National Reserve'
                ]
            },
            {
                state: 'Indiana',
                activities: [
                    'Visit the Indianapolis Motor Speedway Museum',
                    'Explore the Children\'s Museum of Indianapolis',
                    'Tour the Indiana Dunes National Park',
                    'See the Indiana State Museum',
                    'Visit the Eiteljorg Museum of American Indians and Western Art',
                    'Tour the Indiana University Bloomington',
                    'Explore the Conner Prairie Interactive History Park',
                    'Hike in Brown County State Park',
                    'Visit the Indianapolis Zoo',
                    'Tour the Indiana State Capitol'
                ]
            },
            {
                state: 'Iowa',
                activities: [
                    'Visit the National Mississippi River Museum & Aquarium',
                    'Tour the State Capitol in Des Moines',
                    'Explore the Amana Colonies',
                    'Visit the Field of Dreams Movie Site',
                    'Hike in Maquoketa Caves State Park',
                    'Tour the Herbert Hoover Presidential Library and Museum',
                    'See the Grotto of the Redemption',
                    'Visit the Blank Park Zoo',
                    'Explore the Pella Historical Village',
                    'Tour the John Wayne Birthplace Museum'
                ]
            },
            {
                state: 'Kansas',
                activities: [
                    'Visit the Kansas Cosmosphere and Space Center',
                    'Explore the Tallgrass Prairie National Preserve',
                    'Tour the Dwight D. Eisenhower Presidential Library',
                    'See the Sedgwick County Zoo',
                    'Visit the Kansas State Capitol',
                    'Explore the Boot Hill Museum',
                    'Tour the Wichita Art Museum',
                    'Hike in the Flint Hills',
                    'Visit the Museum of World Treasures',
                    'See the Monument Rocks'
                ]
            },
            {
                state: 'Kentucky',
                activities: [
                    'Visit the Mammoth Cave National Park',
                    'Tour the Kentucky Derby Museum',
                    'Explore the Louisville Slugger Museum & Factory',
                    'See the Kentucky Horse Park',
                    'Tour the Muhammad Ali Center',
                    'Visit the Ark Encounter',
                    'Explore the Red River Gorge',
                    'See the Creation Museum',
                    'Tour the Mary Todd Lincoln House',
                    'Hike in the Cumberland Falls State Resort Park'
                ]
            },
            {
                state: 'Louisiana',
                activities: [
                    'Visit the French Quarter in New Orleans',
                    'Tour the National WWII Museum',
                    'Explore the Garden District',
                    'See the Mardi Gras World',
                    'Tour the Oak Alley Plantation',
                    'Visit the Louisiana State Museum',
                    'Take a swamp tour',
                    'Listen to jazz at Preservation Hall',
                    'Explore the Audubon Zoo',
                    'Visit the St. Louis Cathedral'
                ]
            },
            {
                state: 'Maine',
                activities: [
                    'Explore Acadia National Park',
                    'Visit Portland Head Light',
                    'Tour the Old Port in Portland',
                    'See the Penobscot Narrows Bridge and Observatory',
                    'Hike in Baxter State Park',
                    'Visit the Maine Maritime Museum',
                    'Explore Bar Harbor',
                    'Tour the Wadsworth-Longfellow House',
                    'Visit the Farnsworth Art Museum',
                    'Relax on Ogunquit Beach'
                ]
            },
            {
                state: 'Maryland',
                activities: [
                    'Visit the National Aquarium in Baltimore',
                    'Tour Fort McHenry',
                    'Explore the Assateague Island National Seashore',
                    'See the Maryland Science Center',
                    'Tour the U.S. Naval Academy in Annapolis',
                    'Visit the American Visionary Art Museum',
                    'Walk around the Inner Harbor',
                    'Tour the Chesapeake Bay Maritime Museum',
                    'Visit the Walters Art Museum',
                    'Explore Deep Creek Lake'
                ]
            },
            {
                state: 'Michigan',
                activities: [
                    'Visit the Henry Ford Museum',
                    'Tour Mackinac Island',
                    'Explore Sleeping Bear Dunes National Lakeshore',
                    'See the Detroit Institute of Arts',
                    'Visit the Michigan State Capitol',
                    'Tour the Frederik Meijer Gardens & Sculpture Park',
                    'Relax on Lake Michigan beaches',
                    'Explore the Pictured Rocks National Lakeshore',
                    'Tour the Ford Piquette Avenue Plant',
                    'Hike in Tahquamenon Falls State Park'
                ]
            },
            {
                state: 'Minnesota',
                activities: [
                    'Visit the Mall of America',
                    'Explore the Boundary Waters Canoe Area Wilderness',
                    'Tour the Minneapolis Institute of Art',
                    'See Minnehaha Park',
                    'Visit the Como Park Zoo & Conservatory',
                    'Hike in Itasca State Park',
                    'Explore the North Shore Scenic Drive',
                    'Tour the Science Museum of Minnesota',
                    'Visit the Walker Art Center',
                    'See a Vikings game at U.S. Bank Stadium'
                ]
            },
            {
                state: 'Mississippi',
                activities: [
                    'Visit the Vicksburg National Military Park',
                    'Tour the B.B. King Museum',
                    'Relax on Gulfport Beach',
                    'Explore the Natchez Trace Parkway',
                    'See the Elvis Presley Birthplace',
                    'Tour the Mississippi Museum of Art',
                    'Visit the Biloxi Lighthouse',
                    'Explore the Delta Blues Museum',
                    'Tour the Old Capitol Museum',
                    'See the Mississippi Civil Rights Museum'
                ]
            },
            {
                state: 'Missouri',
                activities: [
                    'Visit the Gateway Arch',
                    'Tour the Missouri Botanical Garden',
                    'Explore the Ozark National Scenic Riverways',
                    'See the St. Louis Zoo',
                    'Tour the Harry S. Truman Library & Museum',
                    'Visit the Nelson-Atkins Museum of Art',
                    'Explore the Lake of the Ozarks',
                    'Tour the Mark Twain Boyhood Home & Museum',
                    'See a show in Branson',
                    'Visit the Silver Dollar City amusement park'
                ]
            },
            {
                state: 'Montana',
                activities: [
                    'Visit Glacier National Park',
                    'Explore Yellowstone National Park',
                    'See the Museum of the Rockies',
                    'Hike in the Big Sky Resort',
                    'Tour the Little Bighorn Battlefield',
                    'Relax at Flathead Lake',
                    'Explore the Grizzly & Wolf Discovery Center',
                    'Tour the Lewis & Clark Interpretive Center',
                    'Visit the C.M. Russell Museum',
                    'Hike in the Beartooth Mountains'
                ]
            },
            {
                state: 'Nebraska',
                activities: [
                    'Visit the Henry Doorly Zoo and Aquarium',
                    'Tour the Strategic Air Command & Aerospace Museum',
                    'Explore the Scotts Bluff National Monument',
                    'See the Chimney Rock National Historic Site',
                    'Tour the State Capitol in Lincoln',
                    'Visit the Joslyn Art Museum',
                    'Hike in the Sandhills',
                    'Tour the Buffalo Bill Ranch State Historical Park',
                    'Visit the Homestead National Monument of America',
                    'Explore the Archway'
                ]
            },
            {
                state: 'New Hampshire',
                activities: [
                    'Visit Mount Washington',
                    'Explore the White Mountain National Forest',
                    'Tour the Strawbery Banke Museum',
                    'Relax on Hampton Beach',
                    'Visit the Flume Gorge',
                    'Tour the Currier Museum of Art',
                    'Hike in Franconia Notch State Park',
                    'See the Castle in the Clouds',
                    'Explore the Lakes Region',
                    'Visit the Saint-Gaudens National Historic Site'
                ]
            },
            {
                state: 'New Jersey',
                activities: [
                    'Visit the Atlantic City Boardwalk',
                    'Tour the Liberty Science Center',
                    'Explore the Grounds for Sculpture',
                    'Relax on Cape May Beach',
                    'See the Thomas Edison National Historical Park',
                    'Visit the Adventure Aquarium',
                    'Tour the Princeton University Art Museum',
                    'Explore the Great Falls of the Passaic River',
                    'Hike in the Delaware Water Gap',
                    'Visit the Battleship New Jersey'
                ]
            },
            {
                state: 'New Mexico',
                activities: [
                    'Visit Carlsbad Caverns National Park',
                    'Explore White Sands National Park',
                    'Tour the Taos Pueblo',
                    'See the Georgia O\'Keeffe Museum',
                    'Visit the Bandelier National Monument',
                    'Tour the Santa Fe Plaza',
                    'Explore the Gila Cliff Dwellings',
                    'Relax in the Ojo Caliente Hot Springs',
                    'Visit the International UFO Museum',
                    'Hike in the Sandia Mountains'
                ]
            },
            {
                state: 'North Carolina',
                activities: [
                    'Visit the Biltmore Estate',
                    'Explore the Great Smoky Mountains National Park',
                    'Tour the Wright Brothers National Memorial',
                    'See the North Carolina Museum of Art',
                    'Relax on the Outer Banks beaches',
                    'Visit the NASCAR Hall of Fame',
                    'Tour the USS North Carolina',
                    'Explore the Blue Ridge Parkway',
                    'Hike in Grandfather Mountain',
                    'See the North Carolina Zoo'
                ]
            },
            {
                state: 'North Dakota',
                activities: [
                    'Visit Theodore Roosevelt National Park',
                    'Tour the North Dakota Heritage Center & State Museum',
                    'Explore the Knife River Indian Villages',
                    'See the International Peace Garden',
                    'Visit the National Buffalo Museum',
                    'Tour the Fort Union Trading Post',
                    'Hike in the Maah Daah Hey Trail',
                    'Explore the Lewis & Clark Interpretive Center',
                    'Visit the Plains Art Museum',
                    'See the Scandinavian Heritage Park'
                ]
            },
            {
                state: 'Ohio',
                activities: [
                    'Visit the Rock & Roll Hall of Fame',
                    'Tour the Cincinnati Zoo & Botanical Garden',
                    'Explore the Cleveland Museum of Art',
                    'See the National Museum of the U.S. Air Force',
                    'Tour the Ohio Statehouse',
                    'Visit the Franklin Park Conservatory',
                    'Explore the Cuyahoga Valley National Park',
                    'See the Pro Football Hall of Fame',
                    'Tour the Columbus Zoo and Aquarium',
                    'Visit the Wright-Patterson Air Force Base'
                ]
            },
            {
                state: 'Oklahoma',
                activities: [
                    'Visit the Oklahoma City National Memorial',
                    'Explore the Tulsa Zoo',
                    'Tour the National Cowboy & Western Heritage Museum',
                    'See the Philbrook Museum of Art',
                    'Hike in the Wichita Mountains Wildlife Refuge',
                    'Visit the Myriad Botanical Gardens',
                    'Tour the Oklahoma State Capitol',
                    'Explore the Chickasaw Cultural Center',
                    'See the Gilcrease Museum',
                    'Visit the Museum of Osteology'
                ]
            },
            {
                state: 'Oregon',
                activities: [
                    'Visit Crater Lake National Park',
                    'Explore the Columbia River Gorge',
                    'Tour the Oregon Museum of Science and Industry',
                    'See the International Rose Test Garden',
                    'Hike in Mount Hood National Forest',
                    'Visit the Portland Art Museum',
                    'Tour the Oregon Coast',
                    'See Multnomah Falls',
                    'Explore the Oregon Caves National Monument',
                    'Visit the Tillamook Cheese Factory'
                ]
            },
            {
                state: 'Pennsylvania',
                activities: [
                    'Visit the Liberty Bell and Independence Hall',
                    'Tour the Gettysburg National Military Park',
                    'See the Philadelphia Museum of Art',
                    'Explore the Hershey\'s Chocolate World',
                    'Tour the Amish Country',
                    'Visit the Pittsburgh Zoo & PPG Aquarium',
                    'Explore the Valley Forge National Historical Park',
                    'See the Pennsylvania State Capitol',
                    'Tour the Eastern State Penitentiary',
                    'Visit the Andy Warhol Museum'
                ]
            },
            {
                state: 'Rhode Island',
                activities: [
                    'Visit the Newport Mansions',
                    'Explore the Roger Williams Park Zoo',
                    'Tour the Rhode Island School of Design Museum',
                    'Relax on Narragansett Beach',
                    'See the WaterFire Providence',
                    'Visit the Blithewold Mansion, Gardens & Arboretum',
                    'Tour the Fort Adams State Park',
                    'Explore Block Island',
                    'Visit the Touro Synagogue',
                    'Hike in the Mohegan Bluffs'
                ]
            },
            {
                state: 'South Carolina',
                activities: [
                    'Visit the Charleston Historic District',
                    'Explore the Myrtle Beach Boardwalk',
                    'Tour the Magnolia Plantation and Gardens',
                    'See the Fort Sumter National Monument',
                    'Relax on Hilton Head Island',
                    'Visit the South Carolina State Museum',
                    'Tour the Patriots Point Naval & Maritime Museum',
                    'Hike in Table Rock State Park',
                    'Explore Congaree National Park',
                    'Visit the Riverbanks Zoo & Garden'
                ]
            },
            {
                state: 'South Dakota',
                activities: [
                    'Visit Mount Rushmore',
                    'Explore Badlands National Park',
                    'See the Crazy Horse Memorial',
                    'Tour Custer State Park',
                    'Visit Wind Cave National Park',
                    'See the Mammoth Site',
                    'Explore the Black Hills',
                    'Tour the Deadwood Historic District',
                    'Visit the South Dakota State Capitol',
                    'See the Corn Palace'
                ]
            },
            {
                state: 'Tennessee',
                activities: [
                    'Visit the Great Smoky Mountains National Park',
                    'Tour Graceland',
                    'See the Country Music Hall of Fame',
                    'Explore the Nashville Parthenon',
                    'Visit Dollywood',
                    'Tour the Jack Daniel\'s Distillery',
                    'Hike in the Cherokee National Forest',
                    'See the Tennessee Aquarium',
                    'Visit the Ryman Auditorium',
                    'Explore the Chattanooga Choo Choo'
                ]
            },
            {
                state: 'Utah',
                activities: [
                    'Visit Zion National Park',
                    'Explore Bryce Canyon National Park',
                    'Tour Arches National Park',
                    'See Monument Valley',
                    'Hike in Canyonlands National Park',
                    'Relax at the Great Salt Lake',
                    'Visit the Utah Olympic Park',
                    'Tour the Temple Square',
                    'See the Natural History Museum of Utah',
                    'Hike in Capitol Reef National Park'
                ]
            },
            {
                state: 'Vermont',
                activities: [
                    'Explore the Green Mountain National Forest',
                    'Visit the Ben & Jerry\'s Factory',
                    'Tour the Shelburne Museum',
                    'Hike in the Smugglers\' Notch State Park',
                    'See the Hildene, The Lincoln Family Home',
                    'Relax on Lake Champlain',
                    'Visit the Vermont State House',
                    'Tour the Montshire Museum of Science',
                    'Explore the Vermont Marble Museum',
                    'Visit the Billings Farm & Museum'
                ]
            },
            {
                state: 'Virginia',
                activities: [
                    'Visit Colonial Williamsburg',
                    'Tour the Monticello',
                    'Explore Shenandoah National Park',
                    'See the Arlington National Cemetery',
                    'Tour the Virginia Beach Boardwalk',
                    'Visit the Jamestown Settlement',
                    'Hike in the Blue Ridge Mountains',
                    'Explore the Virginia Museum of Fine Arts',
                    'See the Natural Bridge',
                    'Tour the George Washington\'s Mount Vernon'
                ]
            },
            {
                state: 'West Virginia',
                activities: [
                    'Visit the New River Gorge National Park',
                    'Explore the Blackwater Falls State Park',
                    'Tour the Greenbrier Resort',
                    'See the Seneca Rocks',
                    'Visit the Trans-Allegheny Lunatic Asylum',
                    'Hike in the Monongahela National Forest',
                    'Tour the Cass Scenic Railroad',
                    'Explore the Harpers Ferry National Historical Park',
                    'Visit the West Virginia State Museum',
                    'Relax at the Canaan Valley Resort'
                ]
            },
            {
                state: 'Wisconsin',
                activities: [
                    'Visit the Wisconsin Dells',
                    'Tour the Milwaukee Art Museum',
                    'Explore the Apostle Islands National Lakeshore',
                    'See the Taliesin Preservation',
                    'Visit the Harley-Davidson Museum',
                    'Relax on Door County beaches',
                    'Tour the House on the Rock',
                    'Hike in Devil\'s Lake State Park',
                    'Visit the Green Bay Packers Hall of Fame',
                    'Explore the Olbrich Botanical Gardens'
                ]
            },
            {
                state: 'Wyoming',
                activities: [
                    'Visit Yellowstone National Park',
                    'Explore Grand Teton National Park',
                    'Tour the Buffalo Bill Center of the West',
                    'See the Old Faithful Geyser',
                    'Hike in the Wind River Range',
                    'Visit the Jackson Hole Mountain Resort',
                    'Tour the Fort Laramie National Historic Site',
                    'See the Devils Tower National Monument',
                    'Explore the National Museum of Wildlife Art',
                    'Relax in the Hot Springs State Park'
                ]
            },
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
                    'Enjoy Big Surs Scenic Views'
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
