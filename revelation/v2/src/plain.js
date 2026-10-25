/* Plain English rendering of Revelation, made from the Greek (SBLGNT) for about an 8th-grade reading level.
   Lines: "## Heading" starts a section; "c:v text" is a verse. */
const PLAIN_SRC = `
## The unveiling
1:1 This is the unveiling of Jesus Christ. God gave it to him to show his servants what must happen soon. He made it known through signs by sending his angel to his servant John.
1:2 John reports everything he saw: the word of God and the testimony of Jesus Christ.
1:3 Blessed is the one who reads this prophecy out loud, and blessed are those who hear it and keep what is written in it, because the time is near.
## A greeting to seven churches
1:4 From John, to the seven churches in the province of Asia: Grace and peace to you from the one who is, who was, and who is coming, and from the seven Spirits in front of his throne,
1:5 and from Jesus Christ, the faithful witness, the firstborn from the dead, and the ruler of the kings of the earth. To the one who loves us and set us free from our sins by his blood,
1:6 who made us a kingdom and priests to serve his God and Father, to him be glory and power forever and ever! Amen.
1:7 Look! He is coming with the clouds. Every eye will see him, even those who pierced him. All the tribes of the earth will mourn because of him. Yes! Amen.
1:8 "I am the Alpha and the Omega," says the Lord God, "the one who is, who was, and who is coming, the All-Powerful."
## The vision on Patmos
1:9 I, John, am your brother. I share with you in Jesus the suffering, the kingdom, and the patient endurance. I was on the island called Patmos because of the word of God and my testimony about Jesus.
1:10 On the Lord's day I was in the Spirit, and I heard behind me a loud voice like a trumpet.
1:11 It said, "Write down what you see in a book, and send it to the seven churches: to Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea."
1:12 I turned around to see whose voice was speaking to me. When I turned, I saw seven gold lampstands.
1:13 Among the lampstands was someone like a son of man. He wore a robe that reached his feet and had a gold sash around his chest.
1:14 His head and hair were white like wool, as white as snow. His eyes were like flames of fire.
1:15 His feet were like polished bronze glowing in a furnace. His voice was like the roar of rushing waters.
1:16 In his right hand he held seven stars. A sharp two-edged sword came out of his mouth. His face was like the sun shining at full strength.
1:17 When I saw him, I fell at his feet as if I were dead. He placed his right hand on me and said, "Don't be afraid. I am the First and the Last,
1:18 the Living One. I was dead, and look, I am alive forever and ever! I hold the keys of death and of Hades, the world of the dead.
1:19 So write down what you have seen: what is happening now, and what will happen after this.
1:20 Here is the secret meaning of the seven stars you saw in my right hand and of the seven gold lampstands: the seven stars are the angels of the seven churches, and the seven lampstands are the seven churches."
## To Ephesus
2:1 "To the angel of the church in Ephesus write: This is what the one says who holds the seven stars in his right hand and walks among the seven gold lampstands:
2:2 I know what you do: your hard work and your patient endurance. I know you cannot put up with evil people. You have tested those who call themselves apostles but are not, and you found them to be liars.
2:3 You have endured and suffered for my name, and you have not grown tired.
2:4 But I have this against you: you have left the love you had at first.
2:5 So remember how far you have fallen! Turn back and do the things you did at first. If you don't, I will come to you and remove your lampstand from its place, unless you turn back.
2:6 But you have this in your favor: you hate what the Nicolaitans do, which I also hate.
2:7 Whoever has ears should listen to what the Spirit says to the churches. To the one who wins the victory, I will give the right to eat from the tree of life, which is in the paradise of God."
## To Smyrna
2:8 "To the angel of the church in Smyrna write: This is what the First and the Last says, the one who died and came back to life:
2:9 I know your suffering and your poverty, but you are rich! I know the slander of those who say they are Jews and are not. They are a synagogue of Satan.
2:10 Don't be afraid of what you are about to suffer. Look, the devil is about to throw some of you into prison to test you, and you will suffer for ten days. Be faithful even if it means death, and I will give you the crown of life.
2:11 Whoever has ears should listen to what the Spirit says to the churches. The one who wins the victory will not be harmed by the second death."
## To Pergamum
2:12 "To the angel of the church in Pergamum write: This is what the one says who has the sharp two-edged sword:
2:13 I know where you live, where Satan's throne is. Yet you hold on to my name. You did not deny your faith in me, even in the days of Antipas, my faithful witness, who was killed among you, where Satan lives.
2:14 But I have a few things against you. Some of you hold to the teaching of Balaam, who taught Balak to trap the Israelites. He led them to eat food sacrificed to idols and to commit sexual sin.
2:15 In the same way, some of you hold to the teaching of the Nicolaitans.
2:16 So turn back! If you don't, I will come to you soon and fight against them with the sword of my mouth.
2:17 Whoever has ears should listen to what the Spirit says to the churches. To the one who wins the victory, I will give some of the hidden manna. I will also give that person a white stone with a new name written on it, a name no one knows except the one who receives it."
## To Thyatira
2:18 "To the angel of the church in Thyatira write: This is what the Son of God says, whose eyes are like flames of fire and whose feet are like polished bronze:
2:19 I know what you do: your love, faith, service, and patient endurance. I know that you are doing more now than you did at first.
2:20 But I have this against you: you put up with that woman Jezebel, who calls herself a prophet. Her teaching misleads my servants into sexual sin and into eating food sacrificed to idols.
2:21 I gave her time to turn away from her sexual sin, but she refuses.
2:22 Look, I am throwing her onto a sickbed. Those who commit adultery with her will suffer greatly unless they turn away from what she does.
2:23 I will strike her children dead. Then all the churches will know that I am the one who searches hearts and minds. I will repay each of you according to what you have done.
2:24 Now I say to the rest of you in Thyatira who do not hold this teaching and have not learned what some call 'the deep things of Satan': I will not put any other burden on you.
2:25 Only hold on to what you have until I come.
2:26 To the one who wins the victory and keeps doing my works to the end, I will give authority over the nations.
2:27 That person will rule them with an iron rod and smash them like clay pots,
2:28 just as I received authority from my Father. I will also give that person the morning star.
2:29 Whoever has ears should listen to what the Spirit says to the churches."
## To Sardis
3:1 "To the angel of the church in Sardis write: This is what the one says who holds the seven Spirits of God and the seven stars: I know what you do. You have a reputation for being alive, but you are dead.
3:2 Wake up! Strengthen what is left, which is about to die, because I have not found your works complete in the sight of my God.
3:3 So remember what you received and heard. Keep it, and turn back. If you do not wake up, I will come like a thief, and you will not know at what hour I will come to you.
3:4 Yet you have a few people in Sardis who have not stained their clothes. They will walk with me dressed in white, because they are worthy.
3:5 The one who wins the victory will be dressed in white like them. I will never erase that person's name from the book of life. I will say that name out loud before my Father and his angels.
3:6 Whoever has ears should listen to what the Spirit says to the churches."
## To Philadelphia
3:7 "To the angel of the church in Philadelphia write: This is what the Holy One, the True One, says, who holds the key of David. What he opens no one can shut, and what he shuts no one can open:
3:8 I know what you do. Look, I have placed in front of you an open door that no one can shut. I know you have little strength, yet you have kept my word and have not denied my name.
3:9 Look, I will make those from the synagogue of Satan, who say they are Jews and are not, but are lying, come and bow down at your feet. They will know that I have loved you.
3:10 Since you have kept my command to endure patiently, I will also keep you from the hour of testing that is about to come on the whole world to test the people who live on the earth.
3:11 I am coming soon. Hold on to what you have, so that no one takes your crown.
3:12 I will make the one who wins the victory a pillar in the temple of my God, and that person will never leave it again. I will write on them the name of my God and the name of the city of my God, the new Jerusalem, which is coming down out of heaven from my God. I will also write on them my new name.
3:13 Whoever has ears should listen to what the Spirit says to the churches."
## To Laodicea
3:14 "To the angel of the church in Laodicea write: This is what the Amen says, the faithful and true witness, the ruler of God's creation:
3:15 I know what you do. You are neither cold nor hot. I wish you were one or the other!
3:16 But since you are lukewarm, neither hot nor cold, I am about to spit you out of my mouth.
3:17 You say, 'I am rich. I have become wealthy and need nothing.' But you don't realize that you are miserable, pitiful, poor, blind, and naked.
3:18 So I advise you to buy from me gold refined in the fire, so you can be truly rich. Buy white clothes to wear, so you can cover your shameful nakedness. And buy salve to put on your eyes, so you can see.
3:19 I correct and train everyone I love. So be serious about it, and turn back.
3:20 Look! I am standing at the door and knocking. If anyone hears my voice and opens the door, I will come in and eat with that person, and they will eat with me.
3:21 To the one who wins the victory, I will give the right to sit with me on my throne, just as I won the victory and sat down with my Father on his throne.
3:22 Whoever has ears should listen to what the Spirit says to the churches."
## A door open in heaven
4:1 After this I looked, and there in front of me was a door standing open in heaven. The voice I had heard before, the one that sounded like a trumpet, said, "Come up here, and I will show you what must happen after this."
4:2 At once I was in the Spirit. There in heaven stood a throne, and someone was sitting on it.
4:3 The one sitting there shone like jasper and carnelian. A rainbow that looked like an emerald circled the throne.
4:4 Around the throne were twenty-four other thrones, and on them sat twenty-four elders. They were dressed in white and had gold crowns on their heads.
4:5 Flashes of lightning, rumblings, and peals of thunder came from the throne. In front of the throne seven torches were burning. These are the seven Spirits of God.
4:6 Also in front of the throne was something like a sea of glass, clear as crystal. In the center, around the throne, were four living creatures covered with eyes in front and in back.
4:7 The first living creature was like a lion. The second was like an ox. The third had a face like a human. The fourth was like a flying eagle.
4:8 Each of the four living creatures had six wings and was covered with eyes all around and inside. Day and night they never stop saying: "Holy, holy, holy is the Lord God, the All-Powerful, who was, who is, and who is coming."
4:9 Whenever the living creatures give glory, honor, and thanks to the one who sits on the throne and lives forever and ever,
4:10 the twenty-four elders fall down in front of him and worship him. They lay their crowns before the throne and say:
4:11 "You are worthy, our Lord and God, to receive glory and honor and power, because you created all things. They exist and were created because you willed it."
## The scroll and the Lamb
5:1 Then I saw in the right hand of the one sitting on the throne a scroll with writing on both sides. It was sealed with seven seals.
5:2 I saw a mighty angel calling out in a loud voice, "Who is worthy to break the seals and open the scroll?"
5:3 But no one in heaven, on earth, or under the earth could open the scroll or even look inside it.
5:4 I cried and cried because no one was found worthy to open the scroll or look inside it.
5:5 Then one of the elders said to me, "Stop crying! Look, the Lion from the tribe of Judah, the Root of David, has won the victory. He can open the scroll and its seven seals."
5:6 Then I saw a Lamb standing in the center of the throne, surrounded by the four living creatures and the elders. It looked as if it had been slaughtered. It had seven horns and seven eyes, which are the seven Spirits of God sent out into all the earth.
5:7 The Lamb came and took the scroll from the right hand of the one sitting on the throne.
5:8 When he took it, the four living creatures and the twenty-four elders fell down in front of the Lamb. Each of them held a harp and gold bowls full of incense, which are the prayers of God's people.
5:9 They sang a new song: "You are worthy to take the scroll and open its seals, because you were slaughtered, and with your blood you bought people for God from every tribe, language, people, and nation.
5:10 You made them a kingdom and priests to serve our God, and they will rule on the earth."
5:11 Then I looked, and I heard the voices of many angels around the throne, the living creatures, and the elders. There were thousands upon thousands, and ten thousand times ten thousand.
5:12 They said in a loud voice: "Worthy is the Lamb who was slaughtered to receive power, wealth, wisdom, strength, honor, glory, and praise!"
5:13 Then I heard every creature in heaven, on earth, under the earth, and in the sea, and everything in them, saying: "To the one who sits on the throne and to the Lamb be praise, honor, glory, and power forever and ever!"
5:14 The four living creatures said, "Amen," and the elders fell down and worshiped.
## The first six seals
6:1 Then I watched as the Lamb broke the first of the seven seals. I heard one of the four living creatures say in a voice like thunder, "Come!"
6:2 I looked, and there was a white horse. Its rider held a bow, and he was given a crown. He rode out as a conqueror, set on conquering.
6:3 When the Lamb broke the second seal, I heard the second living creature say, "Come!"
6:4 Another horse came out, fiery red. Its rider was given power to take peace from the earth, so that people would kill each other. He was given a large sword.
6:5 When the Lamb broke the third seal, I heard the third living creature say, "Come!" I looked, and there was a black horse. Its rider held a pair of scales in his hand.
6:6 Then I heard what sounded like a voice from among the four living creatures. It said, "A quart of wheat for a full day's pay, and three quarts of barley for a day's pay. But don't harm the olive oil and the wine!"
6:7 When the Lamb broke the fourth seal, I heard the voice of the fourth living creature say, "Come!"
6:8 I looked, and there was a pale green horse. Its rider was named Death, and Hades followed close behind him. They were given power over a fourth of the earth, to kill by sword, famine, disease, and the wild animals of the earth.
6:9 When the Lamb broke the fifth seal, I saw under the altar the souls of those who had been killed because of the word of God and the testimony they had kept.
6:10 They cried out in a loud voice, "Holy and true Master, how long until you judge the people who live on the earth and pay them back for our blood?"
6:11 Each of them was given a white robe. They were told to rest a little longer, until the full number of their fellow servants, their brothers and sisters, who were going to be killed as they had been, was complete.
6:12 I watched as the Lamb broke the sixth seal. There was a great earthquake. The sun turned black like rough cloth made of goat hair, and the whole moon turned red like blood.
6:13 The stars in the sky fell to the earth, like unripe figs falling from a fig tree shaken by a strong wind.
6:14 The sky split apart like a scroll being rolled up, and every mountain and island was moved from its place.
6:15 Then the kings of the earth, the rulers, the generals, the rich, the powerful, and every slave and every free person hid in caves and among the rocks of the mountains.
6:16 They called to the mountains and the rocks, "Fall on us and hide us from the face of the one who sits on the throne and from the anger of the Lamb!
6:17 The great day of their anger has come, and who can stand?"
## God's servants are sealed
7:1 After this I saw four angels standing at the four corners of the earth. They were holding back the four winds of the earth so that no wind would blow on the land, on the sea, or on any tree.
7:2 Then I saw another angel coming up from the east, holding the seal of the living God. He called out in a loud voice to the four angels who had been given power to harm the land and the sea:
7:3 "Don't harm the land, the sea, or the trees until we put a seal on the foreheads of the servants of our God."
7:4 Then I heard the number of those who were sealed: 144,000, from all the tribes of Israel.
7:5 From the tribe of Judah 12,000 were sealed, from the tribe of Reuben 12,000, from the tribe of Gad 12,000,
7:6 from the tribe of Asher 12,000, from the tribe of Naphtali 12,000, from the tribe of Manasseh 12,000,
7:7 from the tribe of Simeon 12,000, from the tribe of Levi 12,000, from the tribe of Issachar 12,000,
7:8 from the tribe of Zebulun 12,000, from the tribe of Joseph 12,000, and from the tribe of Benjamin 12,000 were sealed.
## The crowd no one could count
7:9 After this I looked, and there in front of me was a huge crowd that no one could count. They came from every nation, tribe, people, and language. They stood in front of the throne and the Lamb, dressed in white robes and holding palm branches.
7:10 They shouted in a loud voice: "Salvation belongs to our God, who sits on the throne, and to the Lamb!"
7:11 All the angels were standing around the throne, the elders, and the four living creatures. They fell face down in front of the throne and worshiped God,
7:12 saying: "Amen! Praise and glory and wisdom and thanks and honor and power and strength belong to our God forever and ever. Amen!"
7:13 Then one of the elders asked me, "These people dressed in white robes, who are they, and where did they come from?"
7:14 I answered, "Sir, you know." He said, "These are the people who have come out of the great suffering. They have washed their robes and made them white in the blood of the Lamb.
7:15 That is why they are in front of the throne of God and serve him day and night in his temple. The one who sits on the throne will spread his tent over them.
7:16 They will never be hungry again or thirsty again. The sun will not beat down on them, nor any burning heat.
7:17 The Lamb in the center of the throne will be their shepherd. He will lead them to springs of the water of life. And God will wipe every tear from their eyes."
## The seventh seal and the incense
8:1 When the Lamb broke the seventh seal, there was silence in heaven for about half an hour.
8:2 Then I saw the seven angels who stand in front of God, and they were given seven trumpets.
8:3 Another angel came and stood at the altar, holding a gold incense pan. He was given a lot of incense to offer, along with the prayers of all God's people, on the gold altar in front of the throne.
8:4 The smoke of the incense, together with the prayers of God's people, rose up in front of God from the angel's hand.
8:5 Then the angel took the incense pan, filled it with fire from the altar, and threw it down to the earth. There were peals of thunder, rumblings, flashes of lightning, and an earthquake.
## The first four trumpets
8:6 Then the seven angels who had the seven trumpets got ready to blow them.
8:7 The first angel blew his trumpet. Hail and fire mixed with blood were thrown down on the earth. A third of the earth was burned up, a third of the trees were burned up, and all the green grass was burned up.
8:8 The second angel blew his trumpet. Something like a huge mountain on fire was thrown into the sea. A third of the sea turned into blood,
8:9 a third of the living creatures in the sea died, and a third of the ships were destroyed.
8:10 The third angel blew his trumpet. A great star, burning like a torch, fell from the sky. It fell on a third of the rivers and on the springs of water.
8:11 The name of the star is Wormwood. A third of the waters turned bitter, and many people died from the water because it had been made bitter.
8:12 The fourth angel blew his trumpet. A third of the sun was struck, and a third of the moon, and a third of the stars, so that a third of them turned dark. A third of the day had no light, and also a third of the night.
8:13 As I watched, I heard an eagle flying high overhead call out in a loud voice: "Woe! Woe! Woe to the people who live on the earth, because of the trumpet blasts that the other three angels are about to blow!"
## The fifth trumpet: locusts from the abyss
9:1 The fifth angel blew his trumpet. I saw a star that had fallen from the sky to the earth. The star was given the key to the shaft of the abyss.
9:2 When he opened the shaft of the abyss, smoke rose from it like smoke from a huge furnace. The sun and the sky were darkened by the smoke from the shaft.
9:3 Out of the smoke came locusts onto the earth. They were given power like the power of scorpions on the earth.
9:4 They were told not to harm the grass of the earth, any green plant, or any tree, but only the people who did not have the seal of God on their foreheads.
9:5 The locusts were not allowed to kill them, only to torture them for five months. The pain they caused was like the sting of a scorpion.
9:6 In those days people will look for death but will not find it. They will want to die, but death will run away from them.
9:7 The locusts looked like horses prepared for battle. On their heads they wore something like gold crowns, and their faces looked like human faces.
9:8 They had hair like women's hair and teeth like lions' teeth.
9:9 They had chests like iron armor, and the sound of their wings was like the roar of many horses and chariots rushing into battle.
9:10 They had tails with stingers like scorpions, and in their tails was their power to hurt people for five months.
9:11 Their king was the angel of the abyss. His name in Hebrew is Abaddon, and in Greek it is Apollyon, which means Destroyer.
9:12 The first woe is past. Look, two more woes are still coming.
## The sixth trumpet: the army from the Euphrates
9:13 The sixth angel blew his trumpet. I heard a voice coming from the four horns of the gold altar in front of God.
9:14 It said to the sixth angel, the one who had the trumpet, "Release the four angels who are tied up at the great river Euphrates."
9:15 So the four angels were released. They had been kept ready for this very hour, day, month, and year, to kill a third of humanity.
9:16 The number of mounted troops was two hundred million. I heard their number.
9:17 This is how I saw the horses and riders in my vision. The riders wore armor that was fiery red, dark blue, and sulfur yellow. The heads of the horses were like lions' heads, and fire, smoke, and sulfur came out of their mouths.
9:18 A third of humanity was killed by these three plagues: the fire, the smoke, and the sulfur that came out of their mouths.
9:19 The horses' power was in their mouths and in their tails. Their tails were like snakes with heads, and with them they hurt people.
9:20 The rest of humanity, who were not killed by these plagues, still did not turn away from what their hands had made. They did not stop worshiping demons and idols made of gold, silver, bronze, stone, and wood, idols that cannot see or hear or walk.
9:21 They also did not turn away from their murders, their magic spells, their sexual sins, or their stealing.
## The angel and the little scroll
10:1 Then I saw another mighty angel coming down from heaven. He was wrapped in a cloud, with a rainbow over his head. His face was like the sun, and his legs were like pillars of fire.
10:2 He held a little scroll lying open in his hand. He put his right foot on the sea and his left foot on the land.
10:3 He shouted with a loud voice, like a lion roaring. When he shouted, the seven thunders spoke with their own voices.
10:4 When the seven thunders spoke, I was about to write. But I heard a voice from heaven say, "Seal up what the seven thunders said. Do not write it down."
10:5 Then the angel I had seen standing on the sea and on the land raised his right hand to heaven.
10:6 He swore by the one who lives forever and ever, who created heaven and everything in it, the earth and everything in it, and the sea and everything in it. He said, "There will be no more delay!
10:7 When the seventh angel is about to blow his trumpet, the mystery of God will be finished, just as he announced to his servants the prophets."
10:8 Then the voice I had heard from heaven spoke to me again: "Go, take the scroll lying open in the hand of the angel who is standing on the sea and on the land."
10:9 So I went to the angel and asked him to give me the little scroll. He said to me, "Take it and eat it. It will turn your stomach sour, but in your mouth it will taste as sweet as honey."
10:10 I took the little scroll from the angel's hand and ate it. In my mouth it tasted as sweet as honey, but when I had eaten it, my stomach turned sour.
10:11 Then I was told, "You must prophesy again about many peoples, nations, languages, and kings."
## The two witnesses
11:1 Then I was given a measuring stick like a rod. I was told, "Get up and measure the temple of God and the altar, and count the worshipers there.
11:2 But leave out the outer courtyard of the temple. Do not measure it, because it has been given to the nations. They will trample the holy city for 42 months.
11:3 I will give power to my two witnesses, and they will prophesy for 1,260 days, dressed in sackcloth."
11:4 They are the two olive trees and the two lampstands that stand in front of the Lord of the earth.
11:5 If anyone tries to harm them, fire comes out of their mouths and burns up their enemies. Anyone who wants to harm them must be killed this way.
11:6 They have power to shut the sky so that no rain falls during the days they are prophesying. They have power to turn the waters into blood and to strike the earth with every kind of plague as often as they want.
11:7 When they have finished their testimony, the beast that comes up out of the abyss will make war on them. It will defeat them and kill them.
11:8 Their bodies will lie in the street of the great city, which is symbolically called Sodom and Egypt, where their Lord was also crucified.
11:9 For three and a half days, people from every people, tribe, language, and nation will stare at their bodies and refuse to let them be buried.
11:10 The people who live on the earth will celebrate over them. They will party and send each other gifts, because these two prophets had tormented the people of the earth.
11:11 But after the three and a half days, the breath of life from God entered them, and they stood on their feet. Great fear fell on those who saw them.
11:12 Then they heard a loud voice from heaven saying to them, "Come up here!" And they went up to heaven in a cloud while their enemies watched.
11:13 At that very hour there was a great earthquake. A tenth of the city fell, and seven thousand people were killed in the earthquake. The survivors were terrified and gave glory to the God of heaven.
11:14 The second woe is past. Look, the third woe is coming soon.
## The seventh trumpet
11:15 The seventh angel blew his trumpet, and there were loud voices in heaven saying: "The kingdom of the world has become the kingdom of our Lord and of his Christ, and he will rule forever and ever."
11:16 The twenty-four elders, who sit on their thrones in front of God, fell face down and worshiped God,
11:17 saying: "We thank you, Lord God, the All-Powerful, who is and who was, because you have taken your great power and have begun to rule.
11:18 The nations were angry, but your anger has come. The time has come to judge the dead, to reward your servants the prophets, your people, and those who fear your name, both small and great, and to destroy those who destroy the earth."
11:19 Then God's temple in heaven was opened, and the ark of his covenant could be seen in his temple. There were flashes of lightning, rumblings, peals of thunder, an earthquake, and a great hailstorm.
## The woman and the dragon
12:1 A great sign appeared in the sky: a woman dressed in the sun, with the moon under her feet and a crown of twelve stars on her head.
12:2 She was pregnant and cried out in pain as she was about to give birth.
12:3 Then another sign appeared in the sky: a huge red dragon with seven heads and ten horns, and seven royal crowns on its heads.
12:4 Its tail swept a third of the stars out of the sky and threw them down to the earth. The dragon stood in front of the woman who was about to give birth, ready to eat her child the moment it was born.
12:5 She gave birth to a son, a male child, who is going to rule all the nations with an iron rod. Her child was snatched up to God and to his throne.
12:6 The woman fled into the wilderness, where God had prepared a place for her. There she would be taken care of for 1,260 days.
## War in heaven
12:7 Then war broke out in heaven. Michael and his angels fought against the dragon, and the dragon and his angels fought back.
12:8 But the dragon was not strong enough, and there was no longer any place for them in heaven.
12:9 The huge dragon was thrown down. He is that ancient serpent called the Devil and Satan, who leads the whole world astray. He was thrown down to the earth, and his angels were thrown down with him.
12:10 Then I heard a loud voice in heaven say: "Now the salvation and the power and the kingdom of our God, and the authority of his Christ, have come. The accuser of our brothers and sisters, who accuses them in front of our God day and night, has been thrown down.
12:11 They defeated him by the blood of the Lamb and by the word of their testimony. They did not love their lives so much that they were afraid to die.
12:12 So celebrate, you heavens and you who live in them! But how terrible for the earth and the sea, because the devil has come down to you. He is filled with fury, because he knows his time is short."
## The dragon pursues the woman
12:13 When the dragon saw that he had been thrown down to the earth, he chased the woman who had given birth to the male child.
12:14 The woman was given the two wings of a great eagle so she could fly to her place in the wilderness. There she would be taken care of for a time, times, and half a time, out of the serpent's reach.
12:15 Then the serpent poured water like a river from its mouth after the woman, to sweep her away with the flood.
12:16 But the earth helped the woman. The earth opened its mouth and swallowed the river that the dragon had poured from its mouth.
12:17 Then the dragon was furious with the woman and went off to make war against the rest of her children, those who keep God's commands and hold to the testimony about Jesus.
## The beast from the sea
13:1 Then the dragon stood on the shore of the sea. And I saw a beast coming up out of the sea. It had ten horns and seven heads, with ten royal crowns on its horns, and on its heads were names that insulted God.
13:2 The beast I saw looked like a leopard, but it had feet like a bear's and a mouth like a lion's. The dragon gave the beast his power, his throne, and great authority.
13:3 One of the beast's heads seemed to have been slaughtered with a deadly wound, but the deadly wound was healed. The whole world was amazed and followed the beast.
13:4 People worshiped the dragon because he had given authority to the beast. They also worshiped the beast, saying, "Who is like the beast? Who can fight against it?"
13:5 The beast was given a mouth to brag and to insult God, and it was allowed to use its authority for 42 months.
13:6 It opened its mouth to insult God, his name, and the place where he lives, that is, those who live in heaven.
13:7 It was allowed to make war on God's people and to defeat them. It was given authority over every tribe, people, language, and nation.
13:8 Everyone who lives on the earth will worship the beast, everyone whose name has not been written, since the world was made, in the book of life belonging to the Lamb who was slaughtered.
13:9 Whoever has ears should listen:
13:10 "Whoever is meant for prison will go to prison. Whoever is to be killed by the sword will be killed by the sword." This calls for patient endurance and faithfulness from God's people.
## The beast from the earth
13:11 Then I saw another beast coming up out of the earth. It had two horns like a lamb, but it spoke like a dragon.
13:12 It uses all the authority of the first beast on its behalf. It makes the earth and those who live on it worship the first beast, whose deadly wound was healed.
13:13 It does great signs, even making fire come down from the sky to the earth in front of everyone.
13:14 By the signs it is allowed to do for the first beast, it leads astray the people who live on the earth. It tells them to make an image to honor the beast that was wounded by the sword and yet lived.
13:15 It was allowed to give breath to the image of the first beast, so that the image could even speak and have killed anyone who refused to worship it.
13:16 It also forces everyone, small and great, rich and poor, free and slave, to receive a mark on their right hand or on their forehead,
13:17 so that no one can buy or sell unless they have the mark, which is the name of the beast or the number of its name.
13:18 This calls for wisdom. Whoever has understanding should figure out the number of the beast, because it is a human number. Its number is 666.
## The Lamb and the 144,000
14:1 Then I looked, and there in front of me was the Lamb, standing on Mount Zion. With him were 144,000 who had his name and his Father's name written on their foreheads.
14:2 I heard a sound from heaven like the roar of rushing waters and like loud thunder. The sound I heard was like harpists playing their harps.
14:3 They sang a new song in front of the throne and in front of the four living creatures and the elders. No one could learn the song except the 144,000 who had been bought from the earth.
14:4 These are the ones who did not make themselves impure with women, for they kept themselves pure. They follow the Lamb wherever he goes. They were bought from among humanity as firstfruits to God and to the Lamb.
14:5 No lie was found in their mouths. They are without fault.
## Three angels with messages
14:6 Then I saw another angel flying high overhead. He had the eternal good news to announce to those who live on the earth: to every nation, tribe, language, and people.
14:7 He said in a loud voice, "Fear God and give him glory, because the hour of his judgment has come. Worship the one who made heaven and earth, the sea and the springs of water."
14:8 A second angel followed and said, "Fallen! Fallen is Babylon the Great, who made all the nations drink the wine of her passionate sexual sin."
14:9 A third angel followed them and said in a loud voice, "If anyone worships the beast and its image and receives its mark on their forehead or hand,
14:10 they too will drink the wine of God's anger, poured full strength into the cup of his wrath. They will be tormented with fire and sulfur in front of the holy angels and the Lamb.
14:11 The smoke of their torment rises forever and ever. There is no rest day or night for those who worship the beast and its image, or for anyone who receives the mark of its name."
14:12 This calls for patient endurance from God's people, who keep God's commands and keep faith in Jesus.
14:13 Then I heard a voice from heaven say, "Write this: Blessed are the dead who die in the Lord from now on." "Yes," says the Spirit, "they will rest from their hard work, because what they have done goes with them."
## The harvest of the earth
14:14 I looked, and there in front of me was a white cloud. Sitting on the cloud was someone like a son of man, with a gold crown on his head and a sharp sickle in his hand.
14:15 Then another angel came out of the temple and called in a loud voice to the one sitting on the cloud, "Swing your sickle and reap, because the time to reap has come. The harvest of the earth is ripe."
14:16 So the one sitting on the cloud swung his sickle over the earth, and the earth was harvested.
14:17 Another angel came out of the temple in heaven. He also had a sharp sickle.
14:18 Still another angel, the one in charge of the fire, came out from the altar. He called in a loud voice to the angel with the sharp sickle, "Swing your sharp sickle and gather the clusters of grapes from the earth's vine, because its grapes are ripe."
14:19 So the angel swung his sickle on the earth, gathered its grapes, and threw them into the great winepress of God's anger.
14:20 The grapes were trampled in the winepress outside the city, and blood flowed out of the winepress as high as horses' bridles for about 184 miles.
## The song of Moses and the Lamb
15:1 Then I saw another great and amazing sign in heaven: seven angels with the seven last plagues. They are the last, because with them God's anger is finished.
15:2 I saw what looked like a sea of glass mixed with fire. Standing beside the sea were those who had won the victory over the beast, its image, and the number of its name. They held harps given to them by God.
15:3 They sang the song of God's servant Moses and the song of the Lamb: "Great and amazing are your works, Lord God, the All-Powerful! Just and true are your ways, King of the nations!
15:4 Who will not fear you, Lord, and give glory to your name? You alone are holy. All nations will come and worship in front of you, because your acts of justice have been made known."
15:5 After this I looked, and the temple in heaven, the tent of the testimony, was opened.
15:6 Out of the temple came the seven angels with the seven plagues. They were dressed in clean, shining linen and wore gold sashes around their chests.
15:7 Then one of the four living creatures gave the seven angels seven gold bowls filled with the anger of God, who lives forever and ever.
15:8 The temple was filled with smoke from the glory of God and from his power. No one could enter the temple until the seven plagues of the seven angels were finished.
## The seven bowls
16:1 Then I heard a loud voice from the temple say to the seven angels, "Go and pour out the seven bowls of God's anger on the earth."
16:2 The first angel went and poured out his bowl on the earth. Ugly, painful sores broke out on the people who had the mark of the beast and worshiped its image.
16:3 The second angel poured out his bowl on the sea. It turned into blood like the blood of a dead person, and every living thing in the sea died.
16:4 The third angel poured out his bowl on the rivers and springs of water, and they turned into blood.
16:5 Then I heard the angel in charge of the waters say: "You are just, the one who is and who was, the Holy One, because you have judged these things.
16:6 They poured out the blood of your people and your prophets, and you have given them blood to drink. They deserve it."
16:7 And I heard the altar say: "Yes, Lord God, the All-Powerful, your judgments are true and just."
16:8 The fourth angel poured out his bowl on the sun, and the sun was allowed to burn people with fire.
16:9 People were burned by the fierce heat. They cursed the name of God, who had power over these plagues, but they refused to turn away from their sins and give him glory.
16:10 The fifth angel poured out his bowl on the throne of the beast, and its kingdom was plunged into darkness. People chewed their tongues in agony.
16:11 They cursed the God of heaven because of their pains and their sores, but they refused to turn away from what they had done.
16:12 The sixth angel poured out his bowl on the great river Euphrates. Its water was dried up to prepare the way for the kings from the east.
16:13 Then I saw three evil spirits that looked like frogs. They came out of the mouth of the dragon, out of the mouth of the beast, and out of the mouth of the false prophet.
16:14 They are spirits of demons that do signs. They go out to the kings of the whole world to gather them for the battle on the great day of God, the All-Powerful.
16:15 "Look, I am coming like a thief! Blessed is the one who stays awake and keeps their clothes on, so they will not walk around naked and be shamefully exposed."
16:16 Then the spirits gathered the kings together to the place that is called in Hebrew Armageddon.
16:17 The seventh angel poured out his bowl into the air. A loud voice came out of the temple from the throne, saying, "It is done!"
16:18 There were flashes of lightning, rumblings, peals of thunder, and a great earthquake. There had never been an earthquake like it since people have lived on the earth. That is how great it was.
16:19 The great city split into three parts, and the cities of the nations fell. God remembered Babylon the Great and gave her the cup filled with the wine of his furious anger.
16:20 Every island fled away, and the mountains could not be found.
16:21 Huge hailstones, each weighing about a hundred pounds, fell from the sky on people. They cursed God because of the plague of hail, because it was so terrible.
## The woman on the scarlet beast
17:1 One of the seven angels who had the seven bowls came and said to me, "Come, I will show you the punishment of the great prostitute who sits on many waters.
17:2 The kings of the earth committed sexual sin with her, and the people who live on the earth got drunk on the wine of her sexual sin."
17:3 Then the angel carried me away in the Spirit into a wilderness. There I saw a woman sitting on a scarlet beast that was covered with names that insulted God. It had seven heads and ten horns.
17:4 The woman was dressed in purple and scarlet. She glittered with gold, jewels, and pearls. In her hand she held a gold cup full of disgusting things and the filth of her sexual sin.
17:5 On her forehead a name was written, a mystery: "Babylon the Great, the mother of prostitutes and of the disgusting things of the earth."
17:6 I saw that the woman was drunk on the blood of God's people, the blood of those who bore witness to Jesus. When I saw her, I was completely amazed.
## The angel explains the mystery
17:7 Then the angel said to me, "Why are you amazed? I will explain to you the mystery of the woman and of the beast she rides, which has the seven heads and ten horns.
17:8 The beast you saw once was, now is not, and is about to come up out of the abyss and go to its destruction. The people who live on the earth, whose names have not been written in the book of life since the world was made, will be amazed when they see the beast, because it once was, now is not, and yet will come.
17:9 This calls for a mind with wisdom. The seven heads are seven mountains on which the woman sits. They are also seven kings.
17:10 Five have fallen, one is, and the other has not yet come. When he does come, he must stay only a little while.
17:11 The beast who once was and now is not is an eighth king. He belongs to the seven, and he is going to his destruction.
17:12 The ten horns you saw are ten kings who have not yet received a kingdom. But they will receive authority as kings for one hour, along with the beast.
17:13 They have one purpose, and they give their power and authority to the beast.
17:14 They will make war against the Lamb, but the Lamb will defeat them, because he is Lord of lords and King of kings. And those with him are called, chosen, and faithful."
17:15 Then the angel said to me, "The waters you saw, where the prostitute sits, are peoples, crowds, nations, and languages.
17:16 The ten horns and the beast you saw will hate the prostitute. They will strip her, leave her naked, eat her flesh, and burn her with fire.
17:17 God put it into their hearts to carry out his purpose by agreeing to give their kingdom to the beast, until God's words are fulfilled.
17:18 The woman you saw is the great city that rules over the kings of the earth."
## Babylon falls
18:1 After this I saw another angel coming down from heaven. He had great authority, and the earth was lit up by his glory.
18:2 He shouted with a mighty voice: "Fallen! Fallen is Babylon the Great! She has become a home for demons, a prison for every evil spirit, a prison for every unclean bird, and a prison for every unclean and hated animal.
18:3 All the nations have drunk the wine of her passionate sexual sin. The kings of the earth committed sexual sin with her, and the merchants of the earth grew rich from her excessive luxury."
18:4 Then I heard another voice from heaven say: "Come out of her, my people, so that you will not take part in her sins and will not receive any of her plagues.
18:5 Her sins are piled up as high as heaven, and God has remembered her crimes.
18:6 Pay her back as she has paid others. Pay her back double for what she has done. Mix her a double portion in the cup she mixed for others.
18:7 Give her as much torment and grief as the glory and luxury she gave herself. In her heart she says, 'I sit as a queen. I am not a widow, and I will never see grief.'
18:8 That is why her plagues will come in a single day: death, grief, and famine. She will be burned up with fire, because the Lord God who judges her is mighty."
## The world mourns Babylon
18:9 "The kings of the earth who committed sexual sin with her and shared her luxury will cry and mourn over her when they see the smoke of her burning.
18:10 They will stand far away, terrified by her torment, and say: 'How terrible, how terrible for the great city, Babylon, the mighty city! In one hour your judgment has come.'
18:11 The merchants of the earth will cry and mourn over her, because no one buys their cargo anymore:
18:12 cargo of gold, silver, jewels, and pearls; fine linen, purple, silk, and scarlet cloth; every kind of fragrant wood, and every kind of object made of ivory, costly wood, bronze, iron, and marble;
18:13 cinnamon, spice, incense, myrrh, and frankincense; wine, olive oil, fine flour, and wheat; cattle and sheep; horses and carriages; and slaves, that is, human lives.
18:14 They will say, 'The fruit you longed for is gone from you. All your luxury and splendor have vanished, never to be found again.'
18:15 The merchants who sold these things and grew rich from her will stand far away, terrified by her torment. They will cry and mourn
18:16 and say: 'How terrible, how terrible for the great city, dressed in fine linen, purple, and scarlet, glittering with gold, jewels, and pearls!
18:17 In one hour all this wealth has been destroyed!' Every ship captain, everyone who travels by ship, the sailors, and all who earn their living from the sea stood far away.
18:18 When they saw the smoke of her burning, they shouted, 'Was there ever a city like this great city?'
18:19 They threw dust on their heads, and they cried and mourned and shouted: 'How terrible, how terrible for the great city, where all who had ships at sea grew rich from her wealth! In one hour she has been destroyed!'
18:20 Celebrate over her, heaven! Celebrate, God's people, apostles, and prophets! God has judged her for the way she treated you."
18:21 Then a mighty angel picked up a boulder the size of a large millstone and threw it into the sea, saying: "This is how violently the great city of Babylon will be thrown down, never to be found again.
18:22 The sound of harpists, musicians, flute players, and trumpeters will never be heard in you again. No worker of any trade will ever be found in you again. The sound of a millstone will never be heard in you again.
18:23 The light of a lamp will never shine in you again. The voices of a bridegroom and bride will never be heard in you again. Your merchants were the important people of the world, and all the nations were led astray by your magic spells.
18:24 In her was found the blood of prophets and of God's people, and of all who have been killed on the earth."
## Hallelujah in heaven
19:1 After this I heard what sounded like the loud voice of a huge crowd in heaven shouting: "Hallelujah! Salvation and glory and power belong to our God,
19:2 because his judgments are true and just. He has judged the great prostitute who ruined the earth with her sexual sin. He has paid her back for the blood of his servants."
19:3 And again they shouted: "Hallelujah! The smoke from her goes up forever and ever."
19:4 The twenty-four elders and the four living creatures fell down and worshiped God, who sits on the throne. They said: "Amen! Hallelujah!"
19:5 Then a voice came from the throne, saying: "Praise our God, all you his servants, you who fear him, both small and great!"
## The wedding of the Lamb
19:6 Then I heard what sounded like a huge crowd, like the roar of rushing waters and like loud peals of thunder, shouting: "Hallelujah! For our Lord God, the All-Powerful, rules.
19:7 Let us celebrate and be glad and give him glory! For the wedding of the Lamb has come, and his bride has made herself ready.
19:8 She was given fine linen, bright and clean, to wear." (Fine linen stands for the right things God's people have done.)
19:9 Then the angel said to me, "Write this: Blessed are those who are invited to the wedding supper of the Lamb!" He added, "These are the true words of God."
19:10 At this I fell at his feet to worship him. But he said to me, "Don't do that! I am a servant with you and with your brothers and sisters who hold to the testimony about Jesus. Worship God! For the testimony about Jesus is the spirit of prophecy."
## The rider on the white horse
19:11 Then I saw heaven standing open, and there in front of me was a white horse. Its rider is called Faithful and True. He judges and makes war with justice.
19:12 His eyes are like flames of fire, and on his head are many royal crowns. He has a name written on him that no one knows except himself.
19:13 He is dressed in a robe dipped in blood, and his name is the Word of God.
19:14 The armies of heaven were following him, riding on white horses and dressed in fine linen, white and clean.
19:15 A sharp sword comes out of his mouth to strike down the nations. He will rule them with an iron rod. He treads the winepress of the furious anger of God, the All-Powerful.
19:16 On his robe and on his thigh he has this name written: King of kings and Lord of lords.
19:17 Then I saw an angel standing in the sun. He called in a loud voice to all the birds flying high overhead, "Come, gather together for the great supper of God,
19:18 so that you can eat the flesh of kings, generals, and mighty people, of horses and their riders, and the flesh of all people, free and slave, small and great."
19:19 Then I saw the beast and the kings of the earth and their armies gathered to make war against the rider on the horse and his army.
19:20 But the beast was captured, and with it the false prophet who had done signs for it. By those signs he had led astray those who received the mark of the beast and worshiped its image. The two of them were thrown alive into the lake of fire that burns with sulfur.
19:21 The rest were killed by the sword that came out of the mouth of the rider on the horse, and all the birds ate their fill of their flesh.
## The thousand years
20:1 Then I saw an angel coming down from heaven, holding the key to the abyss and a great chain in his hand.
20:2 He seized the dragon, that ancient serpent, who is the Devil and Satan, and tied him up for a thousand years.
20:3 He threw him into the abyss, locked it, and sealed it over him, so that he could not lead the nations astray anymore until the thousand years were over. After that, he must be set free for a short time.
20:4 Then I saw thrones, and those sitting on them were given authority to judge. I also saw the souls of those who had been beheaded because of their testimony about Jesus and because of the word of God. They had not worshiped the beast or its image and had not received its mark on their foreheads or their hands. They came to life and ruled with Christ for a thousand years.
20:5 (The rest of the dead did not come to life until the thousand years were over.) This is the first resurrection.
20:6 Blessed and holy are those who share in the first resurrection. The second death has no power over them. They will be priests of God and of Christ, and they will rule with him for a thousand years.
## Satan's last battle
20:7 When the thousand years are over, Satan will be released from his prison.
20:8 He will go out to lead astray the nations at the four corners of the earth, Gog and Magog, and gather them for the battle. They are as many as the sand on the seashore.
20:9 They marched across the wide earth and surrounded the camp of God's people, the city he loves. But fire came down from heaven and burned them up.
20:10 And the devil, who had led them astray, was thrown into the lake of fire and sulfur, where the beast and the false prophet had also been thrown. They will be tormented day and night forever and ever.
## The great white throne
20:11 Then I saw a great white throne and the one sitting on it. The earth and the sky fled from his presence, and no place was found for them.
20:12 I saw the dead, great and small, standing in front of the throne, and books were opened. Another book was opened, the book of life. The dead were judged by what they had done, as recorded in the books.
20:13 The sea gave up the dead that were in it, and Death and Hades gave up the dead that were in them. Each person was judged by what they had done.
20:14 Then Death and Hades were thrown into the lake of fire. The lake of fire is the second death.
20:15 Anyone whose name was not found written in the book of life was thrown into the lake of fire.
## A new heaven and a new earth
21:1 Then I saw a new heaven and a new earth. The first heaven and the first earth had passed away, and the sea was no more.
21:2 I saw the holy city, the new Jerusalem, coming down out of heaven from God. It was prepared like a bride beautifully dressed for her husband.
21:3 I heard a loud voice from the throne say: "Look! God's home is now with people. He will live with them. They will be his peoples, and God himself will be with them and be their God.
21:4 He will wipe every tear from their eyes. There will be no more death, or sadness, or crying, or pain, because the old order of things has passed away."
21:5 The one sitting on the throne said, "Look! I am making everything new!" Then he said, "Write this down, because these words are trustworthy and true."
21:6 He said to me: "It is done. I am the Alpha and the Omega, the Beginning and the End. To anyone who is thirsty I will give water from the spring of the water of life as a free gift.
21:7 The one who wins the victory will inherit all this. I will be their God, and they will be my children.
21:8 But the cowardly, the unfaithful, the disgusting, murderers, the sexually immoral, those who practice magic, idol worshipers, and all liars will have their place in the lake that burns with fire and sulfur. This is the second death."
## The bride, the holy city
21:9 One of the seven angels who had the seven bowls full of the seven last plagues came and said to me, "Come, I will show you the bride, the wife of the Lamb."
21:10 He carried me away in the Spirit to a huge, high mountain and showed me the holy city, Jerusalem, coming down out of heaven from God.
21:11 It shone with the glory of God. Its brilliance was like a very precious jewel, like jasper, clear as crystal.
21:12 It had a huge, high wall with twelve gates, and twelve angels at the gates. On the gates were written the names of the twelve tribes of Israel.
21:13 There were three gates on the east, three on the north, three on the south, and three on the west.
21:14 The wall of the city had twelve foundations, and on them were the twelve names of the twelve apostles of the Lamb.
21:15 The angel who talked with me had a gold measuring rod to measure the city, its gates, and its wall.
21:16 The city was laid out as a square, as long as it was wide. He measured the city with the rod: about 1,400 miles. Its length, width, and height were equal.
21:17 He measured its wall: 144 cubits, about 216 feet, by human measurement, which the angel was using.
21:18 The wall was made of jasper, and the city of pure gold, as clear as glass.
21:19 The foundations of the city wall were decorated with every kind of precious stone. The first foundation was jasper, the second sapphire, the third agate, the fourth emerald,
21:20 the fifth onyx, the sixth carnelian, the seventh chrysolite, the eighth beryl, the ninth topaz, the tenth chrysoprase, the eleventh jacinth, and the twelfth amethyst.
21:21 The twelve gates were twelve pearls. Each gate was made of a single pearl. The main street of the city was pure gold, like clear glass.
## God's presence fills the city
21:22 I did not see a temple in the city, because the Lord God, the All-Powerful, and the Lamb are its temple.
21:23 The city does not need the sun or the moon to shine on it, because the glory of God gives it light, and the Lamb is its lamp.
21:24 The nations will walk by its light, and the kings of the earth will bring their glory into it.
21:25 Its gates will never be shut by day, and there will be no night there.
21:26 They will bring the glory and honor of the nations into it.
21:27 Nothing unclean will ever enter it, and no one who does what is disgusting or false, but only those whose names are written in the Lamb's book of life.
## The river and the tree of life
22:1 Then the angel showed me the river of the water of life, as clear as crystal, flowing from the throne of God and of the Lamb
22:2 down the middle of the city's main street. On each side of the river stood the tree of life, producing twelve kinds of fruit, a crop each month. The leaves of the tree are for healing the nations.
22:3 There will no longer be any curse. The throne of God and of the Lamb will be in the city, and his servants will worship and serve him.
22:4 They will see his face, and his name will be on their foreheads.
22:5 There will be no more night. They will not need the light of a lamp or the light of the sun, because the Lord God will give them light. And they will rule forever and ever.
## "I am coming soon"
22:6 The angel said to me, "These words are trustworthy and true. The Lord, the God of the spirits of the prophets, sent his angel to show his servants what must happen soon."
22:7 "Look, I am coming soon! Blessed is the one who keeps the words of the prophecy written in this book."
22:8 I, John, am the one who heard and saw these things. When I had heard and seen them, I fell down to worship at the feet of the angel who had been showing them to me.
22:9 But he said to me, "Don't do that! I am a servant with you, with your brothers and sisters the prophets, and with all who keep the words of this book. Worship God!"
22:10 Then he said to me, "Do not seal up the words of the prophecy of this book, because the time is near.
22:11 Let the one who does wrong keep doing wrong. Let the one who is filthy stay filthy. Let the one who does right keep doing right. Let the one who is holy stay holy."
22:12 "Look, I am coming soon! I bring my reward with me, to pay back each person for what they have done.
22:13 I am the Alpha and the Omega, the First and the Last, the Beginning and the End.
22:14 Blessed are those who wash their robes, so they will have the right to the tree of life and may go through the gates into the city.
22:15 Outside are the dogs, those who practice magic, the sexually immoral, the murderers, the idol worshipers, and everyone who loves and practices lies.
22:16 I, Jesus, have sent my angel to give you this testimony for the churches. I am the Root and the Descendant of David, the bright Morning Star."
22:17 The Spirit and the bride say, "Come!" Let the one who hears say, "Come!" Let the one who is thirsty come. Let anyone who wants to take the water of life as a free gift.
22:18 I warn everyone who hears the words of the prophecy of this book: If anyone adds anything to them, God will add to that person the plagues written in this book.
22:19 And if anyone takes away any words from this book of prophecy, God will take away that person's share in the tree of life and in the holy city, which are described in this book.
22:20 The one who testifies to these things says, "Yes, I am coming soon." Amen! Come, Lord Jesus!
22:21 The grace of the Lord Jesus be with everyone. Amen.
`;
