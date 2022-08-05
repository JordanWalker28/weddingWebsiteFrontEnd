import motelOne from '../img/Hotels/motelone.jpeg'
import indigo from '../img/Hotels/hotel indigo.jpeg'
import raeburn from '../img/Hotels/The Raeburn .jpeg'
import bruntsfield from '../img/Hotels/Bruntsfield Hotel.jpeg'
import haymarket from '../img/Hotels/the haymarket hotel.jpeg'
import travellodge from '../img/Hotels/travelodge.jpeg'

import nanyang from '../img/Food & Drinks/nanyang.jpeg'
import loudons from '../img/Food & Drinks/Loudons.jpeg'
import ninesix from '../img/Food & Drinks/Pizza1926.jpeg'
import Maki from '../img/Food & Drinks/Maki & Ramen.jpeg'
import BRGR from '../img/Food & Drinks/BRGR.jpeg'
import Market1 from '../img/Food & Drinks/christmasmarket.jpeg'
import Dome from '../img/Food & Drinks/the-dome-christmas-edinburgh.jpeg'
import Billy from '../img/Food & Drinks/biddymulligans.jpeg'
import Chanter from '../img/Food & Drinks/chanter.jpeg'
import Finnegans from '../img/Food & Drinks/finneganswake.jpeg'

import CarltonHill from '../img/Activities/Calton Hill.jpeg'
import ChristmasMarket from '../img/Activities/ christmasmarketactivity2.jpeg'
import NationalGallery from '../img/Activities/gallery.jpeg'
import NationalScottishMuseum from '../img/Activities/NationalMuseum.jpeg'
import FreeWalkingHarryPotterTour from '../img/Activities/freewalkingtourHP.jpeg'
import VisittheHighlands from '../img/Activities/highlands.jpeg'
import Stonehaven from '../img/Activities/stonehaven.jpeg'
import ArthurSeat from '../img/Activities/arthurseat.jpeg'
import LakeDistrict from '../img/Activities/Lake District.jpeg'

