'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1a4a097e17ceee03ae7a8df9253ac51a",
".git/config": "eac51d42ba36cdac77c5498567be2cad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7f162516069bb0ad510ebd614625400b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "236f8b70bee9dc415befa1ef5e090f0f",
".git/logs/refs/heads/master": "236f8b70bee9dc415befa1ef5e090f0f",
".git/logs/refs/remotes/origin/master": "e6d91865dff0ecf03a3813c3cfb2b1eb",
".git/objects/00/7365b0c0942811aec73b023b7517b9d27b8256": "621cf4721844766584801c59443edce7",
".git/objects/01/9c0946f8ee8d67b19c25aa1171f6244e9702e3": "88cde17acb68590f76db35abc2ba96bb",
".git/objects/03/c8f8b3eca48bf98787952f75ebbff81a172a68": "0157aa579ba25dd0ec29c2893d2e8cbd",
".git/objects/05/629d2880a740c0f892dab9720578babd26172d": "cd3643ad1d7eb538dcfef95f2a478656",
".git/objects/05/7582893dd2ceb65db1d582206dbc936f8aaba6": "43b4d0763736820909ef21fd2ada6047",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/1bf492bf3c99bb92f4df664b554b6af1c26132": "cb6cacf956d8fea0d8ec44d8ab84727b",
".git/objects/09/437e8efe22a4c8a624bf5a46054eb5a6efdad4": "717e83a7d8fcd482fb6e89b4229bc828",
".git/objects/0a/cc5e62ff3bf2e8d4ee9201574632403a7a8d86": "67ee3aa84741b3e92c4389eca2e18ac1",
".git/objects/0c/0b92c4e9a811a40895791d08fad0f2a580b743": "b52cd125f635f2119e4129830b01a07e",
".git/objects/12/0139d619bd88b479bfc5f8e1cae549da8a93a4": "fa7fab602edebf4adfca0d26bfa40b7f",
".git/objects/16/1306c607267198441b45b67fe8256a1aa07ba3": "6b6c751bf661cc3fafd180c55555140e",
".git/objects/17/4da3a7cfa1e1e9dd25911e51edb928cede1001": "689826b538985128ed301bcc9a981dd7",
".git/objects/1a/59facff36e7689e2e8c0584a59b7b64f181851": "13f0a4ab2f9cc5c330a3615ed8b39d2b",
".git/objects/1c/fd952e8d97e2727a13187b87c14a43c9e5cda1": "871f17495b3c0585e67b4dfbb5fefd8c",
".git/objects/20/5370eed76669b8bc0fe0dcad11bd68d3e63f42": "f0ca4ef2bb6a4f21c3f029a9e970cd99",
".git/objects/20/d74f6d74e0b318e390baf12315fec005ad1c60": "350c053c1a00de13346a5fb770b83115",
".git/objects/26/22da2cf3e01615883835025d926976ad1ed0e5": "7ead0b041c13c47855ca1e0e697f56a4",
".git/objects/26/4429b2d0d39ff95b53137427514fa4cce4e95f": "400bafb45d3b9790bfb6f8929b64f704",
".git/objects/29/0fd32ece950816314b054c680f9184992e42bc": "3191680e5681f5b72f73e8223ca6cc89",
".git/objects/2a/03160665310296e5881ac1fd73041133dae6c7": "c75e3618888ed6d2d159a0c8b77310c7",
".git/objects/2d/68f4f7021b8bedf40e7d16411aeaf2f93e41a8": "76b65b30fa61dda546a79b3c282e100e",
".git/objects/2d/d3f4240bbe0d89e53cef0bdced863b6fb8ab36": "57247870c09d57a22765129b303e8369",
".git/objects/2f/7712c34a4dbfe3791a1c3d3ee7e8db95ab1148": "07679617ddc4bc4835b056dd70cdaf84",
".git/objects/30/e6cc3f88da830aad412470271795ec8ab63c8b": "3d28468b47b6a985583ffbd8f7f1d231",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/1c27ff56d103dba4baeeeb8d9af4b43fd3f271": "9fa9eed91c109c3edd5c2505688fa923",
".git/objects/36/c682a0d4b5d38c36eb7cfda3542a49ab7dad05": "1994f5740d08ca150bf69e922cc3678a",
".git/objects/37/eb1ac9a2cde1ff96a7348ea4e3c165b70f0c14": "cd9a7853a08826bab4cc4e4a24014304",
".git/objects/3a/242d80485db13862d29aa0ae3820508d581f9b": "06d0d478a3ad76803d67a90319086073",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/dd65ea2bf7288e81fcb76b38689e84d5a05258": "43fcd245f33f1b10b836e75aba211a27",
".git/objects/3c/1f40cac4eca75421fd7d85d0b98f6c60dda274": "08949a9d3332e08e9488d4ee5318cba1",
".git/objects/3d/11d5790962febe4860c797b5a0a2d91553dad8": "52042fffc8c30cbd98a4b7b7657d33fd",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/f4b3ed617811a75ddb8916564c20d8c449189f": "6616e3b23a7a7225e4c5a2830cddb3f3",
".git/objects/42/73e7f0c813d143b8e96103ee6f5ca6a2c1291c": "ee097b07c7da7140f9be7bda20f741d9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/49/5540708210d9b52760393640dd9496af6c3850": "3e096f74d5e5b50d04f0c7e967541da5",
".git/objects/49/ae370338dc8c622dafd683be4a6ca93d847ba8": "baf2ef76ede1024bd8ad283de1eab38b",
".git/objects/4a/c6dcbc7d894440196f36bec0a706ce0d6f2444": "af20058a804f761390dc07dcfcac348c",
".git/objects/4a/ccd2764402703e2a414f68635cf798c880403f": "ae40aec0ca12521ade37e314eb2d8d08",
".git/objects/4f/4693ee0b7549a84dc1daa8df99d5413cb78b2f": "4ce1f9a7ec7f2d73c889194b3708fd62",
".git/objects/50/267611e5c7538099ac781d086368e1158366e2": "14f5c28cbfc7eafec5d813ad58698b9e",
".git/objects/52/f4f9af7d009dc6affd53715116483b832ca13c": "acd3ca2164ca094e0b2694c147ec5ef9",
".git/objects/54/bc49bb7c7bf10a697d9ae97f1cabe4a7493509": "fef8661d2736ab85f5c1f3fc755e4d65",
".git/objects/55/5c05f0f4ce9adcff9ea2b7ed9bb1e11eafa010": "ea24b452d3e8f91bd5bba2b56d93a29d",
".git/objects/58/4163aaf7efe0ce15ccacf3d9a25d6f2c2c4366": "a42a663ee1323109e0e8621540e92291",
".git/objects/58/8a335e393dbf99e22789398da8899af67379cd": "9ab15824512b05a40d29cbf4dfb70f02",
".git/objects/58/f250b8ee89c8e937baf7db11e9039d6b0cb254": "d17483a5284a0682b472fb30e482af3c",
".git/objects/5e/fa6c92c79a7b6e5149048e15f0052aecb6e031": "c8e9b437a83f37b5ba1837d479150734",
".git/objects/5f/7804fc025b1b841b898bc09198b715a01873e6": "7d97509453832d893298ed4688fc3c9d",
".git/objects/61/aff316e33574c2d424dc25fc786fece2831188": "a2e3dbde92611bc13b82ae6e440c4266",
".git/objects/66/1a87495f619c688924cf7c3d49540d8245e3d6": "fe1de7893ac636879f1cb4240ccb9fa8",
".git/objects/66/a54981267e51d333f2c7f0b28c9fdd1a8ac53c": "9554a40d7a090823ca1ac62e47c5b879",
".git/objects/67/f1a5f6c998f3c06c605228a45cd0036e91c99a": "68ea67a4091f622f98afe77bb46b2245",
".git/objects/6b/500b0de3e7ee4a4e0885d8189faa819f8d2ca7": "344da221c88926a0c58c0144e3c095f0",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/67c50d9345800d98a8034fc66dd77fc0363deb": "f7b9def6c4feec6760682ad8d8ad2c77",
".git/objects/72/d0152fe31a1f26ca22d8cb49d579275c5ce0ee": "a49bed49cddf2efd0c154eae69ef341c",
".git/objects/75/4aeff348d5f0d62f67cc3a404ad4da0bd9c5a5": "c64cf3787819270ffecba01e4b21d334",
".git/objects/76/c160e24893432df6e2e11f8085d5e872ca6709": "57f929cf51dab4a514280479e18d7f35",
".git/objects/78/998a33d21e13e5002755bf7df396b7bef34677": "6f77e381ddbf2e40adb62cd507a7dfb0",
".git/objects/7b/03929ab783b6e9d2b821b524753f216891baae": "fa1656ce959f09e50e2013d838e5de72",
".git/objects/7b/5dc665385e7988904ece11345db6aad1b0118a": "b667f3c05a8df17dab1d174b9218f7a8",
".git/objects/7d/99ebe776644f27cc7de1b8bfc40d9576fd7b91": "494342537835b9077ce4ecc1ba18f4e3",
".git/objects/80/0e4d74011ebc017a6298885c8f2bfc96b33d14": "7eab4fdf09d636aeb1532df9c4aacabd",
".git/objects/82/99c1e662a9589db1100907a017b2ffa6239e6d": "df11723e68f69cd570904fc848348c3e",
".git/objects/83/0637e473428fd496334175417ff25ac5abdffc": "d0ef0228f59d0923c96a744a7990831e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/b01832ec315f37461c65f374853608790b55e6": "ce19b9675ff268d32d15a00c5ce0ea30",
".git/objects/87/21505ffd5450a2ab3a0653b89d6a117b54e79e": "46e8949b63f8b003d98fcae9a04d9444",
".git/objects/88/b2e5c48391477d3118f9aefa3a66d827b37867": "bc3b54c9b3eafe3e7240933be4ca5bbe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/6605152d33c7b5d115718786febb82f1a45542": "2d8fdb10d303622d41025e925180d579",
".git/objects/8e/2bdd9154520e74b8bee20f226bc54645cdb171": "29313b11aee7aa7b604619ad29d3f021",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/73cf4dd145582ceaa8d98ee60c887e2377bd26": "03676d14b1eeca01cbae738edbcaf7d3",
".git/objects/92/1539ec8dd1c1dc65fbb9e9a4e91365a8053dba": "b1fe441f2e494e992e692a35ec67200e",
".git/objects/92/beed2e519b3f2ad33f6b3791b5d4f3e9012aa5": "b57dad817e85a02982742a68ce5273d9",
".git/objects/94/e8a94ffe8a1ab7d9e56943331809a97d5edaea": "397309627393d48a9d541b4b7bf5ffb7",
".git/objects/96/43bbf98c2a8eb72fdddc87d4809415a634df82": "6d193ee58754b111f5b1032c813d2c15",
".git/objects/98/148a304fb951b20a792a3b47a60fed7646c166": "7aee5ef3673b3fec0f66eef595c14b28",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/399c61ad8b8966732004258d60e2e439e2959f": "a725b182beb769221e45c9258e765c0f",
".git/objects/9c/58f3dc07b8f79c219e9d5565392fc7c06633c0": "6bbcd149410d263aaae79a0af55ac17e",
".git/objects/9d/4ae644962395be99c278aeba7c737a5484a7f6": "48ff5abda92b3f33271becc5d8cf3ec8",
".git/objects/9f/c4c5b88c549a979a8b48da3b1e1054c3dc6312": "76ff10cd234b84fc487eb1b4ccb37a7d",
".git/objects/a0/87f5bffbf0f188f692a11ce8d6aa35ffc7bba5": "81a23b82e5d2ad6bf6c29ac942b6bc2d",
".git/objects/a1/316443962f25ac7e1399239a0ea7cb2ce2a766": "99e85f036b43a9d5891d1b068e42587c",
".git/objects/a6/63a3c8cf66d5ddef37936f352eeed9e89ab726": "020ee24b4a153451c8d11652d0ccd7b1",
".git/objects/a9/c82fe359f284d91fbac950550e796759f382bd": "597cb99239e976da1dc07b5c33d47620",
".git/objects/aa/7c740891cd5c2c92a3e26b3f6837da5193daa6": "a552cbc10950e75c1bbe9f1f85b068a2",
".git/objects/ad/2b16d1a3bee5873fa17b65272c150585998f0a": "1a46f71d1c4bc16a5c2f95e3bfd3a8d1",
".git/objects/af/7f44050e9d1e9064be6eb7ab7e825e17e547cb": "ae00893fc816d338b6a92f1fe5f4142b",
".git/objects/b0/12da779064c869db2bd7b2dd88b3cc459b43c9": "24783cfbaf0d59f35d9ecf80a19d43f0",
".git/objects/b1/515ea4568beb34783c68b20060b3314dad7648": "d6671cfcb29b3f386e222e67ab6896b4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/9541f8beb476f650dda0c0fa2585bdb65f07de": "c6ca654203cf70391219d8e178b2fb25",
".git/objects/bd/a6f49b3f7fc0de13f80c7dd36c3c2cef3a11fd": "e2cf4418c86decbfad7d3d100fa7ad77",
".git/objects/c0/6994b10f13dcc67d9ea657fd2119fa256d0a5e": "28ff491a6061af36db0d6f9feae07a9d",
".git/objects/c1/8825055ccb84112cdfc492e2ef08270ad86560": "7bc8d48ca238c168beee4fbe580b7ff6",
".git/objects/c1/8deaa8456d97b664ff8c52341b60b0a63bcb3e": "b71d859ff7e13878258f1d7661126c2a",
".git/objects/c2/4468f6a79ae4d55a0d392246abbf06fc72ee58": "84219b9067691db74dbb57181826b404",
".git/objects/c2/aa9eb12e7441297795e35285ad12d0861fdc9e": "ae27d1edb74f144dcd030a8e8b26aed6",
".git/objects/c8/dff0c079927b0a817b6b5467193f09ed82f233": "28704cb842773032916f74a381f9d383",
".git/objects/c9/b1fde25e0b405bb0ac4ccf9051a83e5ad77189": "b78857024fc93852b5d5e917fac20cd7",
".git/objects/cb/a799de71eb2d425568b72b52cd1daafe394de0": "b8acfa6290c70c57b4e45c2d6bb51d27",
".git/objects/cd/881f7864a8262368dd05ca447fe32c403d713f": "23b6d4ae2684ada8ae79d40ed87451ce",
".git/objects/ce/386aeac01dd792ec2b1ba57e4d1d8a7186385e": "f642765f927cf26ce724709394f24aa1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/e4f1a8f117c211b2175303390090b1a615c9d7": "e8cfa25c6c57e74b80ca3a2da82489f9",
".git/objects/d2/7a5d254b8bf1a46351d1bb5212f00ea8410949": "dd670f99629f7ad330165de3acfcadf9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/705cfd466ca664e90009fb415ad8683304a8de": "aa205da153580a012c27a40be6ca07a1",
".git/objects/d5/908599646c8d3618251754f0f746a8a6d6fd4e": "c244e99ec1270a70ef954dbc7643e136",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/7b654a3cb6331991b9bdb69edb3102691160e2": "bf6f3aada634603bd3ece26a241eea96",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/63e7d8d13f7ed53942e48edb316dc8c25ffafa": "f779d1c4b483cf5e0184ccbdd95885c7",
".git/objects/d8/db7d9f1bc3e3fc55e20d250d780d749d8a6520": "9b95f583da0b5844b8a80a7df58d503c",
".git/objects/d9/2ce56e8ff7c80a278c639f93bcbce98a38ea6e": "9b0be23dcbb4fbe40aab7b7a73b72c66",
".git/objects/da/d71f9f86404287c4da23f7b0f421ff80eb8386": "affc1ea026f46d83b8d7720dd5405b1f",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/43ef0ae7760b4158ceca3d28bd8d52fb6acdd1": "76f726d2872a02e8cd5691beeaf09e7a",
".git/objects/dc/8928a46bd7b022ab3eb8c53c089faff8e6b145": "a5f8194d576d4b84a8efa73204d0be05",
".git/objects/dd/6dc9516b6337d686765177c3c47a9e65db8864": "796727eda9b5442167433ec775ac5a5d",
".git/objects/de/3d1cc8c5e64019a4c5b7a6ea7dd31d1858ce99": "f37ec3a71925d6bbe5e0e8a2ca280f0e",
".git/objects/df/33f5026e4b002d5168d966943dbc659a4b6456": "97a492016a5e560e28e54154e3fb9cf4",
".git/objects/df/3e49ae49dae13ee9a8a1542b2001e11371f8da": "04e115a655a7be9e10c6a85ec16477f6",
".git/objects/df/a69a5050c7275a1e25873b2c6b05cc53bba6a8": "427b234e45106398d6fa6d31c275dfda",
".git/objects/e1/0946f8f3422e0a5358153d59afc8334eff3cc8": "8ce8c55c3d21f441b12a596d14f3a344",
".git/objects/e1/9586fefd6fe61d503ec70c127a650527c8ba64": "297b75cb0fc5ce722836087ea39918ca",
".git/objects/e1/d05bb1af70feb424127fa4775567357367ca39": "0815e6857ff268fd1c9f08c53915fdbc",
".git/objects/e2/9f573cb1a0575e70f3e2871076bc6b81e38c08": "261a5000dfbed29501e4e6ef70a25a3f",
".git/objects/e5/1f9ecfd62f664f8462f4baed21a6e417ef3ff6": "ed302060b78ccca0ba9fdc8c8a64e8f0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1417e37c6721d693c3f0e7ed929eae0b61acf4": "761decff8454b262f84dc33516f3de3c",
".git/objects/f1/a4cdd2e26b20704ad674f41cc355e121cf4eb8": "e8eefcebff04810472b86d7b586a3b70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1d1139d5747019a89dd23c04375a2b7601324f": "d465c2db1f9c13ce8362e266160cc49b",
".git/objects/f2/42aa982de1ab8c12c20f3abbe8f4ff51ed60e6": "26db43fe7ed50ba4dfc4b3889495ea96",
".git/objects/f3/0e53928ee880bc90ef84c8291ec78da0b7def8": "4059fc9fbef4e0215e1a438628d7e3a6",
".git/objects/f3/cec8b0daa3e6f1d879e424f9de5602801d61f4": "eac55fcbb2bc13122e6a13e3b054b0b2",
".git/objects/f8/ad2bb2cdcfb0f3a89b8912ed2da061ba16e167": "c615193ef0fba71b3fd2a48efbb0e9ce",
".git/objects/f9/0583979d6ade26457594a52d995a900de941a9": "83937b78bf084661349218e277033898",
".git/objects/fb/1164767e13932afaa59bf1b30b4125466f7642": "6b7a50f49212e8596f405318c2a05a57",
".git/objects/fd/7b6a9eb9abdaa2b37dd6a50fd4b8a48a773972": "ebed7f92293fce9998c9e2d903a8c7fd",
".git/objects/fe/9b39929a3821bd845884a27621c5ef23b058ee": "a870ea376399be9b30bebd888a05089e",
".git/refs/heads/master": "abd55b6644701555bbb29564bfb4fcc2",
".git/refs/remotes/origin/master": "abd55b6644701555bbb29564bfb4fcc2",
"assets/AssetManifest.bin": "395e3ee6a50cb728fd781ddef05dc890",
"assets/AssetManifest.bin.json": "36cf7811591bfa62b4b6cb8d641075fe",
"assets/AssetManifest.json": "4e887b23890c9ba3b182b03fbc0deacd",
"assets/assets/images/ACS.png": "b20abaa2752c7538a8a22fda0fa4c782",
"assets/assets/images/axis.png": "eb8c768d832103f350fdf365804ba3da",
"assets/assets/images/cases/DCMP(35).png": "7d5a6312f3a50b20285518aab34efb70",
"assets/assets/images/cases/flutter_tachydependentBBBz.png": "e0522db2b39345910708537dda220641",
"assets/assets/images/cases/Inferior_STEMI_with_LBBB.png": "062002b8d3bd0068771d1bbf7b734973",
"assets/assets/images/cases/Juctional_with_VPC_bigeminy.png": "ab5741669c091176310462f0bf1175c9",
"assets/assets/images/cases/Junction_with_hyperkalemia.png": "4081378bc6a12b89b466c4263a264d90",
"assets/assets/images/cases/RBBB_flutter.png": "db78798636a1bf1a18f93adfd4d873e1",
"assets/assets/images/cases/RBBB_with_LAFB.png": "5a438c24e5dcb809f23456af34852abc",
"assets/assets/images/cases/RCA_CTO(39).png": "8cd1754f3ebb00f93db8c173968fa971",
"assets/assets/images/cases/RCA_CTO_pmLAD_curplit_with_afib.png": "403b230fbd9b14a9cc756daf6e95b7d7",
"assets/assets/images/cases/RCA_STEMI3.png": "32e3639d3a9b42ef56119c67c9054083",
"assets/assets/images/class/accelerated_idioventricular_rhythm.png": "7730ea0bb595c26bbf7c7dc84230f715",
"assets/assets/images/class/anterior_fascicular_block.png": "aa788b37e979a2d17c36b7df0e3c82f5",
"assets/assets/images/class/anterior_infarction_(lad).png": "f8b3fbc7ef67963b1d41b30e5cd769cb",
"assets/assets/images/class/aortic_dissection.png": "56f889c97d31cefbe86b7b776def2954",
"assets/assets/images/class/asystole.png": "319d297358647839cd7bdbeaac28ed68",
"assets/assets/images/class/atrial_fibrillation.png": "c113b577d5086bc985ef9087019bee08",
"assets/assets/images/class/atrial_flutter.png": "3b18cbf62eac580987e7eb34c9484df8",
"assets/assets/images/class/atrial_premature_contraction.png": "0799b6f08b18aa19607fb09bcc3a8c3a",
"assets/assets/images/class/avnrt.png": "913318b80a77eacaf3c7195f8edb87a4",
"assets/assets/images/class/avrt.png": "1f5f6f379cce99ffcebd3c96e7761a86",
"assets/assets/images/class/a_pacemaker_rhythm.png": "c2b6813d8dc4c840fbbd5d9fd364227f",
"assets/assets/images/class/brugada_syndrome.png": "dacfdd8e0813caf4bd2ac83b7effb9b8",
"assets/assets/images/class/complete_degree_block.png": "dc2820704140536f869ad48a75b669b0",
"assets/assets/images/class/digoxin_effect.jpg": "31db2279e6798a4b890ce58747e9436d",
"assets/assets/images/class/early_repolarization_syndrome.png": "e50785bdf7e01870a2bb0f7ae109d6da",
"assets/assets/images/class/first_degree_block.png": "24a4a8139f92c0798ddca530ca5ea78b",
"assets/assets/images/class/hyperkalemia.png": "c1a7fba10650065ea61e9cbcd232c243",
"assets/assets/images/class/inferior_infarction_(rca).png": "2270c82aee160cae51a674adae3eed47",
"assets/assets/images/class/junctional_escape_rhythm.png": "2f09e4d1b0497278e145999b8e1102f8",
"assets/assets/images/class/left_bundle_branch_block.png": "b1cd5e89bde5b07ba0960db2e0802f5f",
"assets/assets/images/class/left_ventricle_hypertrophy.png": "07e6031775672d487227e6530ebae79d",
"assets/assets/images/class/long_qt_syndrome.png": "bd8f6545acbce451e0f35b380cbf4b96",
"assets/assets/images/class/main_coronary_infarction.png": "8409664f259192253472cf6ee56a71ca",
"assets/assets/images/class/myocarditis_ecg.jpg": "28fadf2a216df96d43cce38f2cf903b5",
"assets/assets/images/class/old_mi.png": "dcf4ea6fb029aaea861d2d364323c7c6",
"assets/assets/images/class/posterior_fascicular_block.png": "a7f8995d530979560b2b0f75ca3cf86e",
"assets/assets/images/class/pulmonary_embolism_ecg.jpeg": "205b9a47823af0083940ac73b9bf8c56",
"assets/assets/images/class/right_bundle_branch_block.png": "1784015173236339ee5edcd251bf7984",
"assets/assets/images/class/second_degree_block_(mobitz_type_i).png": "670d6573a4e7c8c71c18a32e106213ad",
"assets/assets/images/class/second_degree_block_(mobitz_type_ii).png": "134313b664fd911d8d17c518b4c28849",
"assets/assets/images/class/septic_shock.png": "8d2fd6c54813f06bc247adc41282b56e",
"assets/assets/images/class/sinus_bradycardia.png": "2e59b9b63f80de098b911b329be6a9e8",
"assets/assets/images/class/sinus_rhythm.png": "e173df97a12b75aa3bdd9a0fcdebd03d",
"assets/assets/images/class/sinus_tachycardia.png": "15e5a091000a03ef105ddf67dbabf70c",
"assets/assets/images/class/stress_induced_cmp.png": "ca4278b3c317b812a7373d1383030473",
"assets/assets/images/class/sustain_vt.png": "c2bb37a43308f4d21aae4eb8edb1e9a2",
"assets/assets/images/class/torsades_de_pointes.jpg": "44b6333034fbbb1e4bcb46269aed92be",
"assets/assets/images/class/trifasicular_block.png": "85d270b946f63f28ad345493d79004bb",
"assets/assets/images/class/ventricular_fibrillation.png": "c5b9e44ca2b0fb334dde17f33a130379",
"assets/assets/images/class/ventricular_premature_contraction.png": "f1ea403fdbf93c1f1c392540fb0d283d",
"assets/assets/images/class/ventricular_tachycardia.png": "bf3ce1294142bdf6f1e7c2b5a1192564",
"assets/assets/images/class/v_pacemaker_rhythm.png": "8b0f2772bd2f727df8d7db0de3675ac5",
"assets/assets/images/class/wellens_syndrome.png": "af52e52b40cef493d74ff2928f61cd59",
"assets/assets/images/class/wpw_syndrome.png": "691a0b09d53e78a4a79db9ab50e49abc",
"assets/assets/images/drug/adenosine.png": "b2ad184a99e75558942779d3b1e0327c",
"assets/assets/images/drug/amiodarone.png": "084ff0e7e5398f105f5fddef96b42635",
"assets/assets/images/drug/atropine.png": "9e0c93a0d4d2783e91b628c2d5af727c",
"assets/assets/images/drug/calcium_gluconate.png": "d6f142ce29c6866a2b9a5458bf36b430",
"assets/assets/images/drug/dobutamine.png": "b982c0e8f003a6c9a6b5d05ecf6b6a65",
"assets/assets/images/drug/dopamine.png": "6f9c05db99070fcfac31e06516b5b480",
"assets/assets/images/drug/epinephrine.png": "e893a72a692a0c962fcdc3be99e7b966",
"assets/assets/images/drug/lidocaine.png": "edb4b412ede260648d960d5c0a030823",
"assets/assets/images/drug/magnesium_sulfate.png": "aabeaf963be42d649f57fa42b57df3bf",
"assets/assets/images/drug/norepinephrine.png": "10435edce745447d5f57dd7b38b6b25c",
"assets/assets/images/drug/sodium_bicarbonate.png": "03fb5d664379499464664debf0a4158c",
"assets/assets/images/ecgcardiacaxis.png": "b272e97187850e05605c7eeea49d169d",
"assets/assets/images/ecgleadposition.png": "4e460f6c1045ae0138d9da1be803345e",
"assets/assets/images/ecgreadingsteps.png": "5dabeffdfc44c7e2e64995dff6a69d14",
"assets/assets/images/ecgwaveform.png": "11e841e5c338ef4f679885e6e20aa93c",
"assets/assets/images/evolution_ami.png": "3cbcb7d6efb3c04ad1452b9c342e049e",
"assets/assets/images/Junction_with_RCAinfaction.png": "79a40d07765bd1aff6d32251ed6a153a",
"assets/assets/images/logo.png": "82c24646ec16abed422def67e30c7161",
"assets/assets/images/mLCx_total_STEMI_dominant.png": "343181f121f18c875827df71c6b30402",
"assets/assets/images/quiz/2_1_AV_block(55).png": "6cc01860546f536bec3cd6920e0df609",
"assets/assets/images/quiz/a.fib_LAFB(85).png": "0d058939b1f1b759dfd38cabb8a322d0",
"assets/assets/images/quiz/afib_LAFB(14).png": "39bedeb186a334c91737215e837e4cdb",
"assets/assets/images/quiz/Afib_rvr(21).png": "a5462c4c9821846a66279a033d8253b8",
"assets/assets/images/quiz/afib_rvr(29).png": "fd1600c65bfa1ac63f858fc9bf09341b",
"assets/assets/images/quiz/Afib_V_pacing(63).png": "8bc18fc893617b8e8c18877813c0db98",
"assets/assets/images/quiz/AFL(37).png": "048bf394e75cb5fd2fa0149c95683925",
"assets/assets/images/quiz/AIVR(73).png": "7730ea0bb595c26bbf7c7dc84230f715",
"assets/assets/images/quiz/Anterior_STEMI(30).png": "200ecc2b2762b2f51bfd63e9e3b6e265",
"assets/assets/images/quiz/APC(31).png": "58dd2a37306aa0edba4d298c2e6fab25",
"assets/assets/images/quiz/AVRT_LPS(70).png": "8369ce84087149ef5bc3610c8a712fe8",
"assets/assets/images/quiz/AVRT_right(6).png": "1f5f6f379cce99ffcebd3c96e7761a86",
"assets/assets/images/quiz/A_pacing_rhythm(61).png": "c17b0dc51d1f0bb91590235a07d2af47",
"assets/assets/images/quiz/bradyarrhythmia(52).png": "e3b1ffef5de4372fe37546eefcd76c21",
"assets/assets/images/quiz/bradycardia(42).png": "b88e553e472d1fdab63d54755dcb9c1e",
"assets/assets/images/quiz/Complete_block_LBBB(4).png": "45ad8a863fc938b119deb22441a59d72",
"assets/assets/images/quiz/ectopic_APC(88).png": "bf4804a0994256105b0a3939b44a8adb",
"assets/assets/images/quiz/first_AVblock.png": "88bfed50d5887b9d4b7cd1750775776c",
"assets/assets/images/quiz/first_AVblock_RBBB(65).png": "2ba9adea6184f5c64d91f14703cc96aa",
"assets/assets/images/quiz/high_degree_block(64).png": "9c80d6ee628ba05f6f88cf0aa53be980",
"assets/assets/images/quiz/Junctional_bradycardia(72).png": "4670deb52bc547f926db74b6301f4f6b",
"assets/assets/images/quiz/Junctional_tachycardia(20).png": "29d6c3edf2e4adb280c56aa66aaf3452",
"assets/assets/images/quiz/Junctional_tachycardia(43).png": "e5ab184c54a2043f6b89549ce29ea586",
"assets/assets/images/quiz/LAFB(34).png": "aa788b37e979a2d17c36b7df0e3c82f5",
"assets/assets/images/quiz/LBBB2(10).png": "559242463d4e5867f8d5fca564b7bbd4",
"assets/assets/images/quiz/LM_STEMI(89).png": "8409664f259192253472cf6ee56a71ca",
"assets/assets/images/quiz/LPFB(33).png": "a7f8995d530979560b2b0f75ca3cf86e",
"assets/assets/images/quiz/pLAD_STEMI(32).png": "2baeb49cdb9cd8d9644089aea3e5a7f0",
"assets/assets/images/quiz/PSVT_AVNRT(71).png": "974cc3cf111e85d7cd655f640de7acf3",
"assets/assets/images/quiz/PSVT_right(69).png": "bd6bdc90aba77e4f20747fd0f425943d",
"assets/assets/images/quiz/RBBB3(2).png": "f0345c302cd24d9a178a9b31b4853db2",
"assets/assets/images/quiz/RBBB_Brady(26).png": "c5b51984398b4bbb33d6febe3e25a612",
"assets/assets/images/quiz/RBBB_LFPB(82).png": "9f4bc3db8e3e9fa473e23f98cdc0a4f0",
"assets/assets/images/quiz/RBBB_LPFB(46).png": "c7383bb5051fbf44d35d96cd5c32d8d5",
"assets/assets/images/quiz/RBBB_with_afib(25).png": "025c2f3c5975e216eed5b42f0b5c3d8f",
"assets/assets/images/quiz/second_block_mobitz_i(38).png": "670d6573a4e7c8c71c18a32e106213ad",
"assets/assets/images/quiz/sinus_bradycardia.png": "2e59b9b63f80de098b911b329be6a9e8",
"assets/assets/images/quiz/sinus_rhythm.png": "e173df97a12b75aa3bdd9a0fcdebd03d",
"assets/assets/images/quiz/sinus_tachycardia.png": "304767daa8ae90b8fc3db6304430b539",
"assets/assets/images/quiz/sinus_tachycardia2.png": "6116db4f26ccb9b372b77227ae622faa",
"assets/assets/images/quiz/Sinus_tachycardia_PVC_bigeminy(48).png": "3eb8554a61ea76a37b8a40e8bffe03c0",
"assets/assets/images/quiz/slowafib(80).png": "6827d8d215e6f48023250853580a7ee9",
"assets/assets/images/quiz/SlowVTy(27).png": "6a03fed42697510c64ec0f961fc149ac",
"assets/assets/images/quiz/SN_block(67).png": "3913494579af243f10a66b52437fac48",
"assets/assets/images/quiz/SSS(53).png": "fc0fc5008d5365e75c2061c78c14fea4",
"assets/assets/images/quiz/SSS(87).png": "a87c3130922bd2ffaea21fdfd6b7e5f0",
"assets/assets/images/quiz/Sustain_VT(56).png": "04a979ad8b44d06dcae1279e4232aca9",
"assets/assets/images/quiz/Trifasicular_block(19).png": "404b8573c6d39b3c6e3d0be5be563d3d",
"assets/assets/images/quiz/vfib(9).png": "c5b9e44ca2b0fb334dde17f33a130379",
"assets/assets/images/quiz/vpc_bigeminy(44).png": "dc5358397463e4b3df4eff8ca11f40dd",
"assets/assets/images/quiz/vpc_bigeminy(68).png": "a46ac9e3c99b3b745c225ceb884963e3",
"assets/assets/images/quiz/VT_induction(66).png": "c2bb37a43308f4d21aae4eb8edb1e9a2",
"assets/assets/images/quiz/V_pacing_rhythm(62).png": "fd80f52ba1145c626cae91e0c9498958",
"assets/assets/images/quiz/WPW(81).png": "691a0b09d53e78a4a79db9ab50e49abc",
"assets/assets/images/STD.png": "f1f8461b0ec70705b84bf422c3043ff3",
"assets/assets/images/STD1.png": "4e74c06f9ffd8c8c0cffc6efa1f94ebd",
"assets/assets/images/stemi_territory.png": "37f9adf03df3375f961b2ab49e78d8d5",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e8dc1e47752552eb2588c6a06cb63d30",
"assets/NOTICES": "73f0a6a9f1683ab54166ff73a696eae4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6bf69fd077fb7ba79478ccabcfe73a13",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "08c37ce7fed696ec9805b4725f1f7805",
"/": "08c37ce7fed696ec9805b4725f1f7805",
"main.dart.js": "2261e8c97aa95e52fe10fa17494b8278",
"manifest.json": "6d4886efd5f57ab4a40f9019fc40a732",
"version.json": "234509b49bb228c0b240a10636562663"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
