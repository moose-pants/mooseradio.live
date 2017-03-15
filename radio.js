"# mooseradio.live" >> radio.js 
git init 
git add radio.js

jQuery(function($) {
                                var supportsAudio = !! document.createElement('audio').canPlayType;
                                if (supportsAudio) {
                                    var index = 0,
                                        playing = true;
                                    mediaPath = 'http://www18.zippyshare.com/v/UumesGCC/file.html',
                                    extension = '',
                                    tracks = [{
                                            "track": 1,
                                            "name": "Green Day - Homecoming",
                                            "length": "09:18",
                                            "file": "Homecoming.mp3"
                                        }, {
                                            "track": 2,
                                            "name": "My Chemical Romance - Mama",
                                            "length": "04:39",
                                            "file": "Mama.mp3"
                                        }, {
                                            "track": 3,
                                            "name": "My Chemical Romance - Dead!",
                                            "length": "03:16",
                                            "file": "Dead!.mp3"
                                        }, {
                                            "track": 4,
                                            "name": "My Chemical Romance - Teenagers",
                                            "length": "02:49",
                                            "file": "Teenagers.mp3"
                                        }, {
                                            "track": 5,
                                            "name": "My Chemical Romance - Kill All Your Friends",
                                            "length": "04:28",
                                            "file": "Kill all your friends.mp3"
                                        }

                                    ],
                                    trackCount = tracks.length,
                                    npAction = $('#npAction'),
                                    npTitle = $('#npTitle'),
                                    audio = $('#audio1').bind('play', function() {
                                        playing = true;
                                        npAction.text('Now Playing:');
                                    }).bind('pause', function() {
                                        playing = false;
                                        npAction.text('Paused:');
                                    }).bind('ended', function() {
                                        npAction.text('Paused:');
                                        if ((index + 1) < trackCount) {
                                            index++;
                                            loadTrack(index);
                                            audio.play();
                                        } else {
                                            audio.pause();
                                            index = 0;
                                            loadTrack(index);
                                        }
                                    }).get(0),
                                    btnPrev = $('#btnPrev').click(function() {
                                        if ((index - 1) > -1) {
                                            index--;
                                            loadTrack(index);
                                            if (playing) {
                                                audio.play();
                                            }
                                        } else {
                                            audio.pause();
                                            index = 0;
                                            loadTrack(index);
                                        }
                                    }),
                                    btnNext = $('#btnNext').click(function() {
                                        if ((index + 1) < trackCount) {
                                            index++;
                                            loadTrack(index);
                                            if (playing) {
                                                audio.play();
                                            }
                                        } else {
                                            audio.pause();
                                            index = 0;
                                            loadTrack(index);
                                        }
                                    }),
                                    li = $('#plUL li').click(function() {
                                        var id = parseInt($(this).index());
                                        if (id !== index) {
                                            playTrack(id);
                                        }
                                    }),
                                    loadTrack = function(id) {
                                        $('.plSel').removeClass('plSel');
                                        $('#plUL li:eq(' + id + ')').addClass('plSel');
                                        npTitle.text(tracks[id].name);
                                        index = id;
                                        audio.src = "http://www18.zippyshare.com/v/UumesGCC/file.html";
                                    };
                                    playTrack = function(id) {
                                        loadTrack(id);
                                        audio.play();
                                    };
                                    if (audio.canPlayType('audio/wav')) {
                                        extension = '.wav';
                                    }
                                    if (audio.canPlayType('audio/mpeg')) {
                                        extension = '.mp3';
                                    }
                                    loadTrack(index);
                                }
                            });
                            });