const items = [{
    id:1,
    image: motelOne,
    title: 'Motel One',
    category: 'Hotels',
    categoryTest: 'Hotels',
    description: 'Whenever we visit Edinburgh, we usually stay here. There’s two, one on Princes Street and another one by Market Street (our personal favourite). Prices are per room and they’re modern and clean! (approx. 10-minute walking distance to our wedding venue)',
    descriptionGerman: 'Jedesmal wenn wir in Edinburgh sind, übernachten wir hier. Es gibt zwei ‘Motel One’- Hotels in Edinburgh, eins Nähe Princes Street und das andere Nähe Market Street (unser persönlicher Favorit!). Der Vorteil an beiden Hotels ist definitiv die zentrale Lage im Stadtzentrum, aber auch die Preise und moderne Ausrichtung sind für gewöhnlich sehr gut! (ca. 10 Minuten zu Fuß zu unserer Hochzeitslocation)'
},{
    id:2,
    image: indigo,
    title: 'Hotel Indigo',
    category: 'Hotels',
    categoryTest: 'Hotels',
    description: 'Very close 4-star hotel to our wedding venue and we are also getting a discount for guests here. If you like to book at the Hotel Indigo Princes Street, kindly mention that you are a wedding guest at the Royal College of Physicians of Edinburgh. The rate should be £120/night. (approx. 7 minutes walking distance to our venue)',
    descriptionGerman: 'Dies ist ein 4-Sterne Hotel, welches nicht weit von unserer Hochzeitslocation entfernt liegt. Zudem wurde uns auch ein Rabatt zur Verfügung gestellt. Solltet ihr das Hotel Indigo Princes Street in Erwägung ziehen, braucht ihr nur erwähnen, dass ihr Gäste auf einer Hochzeit im Royal College of Physicians of Edinburgh seid. Das Angebot sollte bei £120 pro Nacht liegen. (ca. 7 Minuten Fußweg)'
},{
    id:3,
    image: raeburn,
    title: 'The Raeburn',
    category: 'Hotels',
    categoryTest: 'Hotels',
    description: 'We have not stayed here ourselves, but reviews are really good. This place is not cheap, but also not at the high-end yet. Plus it’s in the lovely Stockbridge area with lots of little cafes and the canal nearby, Dean Village is around the corner and it’s not far from the centre either. (approx. 16 minutes to walk to our wedding venue)',
    descriptionGerman: 'Wir sind hier bisher noch nicht gewesen, allerdings sind die Bewertungen sehr gut. Das Hotel ist zwar nicht überaus günstig, jedoch sind die Preise auch noch nicht im Höchstbereich. Ein Vorteil ist definitiv die Nähe zum schönen Stockbridge-Viertel, Dean Village und dem Kanal zum Spazieren. Das Stadtzentrum ist auch nicht weit entfernt. (ca. 16 Minuten zu Fuß zu unserer Hochzeitslocation)'
},{
    id:4,
    image: bruntsfield,
    title: 'The Bruntsfield Hotel',
    category: 'Hotels',
    categoryTest: 'Hotels',
    description: 'Just further up from Lothian Road and near the Meadows is this little hotel. Friends of ours have stayed here before and said they had lovely time. It’s a little bit more in the residential neighbourhood area rather than in the middle of everything, but the city centre is still in walking distance and there are lots of different restaurants nearby. (approx. 35-minute walking distance to our wedding venue, or 8 minutes by taxi)',
    descriptionGerman: 'Das Hotel befindet sich am äußeren Ende von der Lothian Road und in der vom ‘Meadows’-Park. Freunde von uns hatten hier eine wirklich angenehme Bleibe. Die Umgebung selbst ist mehr ‘nachbarschaftlich’ statt ‘mitten im Geschehen’, aber man ist dennoch nicht weit vom Stadtzentrum entfernt. (ca. 35 Minuten Fußweg zur Hochzeits-Location oder ca. 8 Minuten mit dem Taxi)'
},{    
    id:5,
    image: haymarket,
    title: 'The Haymarket Hotel',
    category: 'Hotels',
    categoryTest: 'Hotels',
    description: 'Near the Haymarket Station and a rather residential neighbourhood, this hotel allows to get everywhere fairly easily. It is also near the bus and tram stop when coming from or going to the airport. The hotel has mid-range prices and good reviews. (approx. 5 minutes by taxi or 30 minutes to walk to our wedding venue)',
    descriptionGerman: 'Das Hotel ist trotz der nachbarschaftliche Umgebung ganz in der Nähe vom Haymarket-Bahnhof. Zum einen hat man von hier wirklich einen sehr einfach Weg vom und zum Flughafen mit dem Bus oder auch der Straßenbahn, zum anderen kommt man auch gut ins Stadtzentrum. Die Bewertungen sind gut und Preise scheinen im mittleren Bereich zu sein. (ca. 5 Minuten mit dem Taxi oder 30 Minuten zu Fuß bis zur Hochzeitslocation)'
},{
    id:6,
    image: travellodge,
    title: 'Travelodge',
    category: 'Hotels',
    categoryTest: 'Hotels',
    description: 'Everyone who has been to a Travelodge Hotel before knows this is not a high-end hotel, however, prices are reasonable. The Central Queen Street Travelodge is on our venue’s street (and right next to the city centre) and will probably be okay for just a night or two. (approx. 2 minutes to walk)',
    descriptionGerman: 'All diejenigen, die schon einmal in einem Travelodge-Hotel untergekommen sind, wissen sicherlich, dass es kein ‘High-End’-Hotel ist. Die Preise sind aber definitiv annehmbar sind. Das Central Queen Street Travelodge Hotel befindet sich sogar in der selben Straße wie unsere Hochzeitslocation. (ca. 2 Minuten Fußweg)'
},{
    id:7,
    image: nanyang,
    title: 'Nanyang',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'We love this Malaysian restaurant! We make sure to visit this place every time we’re in Edinburgh. The portions are definitely filling and for those who have never had Malaysian food, imagine the best mix of Chinese and Indian dishes. 100% the No. 1 recommendation!',
    descriptionGerman: 'Wir lieben dieses malaysische Restaurant. Bei so gut wie jedem Besuch in Edinburgh schauen wir hier vorbei. Die Portionen sind definitiv reichlich und für diejenigen, die noch nie Malaysisch gegessen haben, ihr könnt euch die Gerichte als eine Art Mix aus chinesischem und indischem Essen vorstellen. Definitiv unser Favorit!'
},{
    id:8,
    image: loudons,
    title: 'Loudons',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'Yes, yes, yes … YOU WANT THEIR BREAKFAST! From a full Scottish (including Haggis, but you can swap it if you’re not a fan), to amazing Benny dishes with poached eggs to pancakes for those with a sweet tooth. It may not be the romantic, rustic little breakfast place you may have in mind when thinking of Edinburgh, but their food is just THAT good!',
    descriptionGerman: 'Ja, ja und nochmals JA! Das Frühstück hier solltet ihr definitiv probieren! Man kann ein “Full Scottish”- Breakfast (mit einer kleinen, traditionellen Haggis-Portion, oder, für wen das nichts ist, auch mit etwas anderem ausgetauscht) bestellen, aber auch deren “Bennys” mit pochierten Eiern und Pancakes sind sehr zu empfehlen! Loudons ist zwar kein typisch, rustikales Café, aber das Essen ist sehr zu empfehlen!'
},{
    id:9,
    image: ninesix,
    title: 'Pizza 1926',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'Real authentic Italian pizza and service. Often visited by students / young adults from Italy!',
    descriptionGerman: 'Wenn ihr Lust auf echte, italienische Pizza und Bedienung habt, dann seid ihr hier richtig. Das Lokal wird auch oft von italienischen Studenten und jungen Erwachsenen besucht. '
},{
    id:10,
    image: Maki,
    title: 'Maki & Ramen',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'The Sushi and Ramen dishes are really good here and prices are also reasonable. We used to go to the one by Fountain Bridge.',
    descriptionGerman: 'Sowohl das Sushi-Angebot als auch deren ‘Ramen’-Gerichte  sind sehr zu empfehlen und die Preise sind auch in Ordnung. Es gibt mehrere Lokale in der Stadt, aber wir haben normalerweise das Restaurant Nähe ‘Fountainbridge’ besucht. '
},{
    id:11,
    image: BRGR,
    title: 'BRGR',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'Not necessary fine-dining, but if you fancy a cheap burger with some poutine fries (fries with gravy and cheese… this may either sound awful or absolutely amazing to you, let us tell you… it’s the latter!)',
    descriptionGerman: 'Nicht unbedingt ein Lokal zum ‘schick Ausgehen’, aber falls ihr Lust auf günstige Burger und ‘Poutine’-Pommes (Pommes mit Bratensauce (=Gravy) und Käse … für einige klingt dies sicher total furchtbar und für andere traumhaft… was uns angeht, trifft Letzteres zu) habt, dann schaut doch hier vorbei.'
},{
    id:12,
    image: Market1,
    title: 'Christmas Market Stolls',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'Since it is getting closer to Christmas when we are getting married, have a stroll around the Christmas Market and maybe get a snack! Lots of Germans are actually around this time here to sell their products from Bratwurst to Strudel (technically Austrian…), to Glühwein (mulled wine) or hot chocolate with Bailey’s! Let the Christmas vibes warm your heart and tummy!',
    descriptionGerman: 'Da es nicht mehr lange bis Weihnachten ist, wenn wir heiraten, kann man hier sehr gut an den Ständen entlangspazieren oder eine Kleinigkeit essen. Tatsächlich gibt es viele Deutsche, die zu dieser Zeit hier einen Stand haben. Daher findet ihr hier für gewöhnlich reichlich Bratwürste, Apfelstrudel (welcher streng genommen ein österreichischer Klassiker ist), Glühwein und Kakao mit Bailey’s.'
},{
    id:13,
    image: Dome,
    title: 'The Dome',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'It’s a hotel, but their main bar is just because of its looks (especially during Christmas!) worth a visit! If you go on a day that’s not Friday or Saturday, you should have a good chance to get a table for a drink and their cocktails are actually reasonably priced, given it’s a very nice hotel!',
    descriptionGerman: 'Obwohl das ‘The Dome’ ein schickes Hotel ist, kann man hier auch so die super schöne Hotelbar besuchen. Es lohnt sich ganz besonders zur Weihnachtszeit! Falls ihr nicht unbedingt an einem Freitag oder Samstag vorbeischaut, sollte es eigentlich auch kein Problem sein, einen Tisch zu kriegen. Trotz der sehr vornehmen Einrichtung sind die Preise für Cocktails dennoch in Ordnung.'
},{
    id:14,
    image: Billy,
    title: 'Biddy Mulligans',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'An Irish Pub on Grass Market. They also play live music on quite a few nights and actually serve a really decent Guinness!',
    descriptionGerman: 'Ein irischer Pub (Nähe Grassmarket) bei dem man ein wirklich gutes Guinness-Bier bestellen kann und an vielen Abenden ebenfalls etwas Live-Musik zu hören bekommt.'
},{
    id:15,
    image: Chanter,
    title: 'The Chanter',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'Their draft beer selection changes regularly and they also have pool tables, if you fancy a round!',
    descriptionGerman: 'Hier habt ihr eine gute Auswahl an gezapften Bier, welche sich regelmäßig ändert, und Billard-Tische gibt es ebenfalls, falls ihr Lust auf eine Runde habt!'
},{   
    id:16,
    image: CarltonHill,
    title: 'Carlton Hill',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'It doesn’t even take 10 minutes to go up here if you take the entry from Princes Street (East). You will not only have a lovely view over the city and Arthur’s seat, but also lots of post-card worthy photo locations. It’s also where we got engaged when watching the sunrise :)',
    descriptionGerman: 'Der Aufstieg dauert nicht einmal 10 Minuten, wenn ihr den Eingang vom Ende der Princes Street aus nehmt. Es lohnt sich defintiv für die tolle Aussicht über die Stadt hinweg und dem Blick zum Arthur’s Seat (Hausberg der Stadt).'
},{
    id:17,
    image: ArthurSeat,
    title: 'Arthur’s Seat',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'If you don’t take pictures every 2 minutes (like Trisha), then it should only take you 30-45 minutes to go up here (30 minutes if you approach it from South Bridge and skip the first difficult bit). The view at any point is just amazing, but take a scarf and hat, it can get really windy!',
    descriptionGerman: 'Wenn man nicht alle 2 Minuten anhält, um ein Foto zu machen (so wie Patricia), braucht man etwa 30-45 Minuten, um oben anzukommen (30 Minuten, wenn ihr den ersten, anstrengenderen Teil auslassen wollt und direkt von der ‘South Bridge’-Seite den Aufstieg vornehmt). Die Aussicht während des gesamten Aufstiegs ist super schön. Denkt jedoch an eine Mütze und einen Schal, da es sehr windig und kalt werden kann!'
},{
    id:18,
    image: ChristmasMarket,
    title: 'Christmas Market',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'Stroll over the Christmas market and perhaps already get some of the Christmas shopping done or treat yourself to some food and drinks!',
    descriptionGerman: 'Beim Spazieren über den Weihnachtsmarkt findet ihr vielleicht schon das eine oder andere Weihnachtsgeschenk oder gönnt euch dabei einen kleinen Snack / Drink mit Blick zur Altstadt!'
},{
    id:19,
    image: NationalGallery,
    title: 'National Gallery',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'It’s on Princes Street and the entry is free!',
    descriptionGerman: 'Die Gemäldegalerie ist gleich bei der Princes Street und, was noch viel besser ist, der Eintritt ist frei!'
},{
    id:20,
    image: NationalScottishMuseum,
    title: 'National Scottish Museum',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'It’s not just hosting Scottish history, but actually has a variety of different exhibitions from technology, to fashion, to evolution! And the best part, it’s also FREE!',
    descriptionGerman: 'Hier findet ihr nicht nur Ausstellungen zur schottischen Geschichte, aber auch zum Thema Technik, Mode und Evolution. Auch hier wieder der Vorteil, dass der Eintritt FREI ist!'
},{   
    id:21,
    image: FreeWalkingHarryPotterTour,
    title: 'Harry Potter Tour',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'Edinburgh is not only the birthplace for the books, but was also used as inspiration for J.K. Rowling’s books (Victoria Street - Diagon Alley, Potter Row the tunnel where Dudley and Harry get attacked by the Dementor, the grave yard (there is an actual grave with Thomas Riddle!) and more)',
    descriptionGerman: 'Edinburgh ist nicht nur der Geburtsort für die ‘Harry Potter’-Bücher, sondern diente auch als Inspiration für J. K. Rowling’s Zauberwelt (z.B. die Victoria Street für die ‘Winkelgasse’, Potter Row ähnelt dem Tunnel, in dem Harry und Dudley von den Dementoren angegriffen werden, und auf dem Friedhof werdet ihr ein paar bekannte Namen wiederfinden, unter anderem auch ein Grab von ‘Thomas Riddle’!).'
},{   
    id:22,
    image: VisittheHighlands,
    title: 'Highlands',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'If you’re in Scotland for a longer period of time, the Highlands are beautiful to look at! Take a tour/car up to Loch Ness, you’ll definitely find lots of scenic views! Queen’s View along the way is particularly pretty and worth the visit!',
    descriptionGerman: 'Solltet ihr für eine etwas längere Zeit in Schottland sein, dann ist eine Reise durch die Highlands sehr zu empfehlen. Unabhängig davon, ob ihr eine Busreise bucht oder auch mit dem Auto zum Loch Ness fahrt, auf dem Weg dahin werdet ihr sicherlich viele tolle Eindrücke gewinnen können. Der ‘Queen’s View’ ist ganz besonders toll!'
},{   
    id:23,
    image: Stonehaven,
    title: 'Stonehaven',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'Not only is it the castle that inspired the Pixar film “Brave”, but it’s also one of the most beautiful things Trisha has ever seen. The old castle being almost on its own little island only briefly connected to the mainland with the beach right next to it… it’s just stunning!',
    descriptionGerman: 'Diejenigen, die den Pixar-Film ‘Merida – Legende der Highlands’ gesehen haben, erkennen sicherlich eine gewisse Ähnlichkeit zur Burg im Film, da diese hier auch zur Vorlage diente! Für Patricia war der Ausflug zu dieser Burgruine definitiv ein Highlight - Der Blick zur Burg auf der felsigen Landzunge, umgeben von der Nordsee, ist wirklich einmalig!'
},{   
    id:24,
    image: Finnegans,
    title: 'Finnegans Wake',
    category: 'Restaurants & Bars',
    categoryTest: 'Restaurants & Bars',
    description: 'This Irish Pub is on Victoria Street and often hosts international students. If you’re looking for reasonably priced drinks and live music, here you go!',
    descriptionGerman: 'Wie man es sich beim Namen schon fast denken kann, handelt es sich hierbei um einen irischen Pub, der sich auf der Victoria Street befindet. Oftmals schauen hier die internationalen Studenten vorbei, da die Preise relativ günstig sind und die Live-Musik auch für gute Stimmung sorgt!'
},{   
    id:25,
    image: LakeDistrict,
    title: 'The Lake District',
    category: 'Things to Do',
    categoryTest: 'Reiseaktivitäten',
    description: 'If you know Scotland well enough, or decide you want to see another beautiful part of the UK, then visit England’s Lake District. There are many hikes for both beginners and advanced hikers! (That’s also where Jordan has been born and raised!)',
    descriptionGerman: 'Falls ihr von Schottland schon genug gesehen habt oder noch einen anderen, wunderschönen Teil Großbritanniens kennenlernen wollt, dann ist ein Besuch im Lake District definitiv die Reise wert! Hier gibt es unzählig viele Wanderstrecken inmitten von den atemberaubenden Berglandschaften für sowohl Anfänger als auch fortgeschrittene Bergsteiger! (Außerdem ist dies auch Jordans Heimat!)'
}];

export default items;