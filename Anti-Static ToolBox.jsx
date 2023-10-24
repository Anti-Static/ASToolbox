// Anti-Static ToolBox
// v 1.1
// by James Zelasko
// This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
// http://creativecommons.org/licenses/by-sa/4.0/

var panelGlobal = this;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select):
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"Anti-Static ToolBox","preferredSize":[0,0],"margins":5,"orientation":"column","spacing":0,"alignChildren":["left","top"],"varName":null,"windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-37":{"id":37,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":10,"alignment":null,"selection":38}},"item-38":{"id":38,"type":"Tab","parentId":37,"style":{"enabled":true,"varName":null,"text":"Timeline","orientation":"column","spacing":3,"alignChildren":["left","top"]},"collapsed":true},"item-39":{"id":39,"type":"Tab","parentId":37,"style":{"enabled":true,"varName":null,"text":"Canvas","orientation":"column","spacing":7,"alignChildren":["left","top"]},"collapsed":true},"item-41":{"id":41,"type":"Button","parentId":43,"style":{"enabled":true,"varName":"RandomizeLayerOrderButton","text":"Randomize Layer Order","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-42":{"id":42,"type":"Image","parentId":43,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABV1JREFUeNrMWFtII1cYnmRj4iWTaLqxJtU1i6Livcwq+KDVbd9UtFAL7ovxZQJaEN0FoS9G+iRo+2TBvGhBuiCFPij4IhgV8cEdqqKsBmm1akJN8RY15qL2/2NOdibJspnVXXvgMDOHc/755j/f+c53RkJBMZvNBrgYqfsvI4BlSxIE9Iff73efn59zHo/H/rGRKBQKfWJiIiOTyRLg8XMZZggBjY6OPtva2nLxOzMMU0/TdF14EJ/PZ5ufnx94x7uY7Dg51a7WxIKLkyarrafffN3ji483IigKM4SAampqfgWAtrm5OTO2y+VyXbXbw1SenIVG/62QU78kKwURr6+vX4XyPzJiam1t5VRS6dDPWj1VIFfEli4/Rc3sOihb9mNKis9kypaWlkyQwpzKykoz6av1XVJ5bk+oPvJ4I+JJJJIne3t7E1gRELb9lvYodkDBQp/efLyU33h4eOja398fgDmuy87Ozok1WF9fX05ycnKgVldX09gmFhC/CEAhkLS0tH4A17u5uWmLNUheXp5eqVQ+w/uWlpac2xJfxn/Q6/Xs0dHRjxzHjZO21wnwxRp1qI8z7oEgAGamqqqqGXjVD2M5Mn13Bmp2dvYF//nk5ITjVCoLpxAC8bpcDnJvtVpdKSkppvDAn21tPBELpr32K1ZLQAGH6o3GVkZMgKKi4roPoVdwsQRAgQyAJPw1ft9yrlLR9aHpu7y8tC8vL9uAsM1Op9NKSF5RUcEmJSWxEZICHwHTZgpfgZOTkw6czmATW1paSjU2NorBpRNwCuXA6/U6MjMzh+DRRIAVFBRQ+fn5b4judFJTU1OCSCAj/Vqttjo1NdUEoAJEz8jIYGElUrB9xIzo9PSUcrlcEwJJwFWHqw+BidEpAPMCVx6/raurSxSgt+oUluPj4w28qtXq3Nvw430BRRVPzFK4Vn3sEuJUenq6Ppp4wkaNnOE7hKiBDg4ObNAv5DJwkxcLBjitF4Da3d21QxWI587OzgQKaPhg2MBd4W1ZWVkCK9PZ2WkSLZ7t7SwsmBtQ8fEJLMuaWDEBnj798s6nDXDgpTcA6uLCbbFYhizhnXBKgfC6aJkSs2GLyRRNK99MH+xfdFFRUc/Z2dkM4RRoTV2mQsE+BE8V4opUSv35QMIBqAjxLC8vzwWjSPg4hK7zO/UnMYNa+udf/YZWaxGIp91ut+DqAxtMEWCVJ+dU48FxaOA6uIYfPtVEOIWOjo4Bt9uNZjEw7lulmvk+RSsqU0r/ZaRLCE6JiQCLtYyNjfXAgtiIi4ujSdtPD9PuRqf4oklE9F1lbW2NBaHUb29vcwiqra1Nf1tuScNPL2Bpu+AFpliJDNrkgP5WnU6XC/6eLisr092peOLpJRzQ7xpVoIbZhNAtITZmqKmpiSHO0+bzWsSC2UuMD3AGD6NmUGNmZWXl3v1UcXFxvUaj4QKZgrQzBsNj3X2DAhzIxxtQIIbjIyPDEekGL8WoVComyh7l+BAbNoqngFMonuAUh/gnZARkMBhY8EuhgSCuKB0c0SOyAmEzZ+Dg8bKhocEabH5lNBrRvYo1eb1SvnhGOyEjIHSepALIiIMoyIgeAdXW1vaQdrGA3ioJBBiswi/Qn8cSoLu72wYr1wxZpS8uLkJHr/cFFFU8CwsLn19dXTnW19dfxhpkenq6Hj9icHDQfBfckvLOWxROG04fZguzRjiEhwVSwQQKAiwuLjbD3tcDXHSB/3l+GzD+G/1Ty4J+mikpKckBvRqHTdlGAOEqQ1JDjfg/Re6Hh4dnVldXI9R/YWFBlMmDxNCwK/QQ8fzf/cmT8P55dkAtvSfdRE4sk3+e/wkwAC0QmFA6eQjcAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-43":{"id":43,"type":"Group","parentId":48,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-48":{"id":48,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-54":{"id":54,"type":"Divider","parentId":48,"style":{"enabled":true,"varName":null}},"item-55":{"id":55,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-56":{"id":56,"type":"Group","parentId":55,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-57":{"id":57,"type":"Button","parentId":56,"style":{"enabled":true,"varName":"RandomizeInPointsButton","text":"Randomize In Points","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-58":{"id":58,"type":"Image","parentId":56,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeRJREFUeNpiZACChoYGBSCVwDDwYAHQLQ8YoQ46/+fPn+/fvn07+/Pnz2cgWd33H435f/2WOiIuspnWLmFnZ5fi4uIyZmFh4QRyDVlAIQRy0JIlS6IePHjwGaZwv7RimgQzC0Pko9uz6BFECgoKvDExMcuADktgAgmAQgjZQQMBQPaD3AFigx0Fi7KBBjB3MDEMQsBCrkZzc3M1TU2tYmoneCA1i2xHcXJy8rKxsRlT01GMjJCIG5TRN7zS1IEDB84CsQk1HZOdnZ3Gy8tDvKMcHByMRUXFjGkZQqysrCDztxDtKJCDBAUF02jpKGZmsHO2jCZ0qif0a9eubhEVFT1LS8fo6en5kuSoq1evguolmtaR2traxgQd9U5EyDjNI/0MvaKNgwPUnGJoHE3oVEnoLL//fP7169ctejnm//9/UgQdxffx060FC+an08tRoGqGorqPjJwlpaWl7UPVaoZSACzjJAlVU6PVDN3aU6SCW0AApNKpWs3gAlJSUrxqQDCoQkoNDNRnUqeRxwaizo4mdLpF3+vXr58Dm8pUGQTh4uI0poqjQO0sIKaKo1CqGWh3ecAB1B3fmCDBxmUMGh8aSAeB7Ae5A9x9H4wjeYwgQajD8oHYYIAC6gMQX2SAjnkCBBgAGW+la5PxL20AAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-59":{"id":59,"type":"Group","parentId":55,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-60":{"id":60,"type":"StaticText","parentId":59,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Frames","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-61":{"id":61,"type":"Slider","parentId":59,"style":{"enabled":true,"varName":"RandomizeInPointsSlider","preferredSize":[113,0],"alignment":null,"helpTip":null}},"item-62":{"id":62,"type":"EditText","parentId":59,"style":{"enabled":true,"varName":"RandomizeInPointsTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"20","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-63":{"id":63,"type":"Divider","parentId":55,"style":{"enabled":true,"varName":null}},"item-64":{"id":64,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-65":{"id":65,"type":"Group","parentId":64,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-66":{"id":66,"type":"Button","parentId":65,"style":{"enabled":true,"varName":"StaggerInPointsButton","text":"Stagger In Points","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-67":{"id":67,"type":"Image","parentId":65,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeJJREFUeNpiZACChoYGBSCVwDDwYAHQLQ8YoQ46/+fPn+/fvn07+/Pnz2cwFR5PX6ZdFOTb8pyL8xktXcLOzi7FxcVlzMLCwgnkGrKAQgjkoCVLlkQ9ePDgM7LiKgX1tDtfPm6e+ubFWVoHkYKCAm9MTMwyoMMSmEACoBBCdxC9Ach+kDtAbLCjkKNsIAHMHUwMgxCwEFLww9KiOEFYkC5RC0rwQGoWQUf952BXY2Njo0sIMTJCIm5QRt/QTFOc+w+mz6JDOQUC2dnZaby8PIQdhQ4cHByMRUXFjGnhKFZWVpC5W0h2FMhBgoKCabRwFDMz2DlbRhM61RI6Orh27eoWUVFRmiR8PT09X7IcdfXqVVD9RJO6Ultb25gsR2EDCQmJM4GlPsU5koMD1JxiaBxN6DRL6FhbEj9+3KKGOf///5OimqNWrFjeS61qhmqOwgZCQ8NILvXJrmaIBeRURaPVzIDkPmzg1q2b6XSrZogFBw4cQKkfpaSkeNWAYEBDCh2ogYH6TPy5D9xBOTua0Ac8oaOD169fPwc2pWfhU8PFxWlMV0eB2mFAPIvoagbaXR5wAHXHNyZIsHEZg8aHBtJBIPtB7gB33wfjSB4jSBDqsHwgNhiggPoAxBcZoGOeAAEGAPfnpliMjIsdAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-68":{"id":68,"type":"Group","parentId":64,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-69":{"id":69,"type":"StaticText","parentId":68,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Frames","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-70":{"id":70,"type":"Slider","parentId":68,"style":{"enabled":true,"varName":"StaggerInPointsSlider","preferredSize":[113,0],"alignment":null,"helpTip":null}},"item-71":{"id":71,"type":"EditText","parentId":68,"style":{"enabled":true,"varName":"StaggerInPointsTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"2","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-72":{"id":72,"type":"Divider","parentId":64,"style":{"enabled":true,"varName":null}},"item-92":{"id":92,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-93":{"id":93,"type":"Group","parentId":92,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-94":{"id":94,"type":"Image","parentId":93,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2dJREFUeNrsmM1PE0EUwGd2t1voF9IaW1aBEhM+1ChELpKYcBGjBpWbMSTCyQQOxnjhSOJfwQ0S4hWERAEvxAMH06qYSIQKBZHyYT+A1qXd7ofv1aXS0B5M0PawL5nszL4383775mXzZigBGRwc9MKjhxRfhoFllepAH2RZPhBF0Z9KpUL/m8RsNgsWi+Uqx3HlMGzhMEIINDo6+nB1dTVerBB5vV57d3f3CwDrYfAFRqiYQCjoHzmwn4Eqxpblk0MOrpBBOWWYcxxnOsNyvItl+VMMyzsYhrdBs1DGBHqeo4QtNF/WiCJqqoQtoarpuKpKu6oiRRRF2lHk9IYso07NN7cgVBUA3bDY3A282X2W5TyVLOu2U9ZtYainjDJunlI3EFkLzVcISUiatp3U1C1RVXfi8Iwpyk5Ikbe+SKntaTGxvZyWUvnmMqQExYAyoAwoA6rUoXL+6IIg2OtBZmdnO9fS6ca92pqRiNXm1FStcl/TnFZ4MskDx8DigtBiLuOf1jflXVRKSaQ/sGCt5Uyn+5ouHYiUqgmGMnFKy6MMdSxtfPeu7EX7bTbbUGtr6xJKKBSK54VCoFBoc6i5uTkznlpff97ZeZds8fxvZ5JEJicnSPXFC+QrjHsTu6S9vT0XSLe5fvsWhY+rWI7HKo7aRCIR8tb/jty7f5+A/pnu9zFA+fNCgZGAz2AwmBnX1dWRubm5rGPs46I+ny+rF4QqWLQhuwba2O12MjY2RoaHh0lvb2+OzczMNO5Ijh5qqcLbB84BeJN0dXVlxi6Xi7S1tWX12I9Ewlk9OjoKdGiDkUIb+MhjNh0dN3P0hx8M9VR+KNxbDCXmFEto44PLV0ZqFgNOJ+SSQ8+pO1XVzoHPC+f1nGKI7+OxnHrkqSH9r15r1zjTfp+9cl18/ykGORWFnIpBTsX2PIL0cny83wo5pbtdKhgpTDZ9b/21JpO5Yu2b2/WndElC6aJA6cJNC95QpnSJ7hYsXaYE708oXcLJH+E9KF3Ch6ULA6VLPZQuQRM/sZxIpDBaxn/KgDKgDCgD6qRLl6OyKcvpN3BgnE8lY3BCXjnpEzKu/9dQB3CkDsAJNlDgFPvPI4X3Q6WwbTqHmMkpvLDC+6FiAqF/5MB+Sd7kUXypgz2B1lykQO1Cmyf6necvAQYAlxvS87TijhUAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-95":{"id":95,"type":"Button","parentId":93,"style":{"enabled":true,"varName":"FadeInOutButton","text":"Fade In/Out","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-96":{"id":96,"type":"Group","parentId":92,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-97":{"id":97,"type":"StaticText","parentId":96,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Frames","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-98":{"id":98,"type":"Slider","parentId":96,"style":{"enabled":true,"varName":"FadeInOutSlider","preferredSize":[113,0],"alignment":null,"helpTip":null}},"item-99":{"id":99,"type":"EditText","parentId":96,"style":{"enabled":true,"varName":"FadeInOutTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-100":{"id":100,"type":"Divider","parentId":92,"style":{"enabled":true,"varName":null}},"item-101":{"id":101,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-102":{"id":102,"type":"Group","parentId":101,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-103":{"id":103,"type":"Image","parentId":102,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/FJREFUeNrsWF1IU1Ec/2+7ax82t3LWnEkzbSpYGdJDgbSeglhfVEQxUnpYvUTQ8kEjNCL3YOulXtxTwSiiRKoRSA+tl0Ji9IGQrrSJuWX5MVvtOttH93/z4ja37r1rOIkOHM65Ozv/+7u//+c5AqBae3u7jhqaIP/tJoXFK5gH9CoSiZChUMgdDod9S41EIpFo5XJ5PUEQMupxK4EMISCHw3Hc6/UG80WRTqdTmEym2xSwJiH+gAzlEtDbssqrjQqVls8efD/iwDkNKtcqKxKJDB1Fax8+X7fBsl0qV3Ddx+AguG7ALz+6UrlTJhRyfsl6QnzsrmadsT8ctu/xj9zhuo8V1IVVxXqTQmUpFArrs2FNBALFFonUQqm0fvPoh/N/Deq+pmwvRX8b8zwZjbomY1EPm1C9eIWZmUchHswZU8gQAwjB2AIT124FA5xsb0xXRYPyRyPOM1/9thezIV5OlBEUqowBxJX2REbvfp+xX5n+6slG5UQmo2ZsCBniK5TtI56WlptRxZ6fc/ZdYx/tqevCdJvQy5gv5qqyXLa0oBi352LUSwYq3+3fAYWpgy19YEjJFlSS9xkMBtrjyPEpLZBhIAsVWsNGQ1IkV/8IgfXLNB0uWtassk0UyBcJPT3i0zfEBZaDKwud5yvKHqWup8onSTLY19fnSQtKr6/qwjEg8gIMeSGgLTHqK3RGZl0aiUDjy9egPnKIfm7pfdJ1a1MFzBILYup8n6Eh7gflxVYQd/cYmwPTxge11UmgUuXPzc25KVCnslLf7oEPUKpUgqrTSnec429MU5GzsL9/AOSHD0LByROwuusGDRJ7TiJ6utZbXQkaiilJc8vvdDIzA73b6hYYkEkBWdl/vwfENTUQ6u6B11oN3bMG5fEM0hQeGJ/aSw1Glc/v9ETDSTZhlYrAeq+btikr2tTwUJJANIzVgri+4XKHBXNfJ9qUZzDpP6ny0aYygnK5XHTl11ZaXg/iFSD7FvS53r11L0q4UjkN/sXI+7SJ1gXgprzPTee+0aFF62zyiWxclkvWzzYZ/4/oyx5UkVBER3syFgsuC1BYq+FpB+dUIfiMc5yaL7zsbLmNqrvMfKtSi0p9DsdvsZg7U63G2/swEV8vLrGUiAgjX4YQEMOSIxiw5SSiPy5Zf6xWIjHjsSmxtOViQwyY+ZBy6U8hgzMoPIonCk53nGJrqDJkiC2GcQaFtpOOKSz+2U83Ef+jH0E313qfl/rwQEnZlNOm1pjxSJ7gFLmPU3g/xCfF7Pg0bGudHN+Hp51c31NRg5IGhRdWeD/ERwCqgm84YLufQhw4X5Y3eYKEO8+zWM3mKd0FqP6GufP8JcAAbw/WQ5FEPrgAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-104":{"id":104,"type":"Button","parentId":102,"style":{"enabled":true,"varName":"LoopKeyframesButton","text":"Loop Keyframes","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-105":{"id":105,"type":"Group","parentId":101,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,5,44],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-109":{"id":109,"type":"Divider","parentId":101,"style":{"enabled":true,"varName":null}},"item-110":{"id":110,"type":"DropDownList","parentId":105,"style":{"enabled":true,"varName":"LoopKeyframesDropdown","text":"DropDownList","listItems":"Pingpong, Cycle, Offset, Continue","preferredSize":[208,0],"alignment":null,"selection":0,"helpTip":null}},"item-111":{"id":111,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-112":{"id":112,"type":"Group","parentId":111,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-113":{"id":113,"type":"Image","parentId":112,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8dJREFUeNrsWE1ME0EUnv5ZaFz5F1p+WsRgpMafVEjqBTnowRRvxGBILJdyIMZgTUjURDTRk+vFE3vCpNGQGiFC5AjGRCK0MRLA2BitUdgoIuhCsdof562dsiFtd7dWyoGXtDM7b9/bb957M/PeKBCmnp4eE27sKPvUh7H4FTFAL0Oh0FogEPAGg8H5zUai1WoNOp3Oolarc/HjETVYCAC5XK6zfr+fy5aJTCYT1dbWdh8DsythACyUSUBTlXtvn6PyDXJk4PuAA/o8qEy7rEilOn6rqPTx84o9TmuOjpIqR3CopQrAzM/szGvMVSolf8So1rT2l1XYpoNB5hT74YFUOVFQVwpKatuofOcupdKSjtVUSEEd0uY4sUstBz++vfTPoB6WVTZj818jz4vh8NhiJOwTU1qr2eEg/TCKchmzFFiIAAIw9PLXO/e4ZUmxN2fax4Niw6Hh8wssPf4zIGsRJQUFLiOApJpdaNH+le/MzaUFXzouVycLahJDYCG5SsUmMVpe7QAX+37/Yprm3jMb+cpEQrDKyIyluiyTlBAUWfZSgnrTQGWbtkGltfrsdvvfXXvqtQF9W0aodLfBfqLRkuIQZcfGxub/Kyir1dob24YRejaOkHm/DY/ZUqQbzMDAAA+6oKCgIxqNemZnZ/klXldX51AoFEeXlpZ4nYODgwyedC/wv5xcV0lkzGYzI/nsEyOGYeh42tjX1zE5OclCv76+3ivkj4yMwDjPb0Eojsrj8dDT09M+WQeyGHV3d8cVtre3ewWs+Y187Gqe31JeHX+psLDQgC2+grvejIEaHR1thrapqWloZmbGMTExwStvaGiwgEsI3+12ezs7O208/+qNuDxFUXrcJLcUyfzQ6ipkjXrcsngsaSBzHMdWVVXVkmeDwWDBs2ZJH1rCNxqNb4R8QhqNhkoZ6F1dXR3kbEKQfrzwDHU9cjOpLEXT8ZDig13AGoK/mpoaWuDqdf2JZbY3z60Pqkip4uNsLRLhtgQoyNWg2oE+TgSfSk7yYokXI1ZQ4LzLITcrdeYXX4T2RyTiTZaryd6noI67W6J36lVqm1wLASBiJRe3TKddYgnpid7YekCrdUDZJExtpcQQAQOEC4nrqfJ3yaCgFBcqTlROiRG4DCwkVlBIBgWxk8hSkPyLVzchdmiV80rN92W5DwpKHFPDdHGZA0pywaLI/D4F90NSBaCwPPbpHX158fNpqHYyfU+FmzweFFxYwf2QHAXgCrnbgdj9FOCA/pa8yVPAYAzYBfw7nKXjDhcE6BWK3Xn+EWAA/yyzCk5RzgQAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-114":{"id":114,"type":"Button","parentId":112,"style":{"enabled":true,"varName":"LoopCompositionButton","text":"Loop Composition","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-115":{"id":115,"type":"Divider","parentId":111,"style":{"enabled":true,"varName":null}},"item-116":{"id":116,"type":"Group","parentId":39,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":[0,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-117":{"id":117,"type":"Group","parentId":116,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-118":{"id":118,"type":"Image","parentId":117,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABCFJREFUeNrsmG9IE2Ecx+9ut795apnmrZlWeBERFSfB7EXrTa/yXQiG1HrjIIiovQkTWkTvWkK+cm8yMCUJEZV6E7Q3tSiPCopyVoqm02ylm7vtbH96fms3zjndtN0M6oHjdr8dd5/7/v48v+fBMTRsNlsVOpmxjR8diGUMTwC9CofDQZ7nOUEQpvJNolar9TqdjiVJUosuD5GgEAB1dnaeGhsb82+URFVVVVRjY2MXAjMTYACFNhIIBrwfOOA3KIVJXcYwDFVbW8ssc3ZHByc3mMhBpv4BQEajsT0NVE2+VCOwv3D8h8p2LIspn8+XzAJxFM77qCfbdzZJba+FIHfx23TWwW+1WusMBsMJqS0QCLhbWlrsGaF6e3vd6LBIba1by1mmoCgZ/Hws6m72+rrX8vUURdFQIGVxXwSL+U/PTFpcId6fN/etNkAhHU4wbaW0tWbik221e4cqdts24QQ9HQlzj/kFpyyBDkAJha7RCvIEvHS1+9vmvI5CgmAZparpXNGWrrpnL5tyqlTPgs+NjrjLTk7zAw/KKzCjRncVgWErKXZQraEXYzGPCsdpuB7/7nW4XC4uNanWDZUaPyenJ1YEQzYK3Atq+qLROASA9Q1/GLw79HxK1joFYKIrnxl2WcH2kK5suF9u6C8hFCz8t3d8xMIJQQcodtc/NyVLoKcDA8VeCaFhuJ6JhD3an0R3s3emW1RXvEe27Esd4KqBgJ8TVTj7dRKyzJkOPi/TzJ2y7aaubYauli2lN0Xblc2lDFKlTvY6BdW8glTqxa89QxXrL28uvQrp7omEB8/Peuzvd1S3v1sMDepJJVNJKhvAXWtVZ01KHVRr2cMa7SVwFcx/10vK7mlwXN+zMG8Rsw4A/dGov/bLZzuAQlb+iWIZlSpXkKwCwynIKji7fy46jk2OOpITbXGJSRJP8fKAgLgE2LoUy6gUqABnAII0lwLFG36livVGIs505QLAxO4ClAY3r0kpk8mkR8eS1qLE+53i+x/F5zu4PqDWNKDTki8vUyiOvhUEx0rlIlFg9UUEwYjPyRoKLXFoNJbOTzSNVbfdroGvrC8oZCC+IOv2qNTs8KLAzUUjflDwaYjnVqtjAJbzOgWF0PX7xfGXoxdRx3UFyVJwRKNjUTnAbvyYdS9bzyH3ytq6SBUYrWSaxMkWudVarVIBkE0KBhkI7Ys4B0a1WgqtyJd1C8jmyElF7wv4bPWoG4Wm70UoeCtdliVsSbvZbGaNNJ0u2NNDoRWqB8WVI2MxbW1NPvTNp1FsvMLgGfk6g2F2e+47T6fTOYWOjFDSPnti/z4MR4tqKsjT/94SS+ZNjKxChBT3h/IBlSlEEhw8KcYJ7A9lsx2E+mxLOgVysT+ViNePf+VOHi7Z87wAncoGxfYcVBhxz/OXAAMAvCYK7o7fDckAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-119":{"id":119,"type":"Button","parentId":117,"style":{"enabled":true,"varName":"RandomizePositionsButton","text":"Randomize Positions","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-120":{"id":120,"type":"Divider","parentId":116,"style":{"enabled":true,"varName":null}},"item-125":{"id":125,"type":"Group","parentId":116,"style":{"enabled":true,"varName":null,"preferredSize":[null,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-128":{"id":128,"type":"EditText","parentId":125,"style":{"enabled":true,"varName":"RandomizePositionsXTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-134":{"id":134,"type":"EditText","parentId":125,"style":{"enabled":true,"varName":"RandomizePositionsYTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-138":{"id":138,"type":"EditText","parentId":125,"style":{"enabled":true,"varName":"RandomizePositionsZTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-139":{"id":139,"type":"Group","parentId":39,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-140":{"id":140,"type":"Group","parentId":139,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-141":{"id":141,"type":"Image","parentId":140,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsFJREFUeNpiZACChoYGBSCVwDDwYAHQLQ8YoQ46/+fPn+/fvn07+/Pnz2f0dgk7O7sUFxeXMQsLCyeQa8gCCiGQg5YsWRL14MGDzwMVRAoKCrwxMTHLgA5LYAIJgEJoIB0EAiD7Qe4AscGOGogowwZg7mBiGIRgUDqKBZkjJSXFqwYE6IpuAcGzZ88+01oeq6PUwEB9JhbHpwM1naW1/KCOvlFHDWlHgeq+htevX0tOnTp11kA7Jjs7O01UVPQ5RkhdklXpiecVkBpU0SfMzOzQJiy+6ZiMUrElBxfvgDsKOYTkWVgjV0rIbNomKR85oI6SYWHlQeYzMzDyKrKyOdA7xFAc1fr+9S0Y+9f//89XffmYrvnodvrxH98+D2ia+svw//PFnz96FR/e8i188+Isuvx9ebXN/SISxnR1lNyDW45ezx8ux6WBjZFRMoyHf+Z1OdWZtMqlKBVytaCoWgyvQDExGvmYmIxBuTSdX2h58ZsXs6gZxSiOevLn95cXf/+cxe8YNmNapykURy38/OEZEOMt2Z8qqKeB6E///p3teP+6EaQHWR6UUykNNRZSNYBy5YavnxqwZQIQAJVtd3//Xu749P4sqiV0QgBXrkQu29RY2dIoyaVkJ3RCAJZLPbh4zya9elpCSpSSnNAJ50pERgCVefd//zpAahojOaETArCM8PDPb6xFBahsQ88cNG/kvf3790DV25d+Vk/u9WILIVDZdkZWuQFffcpCbUfpPb5TQkiNJDOLDzCX2l/5+XMWttoDxVGg3AJKnPSodEG5VJ+doxiYS6Ma3r1KR45SFEet+vIJ1EpIp6VjkD0NK/PQ0xgLbHwIRIPSABCfpbGjwLkSW9RB3fENnNBBA1ag8SF6RBsoV4a/eOKH7iCQ/SB3wHozCgyDbCSPESQIdVg+EBsMUAfmAxBfZICOeQIEGADsMIMh97AkdwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-142":{"id":142,"type":"Button","parentId":140,"style":{"enabled":true,"varName":"StaggerPositionsButton","text":"Stagger Positions","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-143":{"id":143,"type":"Group","parentId":139,"style":{"enabled":true,"varName":null,"preferredSize":[null,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-144":{"id":144,"type":"Checkbox","parentId":143,"style":{"enabled":true,"varName":"StaggerPositionsXCheck","text":"X","preferredSize":[28,0],"alignment":null,"helpTip":null,"checked":true}},"item-145":{"id":145,"type":"Slider","parentId":143,"style":{"enabled":true,"varName":"StaggerPositionsXSlider","preferredSize":[120,0],"alignment":null,"helpTip":null}},"item-146":{"id":146,"type":"EditText","parentId":143,"style":{"enabled":true,"varName":"StaggerPositionsXTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"250","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-147":{"id":147,"type":"Group","parentId":139,"style":{"enabled":true,"varName":null,"preferredSize":[null,0],"margins":[0,0,0,50],"orientation":"row","spacing":9,"alignChildren":["left","center"],"alignment":null}},"item-148":{"id":148,"type":"Checkbox","parentId":147,"style":{"enabled":true,"varName":"StaggerPositionsYCheck","text":"Y","preferredSize":[28,0],"alignment":null,"helpTip":null,"checked":true}},"item-149":{"id":149,"type":"Slider","parentId":147,"style":{"enabled":true,"varName":"StaggerPositionsYSlider","preferredSize":[120,0],"alignment":null,"helpTip":null}},"item-150":{"id":150,"type":"EditText","parentId":147,"style":{"enabled":true,"varName":"StaggerPositionsYTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"250","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-151":{"id":151,"type":"Group","parentId":139,"style":{"enabled":true,"varName":null,"preferredSize":[null,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-152":{"id":152,"type":"Checkbox","parentId":151,"style":{"enabled":true,"varName":"StaggerPositionsZCheck","text":"Z","preferredSize":[28,0],"alignment":null,"helpTip":null,"checked":false}},"item-153":{"id":153,"type":"Slider","parentId":151,"style":{"enabled":false,"varName":"StaggerPositionsZSlider","preferredSize":[120,0],"alignment":null,"helpTip":null}},"item-154":{"id":154,"type":"EditText","parentId":151,"style":{"enabled":false,"varName":"StaggerPositionsZTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"500","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-155":{"id":155,"type":"Divider","parentId":139,"style":{"enabled":true,"varName":null}},"item-156":{"id":156,"type":"Group","parentId":39,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-157":{"id":157,"type":"Group","parentId":156,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-158":{"id":158,"type":"Image","parentId":157,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6BJREFUeNrMWE9M01AY70phuDmNQSJ1I0yNCPGgZrtgIkblgoGbmkw4LDFsJhyMWeREwkgIB0yPJK7EZAdwMTG7QPRiNGICB7YYTsL8N2RzRCDRFSbTsvm+ZV1KaQddW+BLmva9/nm/932/9/u+Ph2GzOv1WtHJie2/+RGWqC4P6APLsn9SqVQ4nU7/KOVrjQ0Nro9zc3Qp7+r1+pMGg8FGEMQh1LxEgIcA0Ojo6N1oNMoomCWtxEVWq9XU2dn5DAFz4tABHlIICLvvdtuUvA/jAw64Bk9hpYaMb1ebm31PfD57sWecTqcNeWQbeEQhmo+D2EsWAyCSJF07hV4SlMfjaTeZTKTAxWG/3x8We97R0WFXC7wkKIvF0gYrQmRGYSlOofCF1QCFqzU74JTmnlLbXtTUtp9/9dr1vLWF3jNQxTgFgJoqDX2z3xcptNICJYdvfX09ArrBP1qnQw4YAO6jQUxvzacKK+nx0FDhespy2iMENL2R6r+ZWAgoCl9vby8l7AvVnvHCAC/JusNnKyra2SxWEFyL2ezilnYdUe5Az5r+ZrMMXAOgW0uL45pwyr74xYsGwy7oK3OeSGYzhdXGqTFnZBnRBme5gGSvPgjZURyvF7t3r6vLLdZfVUaQmkoCdbzGBSHbxLLb8iSfU3yrL69wcTzUJHyXY18pSbHlccocnbcfCPEUckqxeEKBBrOEVMEpM+iOsA0hAo8AAOCQsP10ZMQHqSkWj9OPenpoYTswNhaCb72bnHRDShK2AcfK6mo/VJ7e5eVlcnh4WFGRBgCkyL5b6+7udlVXVydUC59I8t6b3AdKfQwvqz+C4zkAyUwm3Pj9U847ECLuubj1XIj/nlytkuUpz8oSTegwk9g94IxY/2x6g9JUPNGMmd+ZTESKU6KrMptZ0zR8kPsgfcDsIfcV41Rik534ybLzkCsHb9/BIkbDlv8AqQpWFijgEwDi+IEGmxisOuHg7vM5tcD+C3BCiwCtVbXc6GsS/nX6/XZF4YM0Icz2EMpr8W+0GKf4yi/0kCqc4tdDxQjLCaHqkjAwMOAxGo1bqoDaN+9t0zMzsssP1UABICFhp65fCT8cD+4ICFKFWH8ymWTk5kXVanSp36tgMBhBh1sznSpmanIKxw6gEdz+UE5rYrEJ9Ku+JQwMwyR28yEpTsndp4IkQHBqDPtDFEWNq80pOftT+UX2+UDu5Ony+0MA7AE6Lu4TjX5BQYHl9zz/CzAAnJ/a/+P5vM8AAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-159":{"id":159,"type":"Button","parentId":157,"style":{"enabled":true,"varName":"CenterPositionsButton","text":"Center Positions","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-160":{"id":160,"type":"Group","parentId":156,"style":{"enabled":true,"varName":null,"preferredSize":[null,0],"margins":[0,0,3,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-161":{"id":161,"type":"Checkbox","parentId":160,"style":{"enabled":true,"varName":"CenterPositionsXCheck","text":"X","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-165":{"id":165,"type":"Checkbox","parentId":160,"style":{"enabled":true,"varName":"CenterPositionsYCheck","text":"Y","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-169":{"id":169,"type":"Checkbox","parentId":160,"style":{"enabled":true,"varName":"CenterPositionsZCheck","text":"Z","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-172":{"id":172,"type":"Divider","parentId":156,"style":{"enabled":true,"varName":null}},"item-213":{"id":213,"type":"Group","parentId":39,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-214":{"id":214,"type":"Group","parentId":213,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-215":{"id":215,"type":"Image","parentId":214,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7RJREFUeNrMWE1ME0EU3m4XSxe2iKFCQaRq6FlTYlITIyYe5WBiQkSi6GF76MFUjh4sB4/YE4dywGoAQ+KtHE3Ai00MG/Va1BQRCpZEtFhobIvzJd1ku+5/oTgJmbzX2bdv35v5vo+xUWREIhEvmUaoox9xkkvaVknofbFY3M3n80KhUFivdyYOh6OTZVk/wzBOYl5gUCEkND09PZROp3NHVSKv18sNDw/PksRGkBSFCllN6FVH98DFRudDO2XjStR+7t3e7tObG6sJs3HwfuThcrkoGg6rLbvLHe8MNLKPkRBszLDhtxJPzIOupeQDTZxfyT/Y3HKllriM3oJHrW5fm93ObZVKuSc/sinpb7lyWbHlm6VixkwcU0ktdZ+LeOzMddG+0eya71v9HBHte9/XFpd7elOsjfaJvvx+OQW/mTjyQWtVSBoIAzb8Ut+dzbXgSvHPy1/lsoAZtpU4hpJCqZX819jmfqmd3MvnLn37Mj53/7aAGbbWer34mkmh90r+D4VdQcnv8Xh4Jf/r/M6imfiaSWEzZkrFeakPdnhrQzGpZDIZNBNHa7NrbnRsRtL7WbQAX6x3arTiRNs6EucdTr+ROLqQgABGkgkEArF4PN6n9nulwoKRj6gJPKtakslMHlQsRok6gMgAQDneaA2iNkwl9exkVz9H01zid054ntteV00K5AruEm0AI3BHfsyVRiwWWwoGg326bW5kuRftXTERcIkNuhqTknhV+8D2UhsPjrd18Ea+HAxvZB3iSRlA6b1VlRLZXjpaabuPtIYHDonHHpsaewgtQ4WQUDgcDkaj0RjEGiqm9kzr1Mw/SC5/L5RnJJvNeiYmJia/en0L8gWgDiC1XgWQEBLTW/f21NnRHqbhltQHHXY6nboaCoV4t9udqWofBFpVSwi5jm5tGNrAqJCRdYiHuFrvrWofNhs5fQJ0EmSJmdNnZJOLXNm7sjyE09duZzxzOz/faJ4+DCyQLzIICbwZWND64AMDTzVCtjJ0k4LuWeg6wxPu0twzaoQsj6Olo0wrT1/DMeqys0lTMRqK03KCP3TlKSVkRaggFa678tQjZMiVQ1eeciUJLgMgDk7N+DHDrrvylGsrkCsQ2kXTfsyw66I81f5fAwDKyRU2/FIc0otjSXmq/QZEVvJDJ5mJc6DgCYpQ8kO41QyeuB+y8jDoiHDZGFheZHvYVmhKkkcLIzI87oesXAdVFGOCqnHg/RWl8em/vMmzSe48HwDrjugib5v8fRTvPP8KMADDg0gl3sITywAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-216":{"id":216,"type":"Button","parentId":214,"style":{"enabled":true,"varName":"RadialPositionButton","text":"Radial Position","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-217":{"id":217,"type":"Group","parentId":213,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-218":{"id":218,"type":"StaticText","parentId":217,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Rad","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-219":{"id":219,"type":"Slider","parentId":217,"style":{"enabled":true,"varName":"RadialPositionSlider","preferredSize":[116,0],"alignment":null,"helpTip":null}},"item-220":{"id":220,"type":"EditText","parentId":217,"style":{"enabled":true,"varName":"RadialPositionRadiusTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"500","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-221":{"id":221,"type":"Divider","parentId":213,"style":{"enabled":true,"varName":null}},"item-222":{"id":222,"type":"Group","parentId":213,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,6,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-223":{"id":223,"type":"Checkbox","parentId":222,"style":{"enabled":true,"varName":"RadialPositionDuplicateCheck","text":"Duplicate ","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-224":{"id":224,"type":"Group","parentId":39,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-225":{"id":225,"type":"Group","parentId":224,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-226":{"id":226,"type":"Image","parentId":225,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtVJREFUeNrsWEGP0kAULlhll0DV4IGyiakHa1wua+pFLsSEY7kQ2YMhkROciBH/AB48ggdO9KQJ8bAkXOBI4g0vNuoBzKKJRLOUhCWuQBBW2DgPO0mDTG0UF2L6kmbavjedr9+8efPmWSgkqVSKQ02UWr08RViaFhXQ68lk8m04HMrj8bh12khsNpvHbrcLNE1voscbNDAEgPL5/N1ms9lfFUUcxzkjkchzBCxqhRfA0CoBgcD4gAPugSlKO2VPLrkFUsc345HyrH80s721YXfuOhieZLs36DVejoazH73nvODZsW2wJNsHh21Zi4OeN9h1nM+ROu/YNiUESvppx/B6tkjiCNRssChzUeTPnovpgLqpfbZSaygmKBPUsuWX1dc7OZFJxt3pRMH3h9NpX88W9Np+vTO0/Megrn96HzfS8fGXTgNdhmzvtD+XUFMyfeqf+9QBd+0Vybjx/Vi6ffBRwtuRXkTfG3yN4+3jxdaVmF5E32rumxHdBGWCWs+QML889bLF+eSMJGoYkf4vpoxKOBz2QOt2ux3ValUJBoN8qVRq+Hw+tt1uD0BXKBRa6rlSqNVqitfrZaGFPtgG95dluU8E9e7yVWKUrh2PyurmCqBE9czmhM3W7/fHut1uOhAIBNEBoK+Cmk2ZKIo5lmUf8TwvoraMgPAIVAN08M7lckkIlEwExVitxNOMS5N+oAHLWjay2WxcbdOYRSzlcjmO2JIXZQqJRGIfmFqKTwFTmK3f6YAp0ndCodBDmPql+BRmyogOmCLZFovF9NKYQr4jwGVEB/6m850gLI6lMKUoSsuortPpEFNhcHi8Ev8aFJZcLhesVCoy+BBMGzC0CDCEhe3tbaFer8toBXr0fopelJzp1RJOI3hCfSrV6/WETCaTWnUkTyaTKYZhPswcHQpWUB9aJSAYH3BgpjhqzSp5FtUJAdh9qPasiKgjdL2l1JrnDwEGAOOjaZwR0gzPAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-227":{"id":227,"type":"Button","parentId":225,"style":{"enabled":true,"varName":"GridPositionsButton","text":"Grid Positions","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-240":{"id":240,"type":"Divider","parentId":224,"style":{"enabled":true,"varName":null}},"item-241":{"id":241,"type":"Group","parentId":224,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,10,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-242":{"id":242,"type":"Checkbox","parentId":241,"style":{"enabled":true,"varName":"GridPositionsDuplicateCheck","text":"Duplicate (xx)","preferredSize":[109,0],"alignment":null,"helpTip":null,"checked":false}},"item-243":{"id":243,"type":"Checkbox","parentId":241,"style":{"enabled":true,"varName":"GridPositions3DCheck","text":"3D Grid","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-253":{"id":253,"type":"Group","parentId":338,"style":{"enabled":true,"varName":null,"preferredSize":[null,0],"margins":[0,0,0,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-254":{"id":254,"type":"StaticText","parentId":253,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Col","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-256":{"id":256,"type":"EditText","parentId":253,"style":{"enabled":true,"varName":"GapColTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"50","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-258":{"id":258,"type":"StaticText","parentId":462,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Row","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-260":{"id":260,"type":"EditText","parentId":462,"style":{"enabled":true,"varName":"GapRowTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"50","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-261":{"id":261,"type":"Tab","parentId":37,"style":{"enabled":true,"varName":null,"text":"Utils","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-275":{"id":275,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-276":{"id":276,"type":"Group","parentId":275,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-277":{"id":277,"type":"Image","parentId":276,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmJJREFUeNpiZACChoYGBSCVwDDwYAHQLQ8YoQ46/+fPn+/fvn07+/Pnz2f0dgk7O7sUFxeXMQsLCyeQa8gCCiGQg5YsWRL14MGDzwMVRAoKCrwxMTHLgA5LYAIJgEJoIB0EAiD7Qe4AsUEhxYAcZQkJCcZAVxvT0TFnFyxYcBbZHSxYgtFYUlIyjY6BNAuIzyILMDEMQjAoHYURfcAiYhY0SEdDatRRVElTe2SU0tTY2NM+aGvupIcDXp2/8NDlyb1ZeB11zdL0NIes3J/vUpLv6OGo6xysDxlW38MffVrHT5uKHzrq/llJ4Z34wSOmtKQVVqyJBNlHME2dUFU6/PPNmw8vX778yHT5iggtaZA9IPvQ3QBqujS8fv1acurUqbMGOoFnZ2eniYqKPh8tEsguEnpFpYz12TmMXyjI3aWHA17evPWh+PWzs3gdpSoqqijPxe0soKjESw9H8b17/5CBkKM+CQm+f2lmuvOVjeUdWjtI7MhxFZB9BNMU0OWCchu2ZIHYJiXVfbSkQfaA7EN3A7MDEADbxrynT58GB+FFUeF77O8/nlz78tmN7/cfHqU13c3NdhRYJP0B2W1mZmbMzc39ZbScGl7l1CopeV8tNnafN2qqp+nSdLly5WXYs4eb8TrqhbXFEylZuZO/6dR0ecHP84Rh9UP80adw9YYy3+27yqCmBeez50K0pEFNGJB9BNPUJXHRq7CmhcC6jea0pEH2gOwbbbpQlPtA40ODwTFQd3wDhxRowAo0PjSQDgLZD3IHLE0NupE8Ruj4Achh+UBsMEAB9QHUFmCAjnkCBBgAtEFQTzOQBJoAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-278":{"id":278,"type":"Button","parentId":276,"style":{"enabled":true,"varName":"DuplicateLayersButton","text":"Duplicate Layers","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-279":{"id":279,"type":"Group","parentId":275,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-280":{"id":280,"type":"StaticText","parentId":279,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Num","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-281":{"id":281,"type":"Slider","parentId":279,"style":{"enabled":true,"varName":"DuplicateLayersSlider","preferredSize":[130,0],"alignment":null,"helpTip":null}},"item-282":{"id":282,"type":"EditText","parentId":279,"style":{"enabled":true,"varName":"DuplicateLayersTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-287":{"id":287,"type":"Divider","parentId":275,"style":{"enabled":true,"varName":null}},"item-288":{"id":288,"type":"Group","parentId":261,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-289":{"id":289,"type":"Group","parentId":288,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-290":{"id":290,"type":"Image","parentId":289,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8VJREFUeNrMmG9IU1EUwN+ezzm33bmpqZul0/BFBP17wrCiZVQEGQQZpAntS1t+KWRCfShaYN8mfW6oWIykKMLWx8iFlJFO+4fmG+Xy/7+V+eZ029N1r/hkhU5rz94OXN7d3eO8H+ece865V4RBsVgsWvgwYMJLI2TxiJaAuliWnfX7/a5AIDD8v0mSkpI0UqmUIggiGf7cQyALISC73V7u8XgYoUyk1WpBRUXFfQhmwNECspCQQEjQ9xEHmi9CCeGylYTjwPlW3JKdZ+zLJR3ngVLzrzoIXoH26ixpclAynqLArn34aDUoVE7uv+KhPhtvUB1btlpaZ2ccVZOjrsh1g8FApaWlaVQqFSmTyUiJRELSOA4UYxNYYiCAZXz4BLh3yUSxET5ih0Lmv6radCNRpaT0yjy9pfhik1wuJ8VisQZuYRL6nw4Gg8M+n492u91N3d3dtNPpHG4+XmKZ0RXq66Z/mG/9mKCRriHtNiMv7jspA5QCx6mXp04wogQCbPd6D0l7aCZzfBLM0G7bau54kpXu2KVMUXNAvMZU6eiAAwatWszOG9WtbXT161ZT25yfQYG80bswakwha9xOT6We5ahtbS/8685jWya/U9BlHXGx+zgZSE91lXp6TRsKdaF/xHwlp2DRUhKRSONhQw7B3MdJl0LuCPmZ5cB9F5gbERyqQwnoxj/yVJQaNqLT6chYoHgvM4E3bxkcJtG4gSqSSMGDrM1P0dydW3A/LnZfQ0a2dT6M+eAUsFmZ5JAIX04LD30/TVXrDAFeLbW9321isTCz47kTe3X2NFMsDhdne3oLpxcWXILGVME3d3leeyfmDQZfVlZWWuMi0Dmpr6+vTUhIADU1Nea4gWqeC1sPNtgxDVCUeffsJAUL9MigXpzAcsm6Okn6sN78ZSGEYY6nwkH9tsvuNbos+VpAHj1iJns/m2iaZgRzX6TAs6UNNYRGo/FGT07BnZigXm/ON6M25FLfoBUlxljAbDbbzU0hlhrV76dQYo2mj4h2KsklEst6kyUj7eVn1IbyMy2xnuvn4KAPFGGwjycfifAWbp0OBX/rZIloDR60FDhWd69sHibE697xc3eZqWGu8/yb0wknyHWoxfaHF+jSsaFVO9mo7ts3+LUWZePHvulqBMRHxucSLAISNNA3pCCXyID5uBTw1nlG7sCV9K0JZWematNhuYhci6XzXE6sUfQR3P3QakpiOb+tmVhXuKdCdWAxptCFFbofEjKO0PcRB5rH5U2eaKkMILDLcOwWyFBTcLzHlu48fwkwAJL4uMMQn6DZAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-291":{"id":291,"type":"Button","parentId":289,"style":{"enabled":true,"varName":"StringerButton","text":"Stringer","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-292":{"id":292,"type":"Group","parentId":288,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-293":{"id":293,"type":"StaticText","parentId":519,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Points","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-295":{"id":295,"type":"EditText","parentId":519,"style":{"enabled":true,"varName":"StringerNumberTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"4","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-297":{"id":297,"type":"Checkbox","parentId":292,"style":{"enabled":true,"varName":"StringerBezierCheck","text":"Bezier","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-298":{"id":298,"type":"Divider","parentId":288,"style":{"enabled":true,"varName":null}},"item-299":{"id":299,"type":"Checkbox","parentId":292,"style":{"enabled":true,"varName":"StringerClosedCheck","text":"Closed","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-300":{"id":300,"type":"Group","parentId":261,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-301":{"id":301,"type":"Group","parentId":300,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-302":{"id":302,"type":"Image","parentId":301,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAplJREFUeNrsmD2IGkEUx1fdix8gfgQlp5FIIlpoYVCLFIK9XpfGIHhpcqBFIHd99vrDTuGu0UJyTSoTmzRaJaAnIQHtIsIZE2wUPDaaKGb/ixs2h3fuciZrsQ+WnTfjm/n55s3bxygIRiiKcjKvXUJ6KTAsHcUC6ON0Ov1B03RjMpn0/jeJWq226XS6AEmSWkZ9SMJDACoWi086nc5IKhc5nU59IpF4xYDtKtEBD0kJBMH64ECbhZJiy5YJx6EkNlBkKBlKhhIjqVTK1u12qcFgcNzv94+g/3Oo93fv7392uI44vdlsPpvP52f5fD4APZPJHNvt9phWq7VZLJYI9EgkoscY7GC/VqgzxwPqHrkVv61SRZaNA4z5fm232+1TjUaz02q1TqAnk0k3xmEHe8yzFihMtK0iY2h/GNOH3FYZDAZ2e3w+n9tsNrMeGY/H7Kcqm82+BVi9Xv/Gt8M8QsCUYoAefz9/g3Y6nY5hq9AOBoP7LpfLzbfL5XI9r9d7gjd02IkBU4oFgmBBeIItgAqFvVqt1uDGKpXKDuINDz/YxYCRYoFWid/vjxmNRjb4Q6EQYHt8sNd3HMQjje7lAowInn+hBHmq8+vnn3/u3LoVEHOcTSbTHrx3Zd3Em4+/zkoosTEgVITuwJUxdRMwpoq03SQkrj19QsCi0WicyeCj2Ww28ng8cWT1cDj8AmNcShAboyvz1GUwrp9JC6fD4bCB7G21WvXlcvmQqfUvuFRRKpUOuJQg9tCQQrYDE+Wt9r9q+Gq1OkJQX/ppdZn9O/riAO+n/a9VIeuRQuNE6ITrsJXrKRlKhpKhNh2K5O6HNgFmwUGznsKFFe6HpATC+uBAeyNv8hToXIA9RzUrkaOGzPOJWNx5/hZgACfZbPoXoSAQAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-303":{"id":303,"type":"Button","parentId":301,"style":{"enabled":true,"varName":"TextGreeblerButton","text":"Text Greebler","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-304":{"id":304,"type":"Group","parentId":300,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-305":{"id":305,"type":"StaticText","parentId":304,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Num","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-306":{"id":306,"type":"EditText","parentId":304,"style":{"enabled":true,"varName":"TextGreeblerInstancesTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-310":{"id":310,"type":"Divider","parentId":300,"style":{"enabled":true,"varName":null}},"item-311":{"id":311,"type":"Button","parentId":304,"style":{"enabled":true,"varName":"TextGreeblerUpperButton","text":"AZ","justify":"center","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-312":{"id":312,"type":"Button","parentId":304,"style":{"enabled":true,"varName":"TextGreeblerLowerButton","text":"az","justify":"center","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-313":{"id":313,"type":"Button","parentId":304,"style":{"enabled":true,"varName":"TextGreeblerNumberButton","text":"09","justify":"center","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-314":{"id":314,"type":"EditText","parentId":315,"style":{"enabled":true,"varName":"TextGreeblerInputTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":true,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[205,35],"alignment":null,"helpTip":null}},"item-315":{"id":315,"type":"Group","parentId":300,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[8,0,6,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-316":{"id":316,"type":"Group","parentId":39,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-317":{"id":317,"type":"Group","parentId":316,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-318":{"id":318,"type":"Image","parentId":317,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrMWF9MU1cYP5QiWLhNoIRA9yeNhAsszaJcJerDBntY9jBMQExTJaPdQyHRBLKS8AjEaCShyjJjgCxAFuZCdPhQnxd42UzlIkaWaQ0bGVqIA0p6SScGi+d35dQrXuSi/cNJTs93zj1/fvf7vt/33Z4UQkt7e7uFNg6S/DJIscykbAC6s7a29n84HBZXV1cDiUaSnp5uNhgMgl6v30u7B/TQEAANDQ2dnJmZkTBpenranZOTw0Pu6+vztLa2+uMNzGKxcHV1dVcpMAdAEWiIAUIBoMzAvBA6e57U/nW//djHRZJygyFp2XMu+F9MgeJ84DAajUQGpWay1A8/IFzTGXKvf9A7eeNGFMDXmZw7NzWVi4e2GA692sPJycmbeXl5IjFmkWtpKWNXFuajoL8ycNL7HNzZ2cm7XC435KWlJX9hYaFn8xxVUJWVld54+Q59WS7DJwqwBDHnq87RJZpp5su9/FLDafL80eMt5+gTCeh6/kdV1sWge8qU7QkEZv1P+kQpqaAA6EiGoe2Pp+GOWvGBlzhvvb+meJ7nrFZrARm/Rwz79pkrrCVzo6OjgYqKCjMNIVmUylwoFJKo866w8Y3wknXy99vFUUDzs9v6q2ZQAFRWVlYFUJnFvCDkmQgOF2jp6upqY/NaWlo62LhMmmDIdSDDUKAV0Ds5ejDy3B9O02sOC5/+NpZ154vP5q4ePfRA6xrNmoJZgsGg/1dbNVlcXAzQH3lclhWF9Vn7/fGqi/L6vx+uxBzU28rw8LBHp9NxkUhEisV+mkHBT1Df+NYYHBRR1cY3RDFuoMAm5rzMNDjY4XAIJpPJzHFcgSRJc3jGxjEHz2RktKi9lGZHp77Tu76+Po46MDAgMGpnZ2fz7CB2GFqwjxYXWuU4k7EO6yFjP7Y3ztmRpp7d8pEF+zfkS0J6H1uKCZn4U66hSEQc/vZU1CTQkHId67PW1v+zYNTpBCch9h+wT8cFEqA195efCCnhd2a+PYfLifmf+zBRg9PpFGtqanjEKTCQSK/8GSZTrmN91v544thNqin/xMSEd2RkxA9NUdPKGgovL2sHRTdp2CokbA4DkBEwlT6lnAMTYh3Wo48XpPVg3NmnxrCEsa+xsfFzyDQerfh8vkB3d/eW7GtubhbKy8vNNH7JDt7T0zOmlX2aQYE9NpvNHaWtTocvRpEB2uT0IgDZ7fZoTgQorWdpzn34CnhtIY3gm1mm7DMNKV8q5qDwWaLss5TCWAbaq7ExrmkG7AHL1NinDAesD3OhMg1NTU3NxRzUduz7zlLc5vF4vMr5cdfUTgtlK1dfXx8N2YhPSQF1KTdfYPL+olL+aMknbvyVQt0uYMYFFHIi/aPqiqYp3zgnSStk7/FqYqitTo75Sv99+Fpq6jz98p/wMyT3LXJcwn0KNzW0Nryzo+N+aBdcmDEcYTl44sIK90PJBITzgQPyrrzJS1HceTaByUlSFJhwl915vhBgAEbGVWZD5c2VAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-319":{"id":319,"type":"Button","parentId":317,"style":{"enabled":true,"varName":"GridMoveButton","text":"Grid Move","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-320":{"id":320,"type":"Group","parentId":316,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-321":{"id":321,"type":"StaticText","parentId":320,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Distance","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-322":{"id":322,"type":"EditText","parentId":320,"style":{"enabled":true,"varName":"GridMoveDistanceTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"100","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-323":{"id":323,"type":"Group","parentId":316,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,6,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-329":{"id":329,"type":"Divider","parentId":316,"style":{"enabled":true,"varName":null}},"item-330":{"id":330,"type":"RadioButton","parentId":323,"style":{"enabled":true,"varName":"GridMoveDirection2V","text":"2V","preferredSize":[45,0],"alignment":null,"helpTip":null,"checked":true}},"item-331":{"id":331,"type":"RadioButton","parentId":323,"style":{"enabled":true,"varName":"GridMoveDirection4","text":"4","preferredSize":[45,0],"alignment":null,"helpTip":null,"checked":false}},"item-332":{"id":332,"type":"RadioButton","parentId":323,"style":{"enabled":true,"varName":"GridMoveDirection8","text":"8","preferredSize":[45,0],"alignment":null,"helpTip":null,"checked":false}},"item-334":{"id":334,"type":"StaticText","parentId":320,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Mult","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-335":{"id":335,"type":"EditText","parentId":320,"style":{"enabled":true,"varName":"GridMoveMultiplierTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-338":{"id":338,"type":"Group","parentId":224,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[10,0,0,50],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-340":{"id":340,"type":"Group","parentId":338,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-341":{"id":341,"type":"Checkbox","parentId":340,"style":{"enabled":true,"varName":"UnifyGapCheck","text":"Unify Gap","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-342":{"id":342,"type":"Group","parentId":224,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-343":{"id":343,"type":"Group","parentId":342,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-345":{"id":345,"type":"Checkbox","parentId":343,"style":{"enabled":true,"varName":"UnifyGridCountCheck","text":"Unify Grid Count","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-346":{"id":346,"type":"Group","parentId":342,"style":{"enabled":true,"varName":null,"preferredSize":[null,0],"margins":[0,0,0,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-347":{"id":347,"type":"StaticText","parentId":346,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Col","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-349":{"id":349,"type":"EditText","parentId":346,"style":{"enabled":true,"varName":"GridCountColTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"2","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-351":{"id":351,"type":"StaticText","parentId":461,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Row","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-353":{"id":353,"type":"EditText","parentId":461,"style":{"enabled":true,"varName":"GridCountRowTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"2","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-358":{"id":358,"type":"RadioButton","parentId":323,"style":{"enabled":true,"varName":"GridMoveDirection2H","text":"2H","preferredSize":[45,0],"alignment":null,"helpTip":null,"checked":false}},"item-360":{"id":360,"type":"Group","parentId":261,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-361":{"id":361,"type":"Group","parentId":360,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-362":{"id":362,"type":"Image","parentId":361,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACH5JREFUeNrEmNuSHEcRhuvU3dM9syv5IIUwXIhDOHwJb8EVFzyB34BX0KPwBFxwxVsQREAQwQUoDLYVtgy2dk59qCq+v7pndlYGR8gs4QmVqrenJ/PrrKyszLSGz7Nnz54yfWi++8+vYXluF6DfX213D7/34jPDXL7N/MvWpGTsxBz5O2ZrYzImcc1tqznr0Xwh1S6T1WXOjtk5hs3Zc+1tNt6ZHJidXR6/2azNp08ea/6SP38WZCEB/fK3vzP1MJyAJpQfU8591mzMwPVQZr7LZWTN3AZwBj0BOYgKjDU2MAc3j5ovas3cW3HdcL3S9/rRUNfmN7/4+UPAPiw3ZCEBFWsAEXMWyCGZzLXpuWbkHs1jNHnkmTGZxXrZnCx2spSdgYpFZJ3KG1txo3LZCKThZsP1iuvWWyuwFfq9OG5+8sOZcsOSIXVAw14wKN6jsYBNBTD3ETDuDYJKgsp5WsC+DpXLknmsIQsBVUbtTQbKNsFYgDJApuelOp4ZgevgqCWjQCWLBXK+QfEOiH1cwLhmNkeBsVaA5WFixNliEzSLj+V0C2WLD2EZ77MNKK6AqLmuWcuGsULXKliL5W3HC49cj/hfhOP6DBV5YMLfUL47gaF8PwIlsBEwrnsN7msGykyTBJkClmdXhGgeHkUe64TKWkE1zE2leQZq5Z8oH9k8iMvaRAmO5hJqQMENCgW0A2LHk/thHodlHLF1j+f1fU6jwHCuid/EqB3Ix/IBxALhKzsDNdZVNTANCmv8h9HW84YZscx0AuKVBHV9sXxWy7IdBZTNdshph/IdEPujRsqHQ04axz1gh5SGA1DHnCaeEVTCx9j/BcoB4FfWhRao1rm6A6i1bsVo2Xb4pR0Valg+gJyWPyuAiOPSUuMJCCswssYOiB0Qu11Kh21K+1c5Hr9K6fhVjAPzwN8T9wWW5FQsmwHIbZwL19aHBwA98L5mXvH3auPysDZuQN+UrJMPpXnzurL64rgDhU/ti4UAwjpbgLYo3N4A82WKu3+muP88xsOLOB4/nqb+sziNfBflEK8HT5bNXjnnH/tQfT+E5omvVo98at/Onpf3U3QuZical235DTZif3wNqvgQYFoyWUhAWGMLzA6A3T+mcffXcdg/n8Yey6X/dk4IkBfLX8Q4aXzE80/D1P+oqscfhCpOWmpj5t87bQpXVt0R8e9AwTmNxZnTQT7Eku1loX8B9GKats+nYfunod99Mo1DesPDTC/w56E/8IJx0DLjQOwEM4cN7dAMUAreuCCOC0sZQfUDAfMoZ8aHXuW0fxmn/d+x0B+HfgvQmL/lKasX+ZgXUpAlult2pmOJfZVsqBxxLPs6mFyL49JSMmuJQywfOwxnTvEoH/rbNOw//R+ALpdVcq6d2+NvoXOuYnfWK4Jqk3MzKZjCYZYNox+kSXGHaA2UtvvwKiU5c//R+OZL9k0WkzzJlXzpkT7plf68+JpbLJV0bPDFRHyaiEMjjj5iqWGfU7rPhEnyJFfypWdY9JZjS0H0BGWWHRGLxUzkwcgOjCxhzPecxUme5Eq+9EhfvN2R6XL5jFkOVjmjLhR/hrsh6N4+kiv5cyjXyOec7NJSF0njPBNCjLf/n5xXct2sxr6u9wx1Ssx4UCc7W9bq/HJtyULu/yO5kl8tB7j0LomhvYRyxA9PfOB0t4EfhDVb9h3nK9KMe7WX5Emu5EuP9EmvX8BuoTjguRP4QVXrZCd+EEuqxyHUCAj3CSV5knu1xCnpk17pF8cZinzZKTvkgVp5D4Gt0cn+yIUVZ9bqvpZRciRPciVfepY8q5Z+cZwjukqekhlm26xIxDrrhmvnx0chT8dcRY4enV/Krb71bkSu/aCu26eh6h4F3yG/Rc9K+qolMxXHGcrnrHVtISbNtRMhn+FidD7FMMcOOeVfhuFAGhPfFOih8/59gH4c6vV7oVqzhOsr6zqSv26lTJQh/eK4tVQullLeTIVC8uXmKmUOYVps48gYPcKr5+N4+CSOg07/bzKbdgfO7N7zVf20qlryqpb8qnvbhfVD59b41Jrl60iXO6A66Xf5rqUqbnb5XDLNq6st6sqJHpTeVlfW1498aL6IVf+So+IlOR7HRSqBUOVwyQCsJfP07+LQ75J1vsPzWGb1lvctftQC021sAVojc4NPrReoThwXUKUMWisFPAV4Fbm4t6M08qx5hZlrhDVvZd8/8b7fEpRJcfA5zktisyoavUfNa/CssoCwgXHjfKPfrV3x1Zb7LbtOFloLaIFaS784bqFSriFdz0VSsfxcTLIpScIqylvSC0fyn45X2Q1H5wdVNMN8gMcl0Z5/yNtQvfi6xDtXXqZRirI4dTP7EFCzdRagjfSL4xaKBIuLjVGNlPW/gFTdsgEsUOQ7NXlWayyJIKlGGY7yykxxLhpuoRSIidZhrvk0SqjRDlOJVc27ra0KlOkA6kIBM2tx3LEUX1yZUvuTL88NCQW0OlD/Y9NjpYJVxaidK+TpXCGXgrQcrPZcjCKDF0PhuUIOpRhVhWxLMcq9lg3UEsk7npG1ujuWwusb3u66tGlkJdaWWcGs9qXUtj3W6uMMNpYyXztVheTSSzhBnc/RpULWy5WIXRobtimzmcH83ODQ3PH8WhxnqN1mzdln1qybQr02UM3S1WpGUDQeY2lwWDLQPJCIjeq+FAuRvuaLPOh0yNuzTxaLVQJz6idYNTnmFhDXK+4VMIDU5GjgkAc8KFBqWA2sfD0MqwJmTJ3UtrGmdFzYgeTPKrULmLotpK4Cyud4lu82zNSbKk2yGcrO/anSozKl8+LmHtXq1KNSf0ocRcB/6uQtXbx46uItc0pLN2/+3p5gsrloBZ27eKUlVDp5muWnfm4RlS7eqZsncPt6J89e9Dx/xfjpd9TrFMwfTj3PfwswAACRogG+3JY5AAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-363":{"id":363,"type":"Button","parentId":361,"style":{"enabled":true,"varName":"VignetteButton","text":"Vignette","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-364":{"id":364,"type":"Divider","parentId":360,"style":{"enabled":true,"varName":null}},"item-383":{"id":383,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-384":{"id":384,"type":"Group","parentId":383,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-385":{"id":385,"type":"Image","parentId":384,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMtJREFUeNrkWF9IW1cYv/lnou46nQpL2EB8uLDEB0tg4FPiXlqoQTIqtp3MvpiCQgu2dsIecvNQEKwBiwqtDy7DCZkDsfpcsydhcJkD09IwxKdkoGPijZoYY3Z+d570er2p+Wct7IPLufc733e/3/3O+f6cq2EI8TzfRIY7zOXTDwTLpuYE0O9HR0cH+/v7QjKZjL5vJEaj0VJVVWXX6/WV5PGKHh4CoNnZ2dubm5viZbmoqamJ7enpmSPA7mjBgIdKBdTb22svRR/2gQP3Eij5ktlsNovb/fUtpZLD4bBMTU2tjI+PzynnRkZG+La2tmcYlXOQhx70lXNXr15zEsp+DMWhz7XGub5Ip9OxKryP5ON58pQqKgyqc9jo/NbWlnlycvJ5sa7nOI4lnuJWV1cjhIreBgMDA57GxsaYvhybFEDIJZRr02uZD5DKBqq/v99yYaAQJWqRYrfb2Z+DQc+PgcCpyCTRw8bj8TmyJ19gxLN8HvLQg36+ts6A6u7u/gmXkn//3r2O5uZmj9VqfcB7vdkw9nq9zurqag73GEdHRzvoHOQgDz3o52vrDKhUKhU7Pj6OK/nb29sxjOl0Wgy/ehWTJb1TZWl9fT1C7yEHebm+nGAH9kpKCV1dXZaNjQ2xIvya+aqy2vz4ny0JwMrKiqu1tbVjbW1tub29fQm87+sauZcHe7FD2xcM8RQ7Pz8fvZCUQF8Mg/0ffzJ3xWjy4bn+2z7HXxoNU5/JOH759HNJts1U5SXD7ceCEBEEoaDcVVSegocACIbTTEb8LXHgr9fpzX+nj2JfmioHdYyGXU3s+6gnLywlIKqwTIuLi07KAyAAABDOUOGhgMCnMpCHnjIqC/IUiipq2PT0tE9eMhYWFp7U1tZKURcOh5+nr3Vy8BAFItW5E0Dgcwajg8iZSfR5MIc9V1dXd1demvr6+rwkEOLDw8N8Tk+h/SCGO1iWdaKWyecoIJDFYrEbNBoWS0YBZQsw8x8f85BT05f2HHk/7MCesu05BSoQCAg7OzvLoiiGUFzlc4SfrW3RaFRIZTIi9pB8qeiSgo95yKnpg/B+2IE92H3n8ildScntdj9Eotzd3RU7OztDJMpc8j0kH8HHEt6w2ZbInorU1NSwPp8vpCziQ0NDD0uKvlAoJJJrSblUuaKPyuADCo2+olIC8hTSAcJe2rRkU0t7TKuTANI8ReTeFJMWCgJFM/rL8OuYlBjfZnTmJKP/euNtRn+DjI5CnG9Gz5mn0FNPTEwsKfn+sTHnd48evZgi3cBnrussBTQzM2MnOciL6MKIZ5pgIQd56EFf+U7YUev5z4AyGAxmrVZ7ptduaGgw057bZrWaKb+lpYVTHJWyrQjkaI9O9U8ZJ3Zg79zlCwaD36i5dPzp02XyxWwikRB5ny8bwiSClgm50Lbs7e1F5FEGObJ0YyaTiYV+vrbKcnCgnSc5SpV0uqZdQtna4VIB/T8ODiiuqF8YLwQUju03b956kOvYrpYuUO1xbMeoFva5ju0uQji65+Wpd/0Ooj23gheXj+fJUzo8TInJZEJUjT5SZO1+v58v9a+LstoXSoODgzwp3n9KnsIPK/wfKuWFpQKCfeCgnvrg/uRpZP8876NrvaQssEOuP+g/z38FGABrLqRWfA6XKQAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-386":{"id":386,"type":"Button","parentId":384,"style":{"enabled":true,"varName":"ProximityReOrderButton","text":"Proximity Re-Order","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-387":{"id":387,"type":"Divider","parentId":383,"style":{"enabled":true,"varName":null}},"item-388":{"id":388,"type":"Group","parentId":383,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,43],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-389":{"id":389,"type":"IconButton","parentId":388,"style":{"enabled":true,"varName":"ProximityReOrderTargetButton","text":"Create Target Point","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBJREFUeNpiYKAyYAQR9fX1/UCqgEKzJjQ2NhYyAg1LAHLmP3v2rPfVq1e3yDFJTExMTUpKqhjITGQBEgo/fvw4O3v27OW4NPSLSBiD6MI3L87iUHK2vLzcgYODQ4GFGBcYsHMawzQSUstE7UghaGC1oKiaBDOLMQiD2BQZeEZWuSGdX3AmCyMDLwiD2CAxsgzcL62Yxs/EpBb+4onfkz9/DoAwiA0SA8mRbKACC6vvlq+fe4//+PYZJgZig8RAcrj0ocTyUwX1M8j8MB7+mUCMLJ+GTa30g5smWA1Elrgvr7Z5w9dPDaC0B/Oi49P7s0BpMoCbr0Hx4S1fkrz84M/vzT7cvMWWHFy8MDEQGyQGkiPKy8gA5BpgjEqtlJDZ9PP//+cgMSA78tXfvwdBcmQlG5PHdxtmfnyf/uc/w2cQBrFBYvj0EMx6re9f33Lh4jkLY9M96xFVOFz4+f0sKQY+ABY7xqmpqZG4ysMDUNqfgcEYV3kIMgPInEL1EhsgwAB27qJ7UmUp5AAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-390":{"id":390,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-391":{"id":391,"type":"Group","parentId":390,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-392":{"id":392,"type":"Image","parentId":391,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdRJREFUeNrsmL9qwlAUxq8x9Fb7ByzcgoHSTB3sYNu8gENHO+pQHJzs2KEv4Av0BVwqRTp0jQ/gmuFSOtShQ0mlRGiGlgr5h0PvkQyiEC2UkwgeCIkX4f74vuN3zUkRUc1mUxW3Oom/2oLFTIVAT+Px2HUch/u+b2GTUEqVbDarybKcER9PZVAIgDqdzqVpmqO4JFJVdadWqz0IsLoEC6BQnEBQsD9wwDMoRaYtu2WKVqSbGhbMs+/xG9vi0xzy7JcA6GiDNhBFaomLTy/MQd3/fHWLNMPxlHKHs2tzUPxAIQPG0GRyXXebGEY0VKFwXM7lcmj2BUHADcO4ioSy7U8e+oxSnreEfb1ej882HnbNQVUq1Qa2fe32XbR9IGcQbHE8+7zXhUrpouCWKPselcOLwgYtYwH0A79btd71SKg9KZ3fldJox4zYjy9UKpGJPjgr5l22r+E1uoDSdSsSigkg3EiY/NL11Ut027aHmIkuDuTRQqhEHsjrRF8n+n8n+vnHWwszEpayr1QqaQw50cM+XrFE7/dfuoyxWMNTIgms9SvWnw5kmA8l4RUr5HAmPQUDK5gPxdlHsD9wwHMiJ3kpWAzBrsV1EpNQ3/B3nYQzz18BBgDW8Qt64itrtAAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-393":{"id":393,"type":"Button","parentId":391,"style":{"enabled":true,"varName":"ZebraSelectButton","text":"Zebra Deselect","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-394":{"id":394,"type":"Group","parentId":390,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-395":{"id":395,"type":"StaticText","parentId":394,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Layers to skip","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-396":{"id":396,"type":"EditText","parentId":394,"style":{"enabled":true,"varName":"ZebraSelectTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-399":{"id":399,"type":"Divider","parentId":390,"style":{"enabled":true,"varName":null}},"item-401":{"id":401,"type":"Group","parentId":39,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-402":{"id":402,"type":"Group","parentId":401,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-403":{"id":403,"type":"Image","parentId":402,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZJREFUeNrMmE9M03AUx9etXfeHbbIBYwvBXcCTBjO9kRgD4SBKIiTGLBiJCUYOwlnxwAX1RqKJHlCUSBZjjEYDFwLqgUQTsviHk3iwAg432Mba/eufbf4eGWZZOtYCs3tJ0/b1z+/T916/v5cfpkI2MjLiQrs+lfL2FLFQWA7osyAIyUQi4WNZ1v+/SUiSdBoMBjeO43p0ehyHCAHQ1NSUh6IoRqkQuVwuU29vrxeB9anBARFSEggMxgcOON6GUiJlYrbDgYtdHKupd7eQenfRaqQj05PMVtk+RBQKgJoJ7dViD7WQOt8koyoblLpcLx6rcbhf1jeecxFabUVAdRnNNhRNt02jcYzXOj2Dh2wuRaEgMtcs1o5/9YFh2vNGc8dwdW2zYlBdRpNTj2GmfB+dyYRGIxvLikHd2wpRr+P0rJDNcnAO+8d05IPiNQVg/Rt+77ogUIts0vc2Tof2LQmgQ/DbF3voRYwumQqK5zhPYHX2wHQKhLGcOqSYTuXbab3RUlFQN5AU3LXZB8brnK0VAQUROmuo6oTjY1pd6xtHY08TodUpBgWDI8HsQeJJ7vjqNXjTQ6TwF6ss9n1BOXGCOGM0WS+bq51yoEZt9jaTWl1X6AffdYvVc9tmPyrr7wMQJAmmIwRpMavVujz/hl/g+VJAMOBhnCg+KIpem97Y+czeYL8UWJuTFCn0Qt1JUm/PB8q1LKZSQJAaGFBKNFF7dGLO6bpSWGeiUB9TCYbPZtOFfohcqTqC1MhJM5onLZJr6ndaiBX6IHKQ2qLTS42jO7+wpdj9aNj7g+dSkqCWOZYp0nWKphDVR7tVo2mUA/QplZx/HosGJEdKTgpBIKE+5AD9Eviloc31RdmSIDWF6DeXlTImkwkOhwLze9IpqSm8GQosoUnci3onthQQ3POIjswU1pFkKDkpfBANr9wKBycgCru9czoRmxGrI1mKXphC1NqmvvNsVOze98l4tN1PTUC9iF3/xqUW7khoi/FSN6zyXLwKUxM/BY75wqYYKYp+4c/qDFL1lVM6Q/uORITT6ZX+oH9hz01evr1DXw+b3AkZ6gype3DAYu2G88HN9Vf76jwPyqB2fGzySQNOkLsVtigUrA+VCwxgpALlOBLbhQ4LVrA+pOSKC4wPHHBckSt5GDhzYEOgiwoFagttX1W5Nc+/AgwAwWmGw788ln8AAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-404":{"id":404,"type":"Button","parentId":402,"style":{"enabled":true,"varName":"RandomizerButton","text":"Randomizer","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-405":{"id":405,"type":"Group","parentId":401,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-407":{"id":407,"type":"EditText","parentId":463,"style":{"enabled":true,"varName":"RandomizerScaleMinTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-408":{"id":408,"type":"Divider","parentId":401,"style":{"enabled":true,"varName":null}},"item-409":{"id":409,"type":"Checkbox","parentId":405,"style":{"enabled":true,"varName":"RandomizerScaleCheck","text":"Sca","preferredSize":[44,0],"alignment":null,"helpTip":null,"checked":true}},"item-410":{"id":410,"type":"StaticText","parentId":463,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Min","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-411":{"id":411,"type":"StaticText","parentId":463,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Max","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-412":{"id":412,"type":"EditText","parentId":463,"style":{"enabled":true,"varName":"RandomizerScaleMaxTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"100","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-413":{"id":413,"type":"Group","parentId":401,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-414":{"id":414,"type":"Checkbox","parentId":413,"style":{"enabled":true,"varName":"RandomizerRotationCheck","text":"Rot","preferredSize":[44,0],"alignment":null,"helpTip":null}},"item-415":{"id":415,"type":"StaticText","parentId":464,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Min","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-416":{"id":416,"type":"EditText","parentId":464,"style":{"enabled":true,"varName":"RandomizerRotationMinTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-417":{"id":417,"type":"StaticText","parentId":464,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Max","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-418":{"id":418,"type":"EditText","parentId":464,"style":{"enabled":true,"varName":"RandomizerRotationMaxTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"360","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-419":{"id":419,"type":"Group","parentId":401,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-420":{"id":420,"type":"Checkbox","parentId":419,"style":{"enabled":true,"varName":"RandomizerOpacityCheck","text":"Opa","preferredSize":[44,0],"alignment":null,"helpTip":null}},"item-421":{"id":421,"type":"StaticText","parentId":465,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Min","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-422":{"id":422,"type":"EditText","parentId":465,"style":{"enabled":true,"varName":"RandomizerOpacityMinTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-423":{"id":423,"type":"StaticText","parentId":465,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Max","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-424":{"id":424,"type":"EditText","parentId":465,"style":{"enabled":true,"varName":"RandomizerOpacityMaxTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"100","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-425":{"id":425,"type":"Checkbox","parentId":463,"style":{"enabled":true,"varName":"RandomizerScaleLinkCheck","text":"","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-426":{"id":426,"type":"StaticText","parentId":125,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"X","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-427":{"id":427,"type":"StaticText","parentId":125,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Y","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-428":{"id":428,"type":"StaticText","parentId":125,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Z","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-429":{"id":429,"type":"Group","parentId":261,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-430":{"id":430,"type":"Group","parentId":429,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-431":{"id":431,"type":"Image","parentId":430,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7ZJREFUeNrMmF9IU1Ecx4/j6tR0lBS2uYdRMrI/VFuiL8FglRAtaCGR+CARWzAyYRJEQgZSES3689LuS0Xii7GX7UXLWtCDs7aowGz9G2Yb6GrS5ua1UZ3fbfd22+b+3nX9weGec+527uf+vr/zO/ecMoStv79fgS9dSHi7g1l8ZQmgF/F4PBaNRt0URfn/N4lYLJZVV1erCYKows2dBHgIgAYHBzt8Pl9YKBcpFIrazs7OIQzWJYIO8JCQQGDwfOCAOngKcSWzWq3PCx3YaDTuKgaM4SDS3TQYDHkPSJJkxvs4dg1SqfSfgQOBAIn7U/5IFPJGP7+H0fzARbq+uu8MEklqs/4HgEZGRjpsNpsX2nq9XtnW1jYE75MXlGt8HBdXSr9mwo3WuP6qXHf5Qk4vwwAxdQyV9ncitAIto6daWlvpQrmeofKmTaxMyfLlaiAZV76CoMCCJ06i2IMxGqjebkOEvIGu5yoZN6ghhriSQV/eUDeuXUeHMBDjnb7dGnT/V5y9393Tg8upnKASs4wsWj54YHDqPeupAeypS9hTgsYU2NpbN9GPN1NoaXIKfTt9FlW2NiNJt0k4KG5KOHx3iJaQck0g5+dp5GuQ4UnQQk+EdIFcUk/lY1qt1oILCoVCTo/HY2cAH8o3GJQV4rTLhHeJIvfMfCTzTglgsS1bUfj2PVq+g8vIZzKZdOAtlUql4wIujT6uRTN+/j1VtVdLl1yyNi4WXLUwgJ+O6NXBhSiqf/cBNbyeRJLZufyhsi2uy5nZbNZZLBZ7MiCWL7xeLjd82bYZefQ6pLLZM4IRmT4/YGXn5JisQEql8hy+Ii4YYwAhGXuCmnDJZrytfQDi9XrPJ8B0xYzF64LMFxjBd+IDMJCQK2ViypOCeIovj5Xse6oYsBT5LOtk6u3iSjXUZ2eDaiYjw/Ulteg2z/ndhUhpPXZcuXH0UcqOKd2YKVAAxCwJosgC3ddYIVYzKQwXdgCNRiNrb2+34r2alOnDe8jA8PCw0el0+hkwAEItzUdXfQ3RyTM5LXLHLDrQMdSBWCz2tre3l5XnCjbox1BsYIOHAOjV/n10Ow0Yv7MvEol4M7UZY0AAjFik6CWnIKjGp+O8Bj+AAVDd9ExpZ19NTY0yUzvZwEPlFFU6+XDcOCDQuVt9CHSHw3GV1488mKLLZd/EPS6UH5esOSifMVkoOB9iV/s/OcPNZyzlOmaCI0rHFBxYwfmQkLtieD5wQH1FnuSVcc48YVe5QyBHzUN4MWeevwUYAGEN7fIkFeIiAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-432":{"id":432,"type":"Button","parentId":430,"style":{"enabled":true,"varName":"PropertyManagerButton","text":"Property Manager","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-433":{"id":433,"type":"Divider","parentId":429,"style":{"enabled":true,"varName":null}},"item-434":{"id":434,"type":"Group","parentId":261,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-435":{"id":435,"type":"Group","parentId":434,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-436":{"id":436,"type":"Image","parentId":435,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwNJREFUeNrsmD9oGlEcx0/vSjR4pWIFY0mwQxziUjlwDQWnULfGoThkilPo0LGLLXTsJAjJ1CFkSCDLBV0CbRehgcN2MKU3WKE0EVQsVWyMmvR9j3vF6Pknjedl8AeP93xPfJ/3+/N955kYYrFYzEO6NcZ4e0dY8iYVKNNqtf7U63Wp0WicTJpkZmbGPTs7K3AcZyUf/Rw8BKDt7e1n+Xy+apSLPB4PH4lEdgjYmhkT8JCRQDDsDw6MFSgjQqZllMPM3EKbQo1qXPfES7vTG+HvvZgUQPb87OBp4Yc4EOo+y/J3zWZBbp5v6S4D3J2Qg+XmhnqK2uOf33WH+rqwKIwUvk7b3NwM2e32npOEw+GtieZUp83Pzwu1Wu2KhjmdTs3TketKWFpaEsYBPRBqZWUlRserq6tu0p4kEolXWt+lQIDe3d1dJx72EoU+JYJYJXcbf3h4KMbjcXmskuDz+eawIXqt9ePjY+WKKBaLSl+pVGQAqUpdLRQKtbF4qis82Cw6ZF3qF1J4mbR/a3t7ewfMp8/6iCeKAQ1jhA0gWiGFJ5FraBj38/i1PAXb2NjwOhwOvrsYms2mEiabzeYmIAz1GDYHGEKKnkALVzw1DqhgMBjKZDIfAoFAqFQqfaPzSGL0R0dHYjabPR0U0k57vbB4cyiSrDJObLVa5ywWywlOS/KEp1WlQuirU90WjUbFTlFF8naup9NpkWVZW7lc/gh9Qy4hdNfVLe5/TkLhtB7S8LyN0OZyOXl5eVmgUqE7VD/b399/21kIEFqXy2VDgYwqnAOhUNpIaBoGOk/FkRoqjiq/1sbJZJKuxcbiKRoGAucGHAC6w+H3+/lBv5FKpXbGFj5RFOVQSNFEpdTV6Z78oHLQz64TtqFQkiRVSZMYA6wv1PsHD9f13txiMrm1vN8DVWq3q78vLiQXywl6Q51dXp6U263ToVBvKkWZtOj0L9YU6ibVh/vqNsCoHHXFU3hhhfdDRgJhf3BgfCvf5JnUyxdgz0l7ZJCjfpH2hVHfef4VYABpN3jBgpp6AwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-437":{"id":437,"type":"Button","parentId":435,"style":{"enabled":true,"varName":"GlitchMatteButton","text":"Glitch Matte","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-438":{"id":438,"type":"Divider","parentId":434,"style":{"enabled":true,"varName":null}},"item-439":{"id":439,"type":"Group","parentId":261,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-440":{"id":440,"type":"Group","parentId":439,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-441":{"id":441,"type":"Image","parentId":440,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABGVJREFUeNrMmE1Mo0UYxwdavlMqAjVtMSkhIBQT0Qa6N+HEge6BLh4gPcBlN0HjXghEY0I3LrqgB3fNkl0PdhUsBggeqIbERDjaNW/EBLpLEwOJpVUSQqF8BOTD5z92ugUpYcnL+zrJm5l3Ou38+jzP/OeZSWNU3G63hap2pn55RCxLaXGgX/f393e2t7el3d3dsNIkWVlZptzcXJtWq82h19e1sBCAhoeH25aWlmJqmchisehcLpeXwNrT0QELqQmEgvnBgTaHUsJl9fX1urW1tYfz8/PXU40RHOlKWWJmZiYWDoclq9V6fXNz0wvIVGMVgers7DShrq6u/mJgYKANbZ/P9zAVmCJQfX19vbSYpuG6np6eoMPhuJGdnW0cHR3tVQ2qubm5a2FhYQSuC4VCbrhyaGioq7i4uN7j8dhUgQIEXEf1LbPZ7ABIR0eHtLW1Fayrq/sPlFbOyZ1OZ0V+fr4urjt8spycHJPf7/dOTEwEGxoaJmkFOpqamlrpI6m7u7srEAjELgyFCUtLS1/R6XRGvOv1ej6pRqPRkSJXoE2f8QelsLCQZWZmQn/YysoK9CcoXElu5IMGBwdPlaJzQ9nt9raysjIHWYCdBDAajWd+d25uzpjsSjxnjT831M7OThhANpvtzHHR23dYzPM1y6iqZAbvVxcKg+eKqb29vUT7SSDANjY2eNv/s5/Xy6EQe+e773n77ydP+aMr0CdcLTsUxYa0urr6LMf40sNoefN2ldXKKMCprmIZT3/nMDzezCam06RfrqWSS/+nn5zaf9jyFocCkLbEzFgkwhfD8/z2uf8GuSpG5XjfvfvsjzIr+9PhZIcbMe7OXwLzbPbogP3FjhKLQKxO2S0FnWlsbHz2Pj7Oau/eT8TP+6+9wcaP9pn9yhXed63lGnO2tFx+oB+TCJo8w17Hdv2P+fuHP0yyO7TiTiuQDugc/pjsUJTvBCORSAVcYi4pYYcPPk8E9Xrcavqbb3M5OAkllF52qIODg1hSjHFZQHnp0TDT/PhTQioemAyshKBTLQbZ3Ydgh6WgSfc+u8v7XOEV9mr885dJFt5td3GJEAVbTnwvlGSHWl9flwjKJrTpm29H/pUBWnnR2x/z9gsfvMcsJzyFPVCRQD+mKwTx4sBHvE0xx9jWJreokBBsysgWZIGanp6+OjY2JondnCaJYAKx5QiFTwbAYhCxB8uK7y0uLi7IAlVTU+MoLy+3EZQb7/hhg8Hgo10/LLYeIaznXe4XgoJ1aGIjMsXZ2VkfJfe91CchQcPE9LgvO1M9dZtBLo2UFSDLy8scDLm1OJUoDgWQaDQqtba2unEEIr1Bon+rqKgIefWbqkCJlJWORLGpqSlvf39/BUDpSHS1trZ2RDUopKs4myHbpOTeC9cBTqnTdPpZx6KCgoIbcF1eXp6xsrLSpBSUVtwPpRoA11E1qdQ9FS6BuKVwYYX7ITWvgjA/OND+X97kpSXded6EiKtkqCg9v4k7z38EGAD3dxTPUpmIVgAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-442":{"id":442,"type":"Button","parentId":440,"style":{"enabled":true,"varName":"WiggleManagerButton","text":"Wiggle Manager","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-443":{"id":443,"type":"Divider","parentId":439,"style":{"enabled":true,"varName":null}},"item-444":{"id":444,"type":"Group","parentId":316,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-449":{"id":449,"type":"Checkbox","parentId":444,"style":{"enabled":true,"varName":"GridMoveAllowStatisCheck","text":"Allow Stasis","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-450":{"id":450,"type":"Tab","parentId":37,"style":{"enabled":true,"varName":null,"text":"About","orientation":"column","spacing":10,"alignChildren":["left","top"]},"collapsed":true},"item-451":{"id":451,"type":"Button","parentId":450,"style":{"enabled":true,"varName":"YouTubeButton","text":"www.youtube.com/@Anti-StaticTV","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-452":{"id":452,"type":"Image","parentId":450,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAByCAYAAACSqi6KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACq5JREFUeNrsnT1sHMcZhucUJhUPSGkCFhAE4TUpEjFFOtKFDSRkEIQV2YSN6YZEArqRAINMEQoI5MZKITaWG6YhGwsIQCFIE9w1UgqfkJY0EFeheqowEiWXfVccem9udm9/bvd+9nmAg6TT8m5vefPsN998M9N4+/btHxtjvmsAAAoyFzw+CR7vcCkAoCi3uAQAgFAAAKEAAEIBAEAoAIBQAAChAABCAQBAKACAUAAAoQAAIBQAQCgAgFAAAKEAACAUAEAoAIBQAAAQCgAgFABAKACAUAAAEAoAjJ+5st9gbW3NLCws1P5Cn52dmcvLS75xgFAKCWV11SwtLdX+Qne7XYQCdHkAACYmQony6tUrc35+XosL22w2zeLiIt8wQChlIZns7O7W4sKqm3f06BHfMKDLAwAw8RFKFlqB6+ZTHNc1/4uNEHwoMepLjmokKm40SglV73t4fBx3PgAIZUysmW+Z3zW+PfS4M/Nf0+0NNuCD/f1wuNpFOZydnR3j6qS1uGiOjo7M/PygwjTc6xOKzk/n6fLT3td8q4AuzzTK5Pe9/2SWyfnFRSaZHN6/n1omAAgFmSATgFkTCjIBQCjIBAAmRyjIBAChVCoT8UWO0RxkAlAtYxs2XskgE9uwTe9NpFJXmajy1q2v0eddX183V8GfPp4/ezbw3L1790y70+l7bnt722y//37fcxouV2Wz7zXSkPTzej6uvgeIUDLTajQy/4xt4HWUiYrufMV6+kzLKyuZXuvg4CC8JgAzl0PJysFBPbs5mxsbuf7Ph67FgwcPTHN+nhYA9RVKb/+eMas/q51M1PB9ErVoVnPWNWcU8UgqADORQ0lCeRK3UU+KTK7Mm/k6KxW6WF2a+SHRhBayypqTkIQ+3Nsznzx8mHjc488+65fRW295Becex4JSCGUiCIeHG+amccfJJLCJOdn9TaUy2en926w0blUqFDdZ6hVK0MDVoLM24o2gu+RevwFRPH48ICKvUJzjAKFMnFRW9z+KlUlj90PzwcVX5jIQgR39KVsm5xVHJ2q87ixoO2Pa7eaEUsnRqBWljGPERZ8rqSunz6jfGSCUkUllNUEm5uLLGyFoSPli8fuly6RqfAnXTqcTRhWuUHRsHqGEI0XLy2MRSlL0JckhlOli+hZYcmQSFcPR2i9nSiZqcL6GfnJ6ajrtdpg/csWQdMf/5hK+4psPCCVOJpbmHx8Z8/QvMyGTuOhE3QCJZrHV8q7Pm2YI+fDwkIQp1K/L495Vu7u/NSsX/0w8rnH/gXo/Yd5lmmUSN1QsmSStVWuHkJNyIqqqVbVsXPewst/p1VXieV4MSRYDQsktEzs0nEYGksoX3Rfm8OzPUykTkWaoOI40Q8i6lhouVtXxuNA51GXRcro8EygToUStHdFJ4idP/zogjmmRiUgzVBwrlJS7NSqCOz09pRVAfSKUX29tDfT3T37wPbPW+uFAvsQXjdgJhUVk0rruRpxU1Ph8Q8VWAJcvX6aST9ohZEUpeSptAaZSKK5MbJ1JL+gOhNMLU0jlF4FIloYEY0ky0fudVHgnV5fFF6n58kFiZXl5YFMxvUbaIWSbT2FjMqhFDsVt3Da3oAraNFIpKpMqE5dKxio6cXMgHWe5gSgSx4ZndCcuOatkaN/nl6wOD83e3l7f83FJ0WHJVJc05wAIZawysUgqLzWU+uIfuV53kmRiG3fWRKXWNmnHCGcnZcPPkiDNmkwl8Vofbk2zTGxe4Vfdv6dK1E66TAAQyphlYvMKaUd/kAlAjYWSZW6OpHL5pqxtKKfmdSaZ0OcHmAGhZJ2bs2DSLS25beb6hpGHRUIn1GsADGVu2k54lCutFZmlDABTLpQylm3Uz15lnKUMAFMulDLXgNUs5V5zvm8hp0mRibpiqnpVTYktPFORm2Yaq05ENR52yFjHurUkqa/v06d9a4+oFsY3z0el+u4QddJkxSQurucT+X7+YfC8byW5cLW41VXTarVuroeKH8O1U4LPwNYcCKVUmaRdAzbNLOWq0UpqvoI1RVNqWHro/9Wg1ABVw5K3hL774kXfv7UMgu+1ms3mgFCKlu17twcJ3ieKFZzvWLvymx4Siip/r1jzZSxMfFJWd8SiSxDcDR5phpQlle79P3jfr+p9bOJk4iNsbAcHqSYEpiVuoSZFBVVfC73fn46PU4lLxzx58oQtQhCKH9+K7Hkm+hWZpaw7Y9bNtIogMWxk3GtH12lUiyZJJkl1OFnPrVB3NDiPrHVBdt8hoMszlCKzhvPMUra7FLpbRJRJ3J3YhvLhLoJ37txEEeqi6aE7uZtD0LFu5GJzMFGiMhq26pve13axwu6S857qFvkmGrrHpVlASVukxsnEvp5ve1Z14SQjuj4IpRSZ5JmlvLb/kVnyzPytIkLxdjdarZuFm/VQo1aDs7OKfXNsfHsWSyZx82uiyd8kNjY3b97XfS29hi/RmnVOj4Tgi4bcNXKiNUS6Lnm2E4GaCWUUMskyS1nHLPlW3K+A8M7rWeMkFMP183aERw1olHdh39IJeq8iyyPkRQL1oZnR0RGgUKSBYJTIZZSHHEqlMokK4/LOj2JlYsYkEyuUYd0BNXDdvY+Pj8NoYBRJyLh9cu4GXS13pfxhe+qU2fXzzaw+vxYsIJTKZWLzDr5ZynEyaVb8uXXHTdtA1PAklqJS8QlC56DuQ7vdThXNAEKppUx8s5STtjzd7DyvdBN1uy6KHjrfYXvpjCJi8CVjVSwmfGvPSmRlDiFfeLYJsb9b3+cf5bA5zJhQqpCJRVL51/7dxC1PtRfQKKpys6CEqmY563zffe89s7W1Ff49bje9Irv/xQ0Va5Tr+bNnYQTko8wh5Lg9l91qYEVmOs8nn38eXrNopGYLAKMPalTKY67uMrGNZmH154kyiZ7becolEopgh6uViNXyjzp3NbCbIeJI6fk3p5s/ObuZUwzuEPIosSX1bi4lLF4L5GGjJ3W9bHSi66XPotnhShrHjTaRb6mRUKqWiberkLBLYSvlEglFooXoOSnySBN95G0kaYeK44gOIY8aycoXHSXti6zfv6RyenJCC6fLYyZaJmUTNylvGIpO8m4sHrfKvgTlPnz1HWUmZxWVZZ1XZetUKGojQhm7TOyXcfPLryrNl0TDfOVKlCdIO+muSAOK2/JU18037UHHusKTBLWVRzthZf4iWFFqftOwEny36A2IUMYuE30Zs65RG95NR5RbsRWvdoQnrupTz6sqdH19PXcDUnfFR9wKdZ1225urKXt+j66DNn2Lux6juBZQnMbbt2//LfjznbLeQEkxe6dVyGzLrz9ozIXLME6iTKJ83PjO0KUPrEx0jlfXUnHLz0eRCIxGLBpSrXNIHx0mrvu1oMszwZFJ33sEIlnKIZOyYGSiPyJhvg5dnqmSyVEQnTQnRCYACAWZACAUZIJMAGZCKMgEAKEgEwAY3yjPp73X5lPzOtWxavyaHJcFSSZLhaUk9m7va74RALPU5QEAhAIAUG2XR5WeWlsDAIhQAAAQCgDMSJdHC+S4+9TWkbj1UQEQSgaYSg5AlwcAAKEAAEIBAIQCAIBQAAChAABCAQCEAgCAUAAAoQAAQgEAQCgAgFAAAKEAAEIBAEAoAIBQAAChAAAgFABAKACAUABghvm/AAMAHSZTh6da1JsAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-453":{"id":453,"type":"StaticText","parentId":450,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":"This work is provided \"as is,\" without warranty of any kind, expressed or implied. In no event shall the author be held liable for any damages arising in any way from the use of this script.","justify":"left","preferredSize":[280,0],"alignment":null,"helpTip":null}},"item-454":{"id":454,"type":"Image","parentId":450,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAYAAABjyArgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADAxJREFUeNrsWglUVFcSrW4aMYLK5pLRER1RQVFQjMpiBJeo52hE8URRo6KT0QygZsK4hBj0qAfXqHEUM+4RdcYTEgycABFEBRH3Ju5r3FckzgBu0P2nqv7C72btRnPOOFPm8d//7736/e+rd6vqvWgARRAEe41GkwL/l1cuOvpTr169NLwELlkeB6DRgo1WgxctaDU2XActPdMCTgK3a/FKj/FGUiOAUaCLEa8CTRgYjUa8NYLBSG0GrAtYN4p9+JmR+9E/cTBe6E54c8CdFzOvHCECt4uPNwJpA1obLV9tbMqLlkDGq0YCWCMVaQUohYAzGAhEA16lItWNBiPXReCNEsgS0Ay6oOh7E+TsmXPlAKdm/KiAqsWik4DV2ehAp9Mx6Idz8kCfr4eLFy5CSXGJ2oDB3sEeOnh0AB8fH/AL8EMwDVBmKGNgS7EIZWV4Xw64CLJBtGqyXINozfIKqEwuX7gMOQdz4MaNmybP3dxaQeC7gdDOo12dAHkd+hWI0velMZgyuASqLRYbnS38rM+HXTv/wcA+efIEioqKoAwBM+Ea7NuwYUNwdHKEDh06QNjYMOji3QUMDGwZ9zdIINM9UQhbtdqSq7Diwse/QlJiElrEWSh4VMD627q7c9vVK1fg4sWL4NrEFTp5dYKQ0BBwdnGyCITXqV8nV4hjyUrLwbUFna0tbN2yDVJ+SIZbN2/BixcvGMT+/ftD8+bNwcfbm8fq8/Ph/v37cOjQIfjl2i9w985duII/bMj7Q+GDD0aCnV092dBBi39tBJtyEJmHNcpcE7cbVeA+K3kG8WvWwyX8SN9u3WDpkiXg4eGJK8aB20uKi+HChfOw9m9r4UDWAbh39z58HDW11iC8bv2KBe/LzlTooJ4tgVuPwU34ZjvPKgEbGhoKo0ePxiXjBvXr1wdHR0ceTFb9/PlzePz4MSQnJ8O6devYymnWAwIDYPacmWCL+krLSrmwNRtkXjYwZxvIEaqsWLbgDes2wr7MfTypy5ctY8uidwcHB3N7VlYWv5ssbXtCAqxYsQL6BPeBqZFTagVAZfrptxc8esTtrk2a8Ldbq19lweWcS7SgBtfdvS0sXrwEfH19oWXLljwJapGBJmnbti1/fGRkBFrxVdibvhdatXKDSX8MZyrg6EIrOUWiB3aWONMC/sHCUQXNPD68dP4S5GTngF+vXvDJJzNwiXop79m/f79SJ8CpbcaMGZCLq+jwocPQr3/fGjmTOddM/970dFi/fj28xNXKEZadHcyJiYHu3btbrJ9xlSOKyR9NEqkBrfd0/mlYvnSZAu7GDRshuG9fcHV15WiiOnHApdW6dWvois4u51AOPHjwEK5du8rO7+3mb7OVghSeKdEHkQSBqzEyj8ggJ2zbgZZzFTZv3gQBAYH822QJCgqCiRMn8rvU726FDmnTps3w8mUp9PTvWe1v3bFtp4n+K5cvw2dz5kDhwwJwcnYBF2dnyMvLg5+RAhu89Ra806OHRfqZ8pQKh2KiFcevjVdoYcGChbjMA9lKak3sOFE0hiaGdJAu0qmEfFQ0WjHkI+4HNmGRsbTAYSDJieMnoGvXrvzxDRo0UPQvQZ6cP38+F6qrhfrSGBpbk6j1k5w+oYfr169Dv779YdHiOIj5Yi6MGz+e+Xnjhg0W6zcB2EaKc3PR/E+dOsXPRo0aBUOGDKlACZaAPG36dL4/dfIU5ObminG2VgKWExYt8QHI/9Ty9OlT8MWlaT65q1atYoqgQnW1UF8aQ2NrErV+8gd/37KJnx8+cYRDzj8g3Y0cOVKMJq5ehSe/Flqk34SDOUPDj8/MyFSihRkIjoPkTfP1ekhMTITikhK+98YIYsKECZW2+fv78w8jkCMjIuCr1avZcWTuzQQ/fz/QlkmJCocMUsLCBf8zlvOwvOzNhSKWyurVjamO0khohbwfEgJff70eRoeFKe1OSBMk5JiLikowDHW2SL8CMFsTfjBxDkmfPn1wFj0UACeGh8Pt27eV+JccWz5y04gRoRAVFWnSRpEEzfisWbM4nCNdKSkprJvtVEq75UxQI4GrrClD+Q8k720ugwYNgrS0NKVuLpWNqUrkvrR6PdBqxyG4nTt3VtovnD+v1Js0bWKxfhVFiEv0/j3RInr27KlQw8JFC0GPIOt0Nuhh42FebCyGRs+gabNmGLYs4zZHx8bc9umn0VBcXISxr53ykn79+onWhro1TAsiuMS9EsZc14LWLINyg+zsbHSUpla6cuXKSusk1JfG0NiaxFz/IwzNMjIyYNGCBRhBfcNl1ZdfctvosDFMD5boNwFYtiTZCikKkCUtLZ2vISHDYdiwEJiA3vv775NgIlJEBlKKaEmDuW3q1CncRvGyLJ7SSiDdotVqVCF41fLeoPc4xl6xfIXJcw9Jn3mdhPrSGBprqf5+GCl17NgRzp07B+vj47lQFucfEADhkydZrN+Ug6vhsWLMZkhoudMsUumFsaO6jUI4uY3q5o7HGvHv7QfpOLlbtm4FF9RJlFOdrMUEh/pSKEVjrdEfjYXCsQcPHypW3g3j/zZt2lisv4IFq/P/yyqeoVhYtORUTh0pDQ4LGw3btm1T2nJysiu0yXJP5YjEd8ilBgfU0AEmfzQZnj17ztHCF3PnKsuZMjgqMi1Q2+K4OO475sMxPNYa/fXr28FwzFjD0edQGTJ0KDp8B5g/b57F+k0sWA74aVeMdsrIgckSERHFmY5enw+DBg/m1PTMmTPIu05KW17ekQptcpRxFpccCek2TzDkOZXuKvzADp7tYcZfpsN2zCrjMcPaixzp5dUJJ7YdfmRD2LEjAd93lie2gX0DmBLxJ+js7VXrVVKTfv2pk3XSrwBMG+M6/FpaHvv3ZUF6errSady4sUDBkzoUI46djmEc0QHRxHffJUKJWZvC4ampfPXCVJSApXeJe8fSZo8gAi2IaZxpqomOtbOPF0Q6R0L+yXzeTqQJJAojJ0x86OLiAgMHDwTvbt7QouXv6ACh1gC8bv3KZk/e8TwcaAfJe36A2LmxrHzXrl1KoE0vukOhmEGMoRo3bqykqQUFBXDnzh1FqbotFcOpEcOHs2VHz4yGsR+O5Ti7tPSluPFTKm5n8v6xsfINH8UXFBVzVlhiFuTbYwxLG0u1XbZVyevQrwCce/QQz0xJyVMIHRbKoFFKmJr6IzRr1tyqH0ycHISe+fixY2zpuxN3Q6PGjURwS0u5GOS9YmnzvTqA/xtFcXLiBrgRGjdqBB9HTBVz89OnITo6moGyBtxITED0Uto9IXwCODs7iUdJRqO00a4CknbTJIoQ3qCDOYWDo/48DePb8RDYOxAGDhoIR/KOwk/pP0FS0h6mi5iYz5H43WullLz67Nmz4dtvE9k6A9/tDUOHDeX6sSPHYOOGTSbneDKgIgerXN0bdADKcZNbazchbkmccDL/uJCcmiIgMPwcCV8IDg4Wtm7dKhQXFQlVCbVRnwEDBvAYGuvh6SHsSdnDOlevWSVgPKmO0974ojG3lZa/bwkzZ/6VD/lu3roN69asZUsmK6bNdk9PT95bqOzI6MCBA3Aec3d5X4Isd9r0KGjXzp3Pu2I++xxuXL9hlQXIMS+J+jRDrld2/6reob6vkwXLpTVa8ldrVqPVnUBLThZmzZ4poJPiNgRaQHCxT2vBx8eHC9XpGbVRH+obNS1KSEpJYh0JOxOE9u3b18kSSIKCgrjgR/MzdZ2udG+tfnm8XMyfye+xolQEWAY5bmmccFx/XMjOPShs37mdQfPt7itgwlChPz2jtqjpUdx3/8EsHku0UFdwZYDpI82BlD++LuCq9aiBVL9TME1BracItRBdBPYOwAggHJo2dYV//6sIHhcWcoRgKDOY/H8RFLBTcO7i4gwNMRJ5hLn87n/uhsyMfVbTgnkaLy/T2NhYkyVLbfLWZ12EjqHU+tXvJKqw5h2amvw15eFumDT06PkO9PLz451+B3t7aT9X/kDxIynLo+OVw7mH4ShGC7eRwylBeSVeGPXLB510VKQ+9HwVAKv5V9av1mvtO2o8CyrC7ObM6TMM1v6sA3zSUdURkrjrXwSFjwtfGbDmTsf8RPlVOCAZVHP9ar11ekeLFi0G/i+FTr9l+Y8AAwCGjnSIFWFppAAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-455":{"id":455,"type":"StaticText","parentId":450,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":"This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.","justify":"left","preferredSize":[280,0],"alignment":null,"helpTip":null}},"item-456":{"id":456,"type":"StaticText","parentId":450,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":"Anti-Static name and logo ©2023 James Zelasko. All rights reserved.","justify":"left","preferredSize":[280,0],"alignment":null,"helpTip":null}},"item-458":{"id":458,"type":"Group","parentId":116,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,43],"orientation":"row","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-460":{"id":460,"type":"IconButton","parentId":458,"style":{"enabled":true,"varName":"GetCompSizeButton","text":"Get Comp Size","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARBJREFUeNpiYKAyYAQR9fX1/UCqgEKzJjQ2NhYyAg1LAHLmP3v2rPfVq1e3yDFJTExMTUpKqhjITGQBEgo/fvw4O3v27OXYFD9VUD+DzJd+cNMEi7Kz5eXlDhwcHAoshGwHGRDPKyAFYi/8/OEZIfVMxHgpgU/QB4SJUctCjKIFn95vITY8aefCfhEJYxBd+ObFWVJcCNP3At1AA3ZOY1iMYXMhNFJmocvB9O3AFoYSzCzG+6UV00D0i79/zsJoBRZWX5A8UI4BXQ5GY40UkITj0/sYrgAZBAI45NKwhuGFn9/PkhPLSPqMUQzEFhnEhCFMX/nQS4fUciFBA5FLmzZhcVylDaKApXZ5SPUSGyDAAD2IjNaNrrCYAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-461":{"id":461,"type":"Group","parentId":346,"style":{"enabled":false,"varName":"GridRowGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-462":{"id":462,"type":"Group","parentId":253,"style":{"enabled":false,"varName":"GapRowGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-463":{"id":463,"type":"Group","parentId":405,"style":{"enabled":true,"varName":"RandomScaleGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-464":{"id":464,"type":"Group","parentId":413,"style":{"enabled":false,"varName":"RandomRotationGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-465":{"id":465,"type":"Group","parentId":419,"style":{"enabled":false,"varName":"RandomOpacityGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-466":{"id":466,"type":"Group","parentId":346,"style":{"enabled":false,"varName":"GridStepGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-469":{"id":469,"type":"StaticText","parentId":466,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Step","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-470":{"id":470,"type":"EditText","parentId":466,"style":{"enabled":true,"varName":"GridCountStepTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"2","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-471":{"id":471,"type":"Group","parentId":253,"style":{"enabled":false,"varName":"GapStepGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-474":{"id":474,"type":"StaticText","parentId":471,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Step","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-475":{"id":475,"type":"EditText","parentId":471,"style":{"enabled":true,"varName":"GapStepTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"50","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-481":{"id":481,"type":"Group","parentId":261,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-482":{"id":482,"type":"Group","parentId":481,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-483":{"id":483,"type":"Image","parentId":482,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABftJREFUeNrMWF1oFFcUvvfO7MzsX3Y3JmpCpBFsTImQmuhDkIAtRbAohTyK0DyZBx/EhIJUH/Lgi4XEhyJ0xYdIRRAhpepDqbSItlJas6mt1XRrcW3TRNz87u7M7uzszPR+647dJrubNErXC8POXu4955tzzveduUMJH4ODg838p5dUf4xwLDFaADSey+XSmqaN6bo+9X8jkWW50ePxdIqi6OZ/t4uIEABduHDhQCwWS1YrRM3Nzf6DBw9e5MB6GSYQoWoCwoB/4MB9HlRxyk6ePDmAq3jDwMDA/tOnT4d7enpaiucxt3Qt/mO+eA77MAc7S9cW73dwMPIKDhT6YDwebzhz5szZaoM5fPjwofr6+mlxrQaQCr/f34D7GzduXOPX1O7duxv5tQ9zyWRyemho6OpabK8ZVFNT0z7QuMAcFOgU/23g4xDmAoEA5l4OKKcYi58yHA7fcVh69OjRvue5tyzCciZZr6Z973r8tRtUzS/qWWKJIqFLCOE8QF9f345KvkqCQgQKt2WfslYQxMzErzf9jE0qGV1+I/owuNVXs02M/h4UPb4vdVnSDct81Cy6pFjOyFaKdilfy0DdunVraOkcp2qUq26LoigtH586FU59cf1SaPTKo5AgJH2MBSTKNgouqcmambOM619HNdtKENOcPbKr+215zzs9VFFed+ys5KskqNHR0ejSuUgkMtTV1RV2maY/qBudG0zrx5BL0nikNiiU1roo9fJ0iTYhVs4mmm5bCzWMxRdMSzEyeofKU5p1K3k7K/n6T4WO+nEvJohvbp54tXRDUBCoh7JGidI6kVJ/AZRp2rZm2HROtllA0DJWiq+3BUZMcd3LYR8KEXkXBMEvJJNxeepJwh2f8QS0dK2PsqDCWJNAiBeYnT0CB8hBBgXbdpN0et6amn6aNQwtI4q+zo6Ogfb29uTk5OS1SnKxDJTTIsAy6BBYgyjZDyY+p59dvesTXa1eJmwtAPKVMsrQ+ClttFQtm7sT+V7N5Sbo3j1t7o72vaYsE253bKmviqBUVV2WZ9AeLENRo4aQskKEyqebEImvq5cJnfEyFlR1XbayBjFdroq+SoI6ceLE82KEUkMYoUOgPViGokYNFaes3GCUekSb+jg4j/3TvchkKvnVw1Bghr8RTC/1teqaQuuAUkMYoUOgPQqarpIgfJ3AKHExrI/HFyf/iN0/vzj3p/0ihY5ehtaRV2oujNAh0B4sWyWRLNsmJvbQ+rrQps2dbe/XBtcjUoUHXh0o5/0GoUVzRS9D64BSQxihQ6C98CyFlRFxvTQJJMJOs21t25t2dLxV5/OiV57loM4W+6oIyuv1tiwzznsZWgeUGsIIHQLtwbJygBBNDmZWt+15vm+R78/mJNeKvkqCKqYnXj/Q7aFT/s3NXeZ7+7epXKek+xN/CVp6GrQHy8oAimtuRU21bOkw6ta1Wq9t8mmWFc1pWhJ2S0nBqmqqIHBXe3t7O3ft3BnONmys03jUhNjjn1lKTViUZkF7sAxFjaAiZYhQxramk27FUBs2tmXq64gRCpKxSOTDkZGRsZf2PoUUasEarlk5YijKE8sydd77UtAh0B4sQ1GjhpAy1bKeLiqKlKkN8X0BYsjy2tuMczgobpYdvD3ku7wkJXVF+i0r0GgyZ+i1TJiHMEKHWKEho6hRQ7wZzy4wKjFZGrc87i08kn7Y4ZE6UMlXSVDd3d0DhYV9RYfF/OZMJhPtP368r1WSlQ+OHTuXSKmuTEYXSOzxeC4yHgHtwTIU9bxpPrp4+fKlH27fvPLR8PAnaFeOnUq+SoJCs6wUWgjfg6yeMRobWi2eSp23jqTAvvvl22/uQYdAe7DMNIyx25+eP1fJVjlfYpni/tcofoX9R65pvo/hml0XSoS5UkMYoUP5GuSASzF6JV8vdHBwTrOOdNjPTrnTEEZnbq221wyq1NOjdUCpX/T8x0q1mWod28uCemWO7YlEonN4eHiw2mD6+/sHa2pqHuYjBQ3B96FqAoJ/58D6Sn7Jo0XfPI/w680qBWqBX3edb55/CzAAm706DeV2K0kAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-484":{"id":484,"type":"Button","parentId":482,"style":{"enabled":true,"varName":"EffectorButton","text":"Effector","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-489":{"id":489,"type":"Checkbox","parentId":494,"style":{"enabled":true,"varName":"EffectorScaleCheck","text":"Sca","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-492":{"id":492,"type":"Divider","parentId":481,"style":{"enabled":true,"varName":null}},"item-494":{"id":494,"type":"Group","parentId":481,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-500":{"id":500,"type":"Checkbox","parentId":494,"style":{"enabled":true,"varName":"EffectorRotationCheck","text":"Rot","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-506":{"id":506,"type":"Checkbox","parentId":494,"style":{"enabled":true,"varName":"EffectorOpacityCheck","text":"Opa","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-514":{"id":514,"type":"Checkbox","parentId":494,"style":{"enabled":true,"varName":"EffectorPositionCheck","text":"Pos","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-515":{"id":515,"type":"Checkbox","parentId":222,"style":{"enabled":true,"varName":"RadialPositionRotateCheck","text":"Rotate","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-516":{"id":516,"type":"EditText","parentId":222,"style":{"enabled":false,"varName":"RadialPositionDuplicateTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"20","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-517":{"id":517,"type":"Group","parentId":288,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-518":{"id":518,"type":"Checkbox","parentId":292,"style":{"enabled":true,"varName":"StringExistingPointsCheckbox","text":"Existing Points","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-519":{"id":519,"type":"Group","parentId":517,"style":{"enabled":true,"varName":"StringerPointsGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-520":{"id":520,"type":"Group","parentId":55,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,50],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-521":{"id":521,"type":"Checkbox","parentId":520,"style":{"enabled":true,"varName":"RandomizeInPointsRelativeCheck","text":"Relative","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-522":{"id":522,"type":"StaticText","parentId":222,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Num","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-523":{"id":523,"type":"Group","parentId":261,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-524":{"id":524,"type":"Group","parentId":523,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-525":{"id":525,"type":"Image","parentId":524,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+ZJREFUeNpiZACChoYGBSCVwDDwYAHQLQ8YoQ46/+fPn+/fvn07+/Pnz2f0dgk7O7sUFxeXMQsLCyeQa8gCCiGQg5YsWRL14MGDzwMVRAoKCrwxMTHLgA5LYAIJgEJoIB0EAiD7Qe4AsUEhxYAcZTNnzjxDrsHp6ekmlDgM5g4WbJJpaWkkGzhr1iys4jIaHlKSqo72d04v2vL+xVWiYoOFHB+9+PETjEHAQIAPqxpBCW1eDZusNE5e8UiwOo/6tI8vr/ed216/mSJHnTxxAohPwvnBIcEM0jIyDNtfvmaY/+AJWOyQvQWGPiPPRl9+cc0iRkYmXpgYiC0goV1vH7sk8sn1HQ13zyy5hcteJlokWh4hBR9kByEDZhYONRFZYweyQ8rcwgKM0YGnuCiDIT8fzXIiWWnq4tkXDDuPPoSkqTI7qjsKb/RNmjCRQUVBEY5BaQwEXr75xnDxxmswpntI5RXkgzE6EBfhYtDXEMWp7/fPL7dY2LiNscn9///v8/dPL25RPfpc5FkYHJk5cMofX5Pdq2mbc0BMwaIYlLDhheO3d1seXlw368mNHc+oXiR8W7ue4fOEKWAxqfs3sOq9fnjKWSCOAhUP3AKy9m+enFsOEqNZQicFQAvLzVRLU7iKBK7gQAZ2czOiLbHk4OJtExaPFGZiVuv98KZv4ecPz6geUswy0mBMDJgvJu3gwMldzMbIKAniAx3nkMAnOKvq7cvlx398+0y0o3BVrqSAakFRtRhegWI+JiaMXKjGypa2UkIm8tSP730hLx5vJugoSpsfILBGQtYXGGX1eEObgZEXpOaSrIq93uM7JTSv+4SZWSSJVcvKyMhLlwqZptXMoHRUPK+A1HU51ZnAeO8BsenlKBZiEysoKwOzdkniq6cHBiyksCVWBVY2tUGdpvgNjHiNFyxLM122phjERpZzfHp/1q3fv2b9ZfiPt6Pw9u/fAx3vXzcSHX17vn05oMAn6Asrib/9/3cLJAZi602Y6sunq1/EyMwMdoxu7ySfr3duzTqfnrQc2WHA6F8+WVSyWJKZxQfZbJBZW75+7i188+IsSSHV+v71LcWHt3wv/vzRC6wOGlUf3o4CialV1BgDQ6Ye5iBwpwDI5lHXLAbJoTRhgNWIyeO7Dau+fEz/9O/fWVDIwczC5SCi6j6v5w+XU5pGQA4oZHiRPnzLqSHjqFsdLWdf7tia/u/3r+cwMRD77dHDJSA5qhWeoPEhUh0GxL6GM+dFMrFz8J5NiJpFDcdA3fEN7CjQgBVofIjU4SDkIoAa41MgdwCZdwblSB4jSBDqMFAHz2CA0vYHUMebATrmCRBgAOZqnGEptxUjAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-526":{"id":526,"type":"Button","parentId":524,"style":{"enabled":true,"varName":"PaletteManagerButton","text":"Palette Manager","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-527":{"id":527,"type":"Divider","parentId":523,"style":{"enabled":true,"varName":null}},"item-528":{"id":528,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup2","preferredSize":[0,0],"margins":[3,0,0,0],"orientation":"column","spacing":0,"alignChildren":["left","center"],"alignment":null}},"item-529":{"id":529,"type":"Group","parentId":528,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-530":{"id":530,"type":"Image","parentId":529,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABTdJREFUeNrMWFtII1cYPm6iJurECyo4WpUqkepLJYr4oI2W1hcX8cGH7GpZWxhBwaJZatFC40tBTQQF3TpFrGgNlBa1VVDqQ6wPUiVIQQVTFQVJRKmXxKjrZbf/P2RkTKJJvGz6w+HMOWcu3/zX75wAAqLRaJKhe0H8Lz8Clo0AB6CFi4uLk+PjY+Pr16/N7xpJcHAwHRISohCLxVIYZopRQwhocHDw2cbGhs1fKkpOTqbKy8uHANiLJziBGvInIBT8PuLAaw6UP0zmTngcYuFkbm4uExoaynh6eGpqKst5rqWlRR4bG0vt7OzYGhoaTPx8dXU13dnZ+ROYpcAxJYemxosokYj8+V7K1Tv+3vmX/icmhhU7v7xk3wbNeiOgz9+PvzZWKpXU8PCwlqIouc1mM0mlUpphGHNpaelLg8Fg6+7uNre2tlpGR0eVJSUlBniEgqaQPRGRobhEgj0vYReX5Mp89xEEZLfbLbW1tc+bmpqaJRLJ0/PzcxsEjpq/Z3Nz05CamirnxwjkZzqRpAdJ3L7zXqDQZKghiBpde3t7T2Vl5UeOvNceHx9f7O6ZolDqVkAeQYkT4knEN1/fuF5YWKjY29szopkg18RlZ2fr+bXLy8uraAbtUfz1pyHUrYA8gnpjtRLpJx8TqvIzt+tms9kSGBhIOSLHsrW1pUHfAR/SgsnG+PtAa8qxsTGDtxbwAMpG9r5qIrLaGk5rzjI5OWmKiIhQYITV19dX4Vx+fr4KfSglJUWH46WlJebk5MQsjMh7geI08Nccsf86TKJav3NZw8haX1/Xo2ZwnJCQoImMjKzKyMhgcTw/P69KS0tTsSyr88VXXVLCijSIjBLZdeQDA6Toh++JveoLQv6YuLaGGllbW1NjLmpsbJw+PDzkEmBSUpISchOl0+mqfNGSCyir1Wo0ymSsMchJgad2sv7qFdFqtcwHW5sGSJ4uwMCE+pqamuKYmBj57u6uCbSkLygo+N35g78cHSDAKndgTiJlT7FHlqCBl8R1dXWxnv4A/QM1EBYW9uwxygz8FAM/ZfEpT/G+guAeswb6nDxBo5r09HQGE+djgeLMFx4e/i00rx/KzMwkiYmJBHLSg4KBIMHWzDn66uoq641PCWV/f78nJyfHyJv0AX3q7rUPiy/moL6+PoXffUqYOBcWFliVSqVB+vKQoMRO0aWQyWQe/3x2dpYzGRZgMKOyt7eX4cuKsyDgtra2YkGxphxEj1+/ulckEtHQWa6BQkDR0dGMRCK9xZf2sGOFZsRsDuC4DyGXGh8f1wONMQoCg4HkOo3adQDq4SioPI1rvAQGBmFndDEfAoL6dWNzlrKyMoWDMRhHRkZYyGHTFRUVWmQLOI+0Znt7e5rnWrwgGKGWHozkoWny8vLqBwYGXsJOxAbbJBpLy8zMTHtRUZFaEOpm2NdR3gC6N6i6ujrF6empBU2VlZWlnpubW8F5BIak74YfuRXQvUHRNB0HGnLZniFlAd5+xQywSMMux/LoKQFlcXHRBMHBeery8jKrVqt7jo6OhtCxsRzxPD4qKkrR3NxsuFNK8FXQbJCnOM1gZocIG4PQj+vv7zehg6PPQZbWrKys6HH8TjSF0tHRoUbNINHjgSIAjL6JiYmhg4MDk6+lSOwuDzlykVeCrBI4+XNgnWiy36DxW3ALJllnogd83XZ2dmZ09663b9/QPpM8b/eCvtJfZ5In5s+HHqpu3RWQAMcx51N4YIXnQ/48ccHvIw7efP+7k7wAwZnnl9A+9JOiDvAkiD/z/E+AAQCfVmdJkhaeDAAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-531":{"id":531,"type":"Button","parentId":529,"style":{"enabled":true,"varName":"LabelMateButton","text":"Label Mate","justify":"center","preferredSize":[210,0],"alignment":null,"helpTip":null}},"item-532":{"id":532,"type":"Group","parentId":528,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,5,44],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-533":{"id":533,"type":"DropDownList","parentId":532,"style":{"enabled":true,"varName":"LabelMateFromDropdown","text":"DropDownList","listItems":"None, Red, Yellow, Aqua, Pink, Lavender, Peach, Sea Foam, Blue, Green, Purple, Orange, Brown, Fuchsia, Cyan, Sandstone, Dark Green","preferredSize":[160,0],"alignment":null,"selection":0,"helpTip":null}},"item-534":{"id":534,"type":"Divider","parentId":528,"style":{"enabled":true,"varName":null}},"item-535":{"id":535,"type":"StaticText","parentId":532,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Parent","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-536":{"id":536,"type":"Group","parentId":528,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,5,44],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-537":{"id":537,"type":"StaticText","parentId":536,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"To","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-538":{"id":538,"type":"DropDownList","parentId":536,"style":{"enabled":true,"varName":"LabelMateToDropdown","text":"DropDownList","listItems":"None, Red, Yellow, Aqua, Pink, Lavender, Peach, Sea Foam, Blue, Green, Purple, Orange, Brown, Fuchsia, Cyan, Sandstone, Dark Green","preferredSize":[160,0],"alignment":null,"selection":0,"helpTip":null}},"item-539":{"id":539,"type":"Group","parentId":528,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,5,44],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-541":{"id":541,"type":"Checkbox","parentId":539,"style":{"enabled":true,"varName":"LabelMateRepositionCheck","text":"Reposition","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,37,38,55,56,58,57,59,60,61,62,520,521,63,64,65,67,66,68,69,70,71,72,92,93,94,95,96,97,98,99,100,101,102,103,104,105,110,109,111,112,113,114,115,275,276,277,278,279,280,281,282,287,48,43,42,41,54,383,384,385,386,388,389,387,528,529,530,531,532,535,533,536,537,538,539,541,534,390,391,392,393,394,395,396,399,39,156,157,158,159,160,161,165,169,172,116,117,118,119,458,460,125,426,128,427,134,428,138,120,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,213,214,215,216,217,218,219,220,222,223,522,516,515,221,224,225,226,227,241,242,243,342,343,345,346,347,349,461,351,353,466,469,470,338,340,341,253,254,256,462,258,260,471,474,475,240,316,317,318,319,323,330,358,331,332,320,321,322,334,335,444,449,329,401,402,403,404,405,409,463,410,407,411,412,425,413,414,464,415,416,417,418,419,420,465,421,422,423,424,408,261,481,482,483,484,494,514,489,500,506,492,288,289,290,291,292,518,297,299,517,519,293,295,298,300,301,302,303,304,305,306,311,312,313,315,314,310,429,430,431,432,433,439,440,441,442,443,523,524,525,526,527,434,435,436,437,438,360,361,362,363,364,450,452,451,453,454,455,456],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":false,"afterEffectsDockable":true,"itemReferenceList":"None"},"activeId":38}
*/

// PALETTE
// =======
var palette = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette");
    if ( !(panelGlobal instanceof Panel) ) palette.text = "Anti-Static ToolBox";
    palette.orientation = "column";
    palette.alignChildren = ["left","top"];
    palette.spacing = 0;
    palette.margins = 5;

// TPANEL1
// =======
var tpanel1 = palette.add("tabbedpanel", undefined, undefined, {name: "tpanel1"});
    tpanel1.alignChildren = "fill";
    tpanel1.preferredSize.width = 316.047;
    tpanel1.margins = 0;

// TAB1
// ====
var tab1 = tpanel1.add("tab", undefined, undefined, {name: "tab1"});
    tab1.text = "Timeline";
    tab1.orientation = "column";
    tab1.alignChildren = ["left","top"];
    tab1.spacing = 3;
    tab1.margins = 10;

// BUTTONGROUP2
// ============
var ButtonGroup2 = tab1.add("group", undefined, {name: "ButtonGroup2"});
    ButtonGroup2.orientation = "column";
    ButtonGroup2.alignChildren = ["left","center"];
    ButtonGroup2.spacing = 0;
    ButtonGroup2.margins = [0,3,0,0];

// GROUP1
// ======
var group1 = ButtonGroup2.add("group", undefined, {name: "group1"});
    group1.orientation = "row";
    group1.alignChildren = ["left","center"];
    group1.spacing = 10;
    group1.margins = 0;

var image1_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%C3%A4IDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg%20Y%C3%9D%C3%B7%1F%C2%8D%C3%B9%7F%C3%BD%C2%96%3A%22.%C2%B2%C2%99%C3%96.agg%C2%97%C3%A2%C3%A2%C3%A22faa%C3%A1%04r%0DY%40!%04r%C3%90%C2%92%25K%C2%A2%1E%3Cx%C3%B0%19%C2%A6p%C2%BF%C2%B4b%C2%9A%043%0BC%C3%A4%C2%A3%C3%9B%C2%B3%C3%A8%11D%0A%0A%0A%C2%BC111%C3%8B%C2%80%0EK%60%02%09%C2%80B%08%C3%99A%03%01%40%C3%B6%C2%83%C3%9C%01b%C2%83%1D%05%C2%8B%C2%B2%C2%81%060w01%0CB%C3%80B%C2%AEFsss5MM%C2%ADbj'x%205%C2%8BlGqrr%C3%B2%C2%B2%C2%B1%C2%B1%19S%C3%93Q%C2%8C%C2%8C%C2%90%C2%88%1B%C2%94%C3%917%C2%BC%C3%92%C3%94%C2%81%03%07%C3%8E%02%C2%B1%095%1D%C2%93%C2%9D%C2%9D%C2%9D%C3%86%C3%8B%C3%8BC%C2%BC%C2%A3%1C%1C%1C%C2%8CEE%C3%85%C2%8Ci%19B%C2%AC%C2%AC%C2%AC%20%C3%B3%C2%B7%10%C3%AD(%C2%90%C2%83%04%05%05%C3%93h%C3%A9(ff%C2%B0s%C2%B6%C2%8C%26t%C2%AA'%C3%B4k%C3%97%C2%AEn%11%15%15%3DKK%C3%87%C3%A8%C3%A9%C3%A9%C3%B9%C2%92%C3%A4%C2%A8%C2%ABW%C2%AF%C2%82%C3%AA%25%C2%9A%C3%96%C2%91%C3%9A%C3%9A%C3%9A%C3%86%04%1D%C3%B5ND%C3%888%C3%8D%23%C3%BD%0C%C2%BD%C2%A2%C2%8D%C2%83%03%C3%94%C2%9Cbh%1CM%C3%A8TI%C3%A8%2C%C2%BF%C3%BF%7C%C3%BE%C3%B5%C3%AB%C3%97-z9%C3%A6%C3%BF%C3%BF%7FR%04%1D%C3%85%C3%B7%C3%B1%C3%93%C2%AD%05%0B%C3%A6%C2%A7%C3%93%C3%8BQ%C2%A0j%C2%86%C2%A2%C2%BA%C2%8F%C2%8C%C2%9C%25%C2%A5%C2%A5%C2%A5%C3%ADC%C3%95j%C2%86R%00%2C%C3%A3%24%09US%C2%A3%C3%95%0C%C3%9D%C3%9AS%C2%A4%C2%82%5B%40%00%C2%A4%C3%92%C2%A9Z%C3%8D%C3%A0%02RRR%C2%BCj%400%C2%A8BJ%0D%0C%C3%94gR%C2%A7%C2%91%C3%87%06%C2%A2%C3%8E%C2%8E%26t%C2%BAE%C3%9F%C3%AB%C3%97%C2%AF%C2%9F%03%C2%9B%C3%8AT%19%04%C3%A1%C3%A2%C3%A24%C2%A6%C2%8A%C2%A3%40%C3%AD%2C%20%C2%A6%C2%8A%C2%A3P%C2%AA%19hwy%C3%80%01%C3%94%1D%C3%9F%C2%98%20%C3%81%C3%86e%0C%1A%1F%1AH%07%C2%81%C3%AC%07%C2%B9%03%C3%9C%7D%1F%C2%8C%23y%C2%8C%20A%C2%A8%C3%83%C3%B2%C2%81%C3%98%60%C2%80%02%C3%AA%03%10_d%C2%80%C2%8Ey%02%04%18%00%19o%C2%A5k%C2%93%C3%B1%2Fm%00%00%00%00IEND%C2%AEB%60%C2%82";
var image1 = group1.add("image", undefined, File.decode(image1_imgString), {name: "image1"});

var RandomizeInPointsButton = group1.add("button", undefined, undefined, {name: "RandomizeInPointsButton"});
    RandomizeInPointsButton.text = "Randomize In Points";
    RandomizeInPointsButton.preferredSize.width = 210;

// GROUP2
// ======
var group2 = ButtonGroup2.add("group", undefined, {name: "group2"});
    group2.orientation = "row";
    group2.alignChildren = ["left","center"];
    group2.spacing = 10;
    group2.margins = [50,0,0,0];

var statictext1 = group2.add("statictext", undefined, undefined, {name: "statictext1"});
    statictext1.text = "Frames";

var RandomizeInPointsSlider = group2.add("slider", undefined, undefined, undefined, undefined, {name: "RandomizeInPointsSlider"});
    RandomizeInPointsSlider.minvalue = 0;
    RandomizeInPointsSlider.maxvalue = 100;
    RandomizeInPointsSlider.value = 50;
    RandomizeInPointsSlider.preferredSize.width = 113;

var RandomizeInPointsTextbox = group2.add('edittext {properties: {name: "RandomizeInPointsTextbox"}}');
    RandomizeInPointsTextbox.text = "20";
    RandomizeInPointsTextbox.preferredSize.width = 30;

// GROUP3
// ======
var group3 = ButtonGroup2.add("group", undefined, {name: "group3"});
    group3.orientation = "row";
    group3.alignChildren = ["left","center"];
    group3.spacing = 10;
    group3.margins = [50,0,0,0];

var RandomizeInPointsRelativeCheck = group3.add("checkbox", undefined, undefined, {name: "RandomizeInPointsRelativeCheck"});
    RandomizeInPointsRelativeCheck.text = "Relative";

// BUTTONGROUP2
// ============
var divider1 = ButtonGroup2.add("panel", undefined, undefined, {name: "divider1"});
    divider1.alignment = "fill";

// BUTTONGROUP3
// ============
var ButtonGroup3 = tab1.add("group", undefined, {name: "ButtonGroup3"});
    ButtonGroup3.orientation = "column";
    ButtonGroup3.alignChildren = ["left","center"];
    ButtonGroup3.spacing = 0;
    ButtonGroup3.margins = [0,3,0,0];

// GROUP4
// ======
var group4 = ButtonGroup3.add("group", undefined, {name: "group4"});
    group4.orientation = "row";
    group4.alignChildren = ["left","center"];
    group4.spacing = 10;
    group4.margins = 0;

var image2_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%C3%A2IDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg0%15%1EO_%C2%A6%5D%14%C3%A4%C3%9B%C3%B2%C2%9C%C2%8B%C3%B3%19-%5D%C3%82%C3%8E%C3%8E.%C3%85%C3%85%C3%85e%C3%8C%C3%82%C3%82%C3%82%09%C3%A4%1A%C2%B2%C2%80B%08%C3%A4%C2%A0%25K%C2%96D%3Dx%C3%B0%C3%A03%C2%B2%C3%A2*%05%C3%B5%C2%B4%3B_%3En%C2%9E%C3%BA%C3%A6%C3%85YZ%07%C2%91%C2%82%C2%82%02oLL%C3%8C2%C2%A0%C3%83%12%C2%98%40%02%C2%A0%10Bw%10%C2%BD%01%C3%88~%C2%90%3B%40l%C2%B0%C2%A3%C2%90%C2%A3l%20%01%C3%8C%1DL%0C%C2%83%10%C2%B0%10R%C3%B0%C3%83%C3%92%C2%A28AX%C2%90.Q%0BJ%C3%B0%40j%16AG%C3%BD%C3%A7%60Wccc%C2%A3K%0812B%22nPF%C3%9F%C3%90LS%C2%9C%C3%BB%0F%C2%A6%C3%8F%C2%A2C9%05%02%C3%99%C3%99%C3%99i%C2%BC%C2%BC%3C%C2%84%1D%C2%85%0E%1C%1C%1C%C2%8CEE%C3%85%C2%8Ci%C3%A1(VVV%C2%90%C2%B9%5BHv%14%C3%88A%C2%82%C2%82%C2%82i%C2%B4p%1433%C3%989%5BF%13%3A%C3%95%12%3A%3A%C2%B8v%C3%AD%C3%AA%16QQQ%C2%9A%24%7C%3D%3D%3D_%C2%B2%1Cu%C3%B5%C3%AAUP%C3%BDD%C2%93%C2%BAR%5B%5B%C3%9B%C2%98%2CGa%03%09%09%C2%893%C2%81%C2%A5%3E%C3%859%C2%92%C2%83%03%C3%94%C2%9Cbh%1CM%C3%A84K%C3%A8X%5B%12%3F~%C3%9C%C2%A2%C2%869%C3%BF%C3%BF%C3%BF%C2%93%C2%A2%C2%9A%C2%A3V%C2%ACX%C3%9EK%C2%ADj%C2%86j%C2%8E%C3%82%06BC%C3%83H.%C3%B5%C3%89%C2%AEf%C2%88%05%C3%A4TE%C2%A3%C3%95%C3%8C%C2%80%C3%A4%3El%C3%A0%C3%96%C2%AD%C2%9B%C3%A9t%C2%ABf%C2%88%05%07%0E%1C%40%C2%A9%1F%C2%A5%C2%A4%C2%A4x%C3%95%C2%80%60%40C%0A%1D%C2%A8%C2%81%C2%81%C3%BAL%C3%BC%C2%B9%0F%C3%9CA9%3B%C2%9A%C3%90%07%3C%C2%A1%C2%A3%C2%83%C3%97%C2%AF_%3F%076%C2%A5g%C3%A1S%C3%83%C3%85%C3%85iLWG%C2%81%C3%9Aa%40%3C%C2%8B%C3%A8j%06%C3%9A%5D%1Ep%00u%C3%877%26H%C2%B0q%19%C2%83%C3%86%C2%87%06%C3%92A%20%C3%BBA%C3%AE%00w%C3%9F%07%C3%A3H%1E%23H%10%C3%AA%C2%B0%7C%206%18%C2%A0%C2%80%C3%BA%00%C3%84%17%19%C2%A0c%C2%9E%00%01%06%00%C3%B7%C3%A7%C2%A6X%C2%8C%C2%8C%C2%8B%1D%00%00%00%00IEND%C2%AEB%60%C2%82";
var image2 = group4.add("image", undefined, File.decode(image2_imgString), {name: "image2"});

var StaggerInPointsButton = group4.add("button", undefined, undefined, {name: "StaggerInPointsButton"});
    StaggerInPointsButton.text = "Stagger In Points";
    StaggerInPointsButton.preferredSize.width = 210;

// GROUP5
// ======
var group5 = ButtonGroup3.add("group", undefined, {name: "group5"});
    group5.orientation = "row";
    group5.alignChildren = ["left","center"];
    group5.spacing = 10;
    group5.margins = [50,0,0,0];

var statictext2 = group5.add("statictext", undefined, undefined, {name: "statictext2"});
    statictext2.text = "Frames";

var StaggerInPointsSlider = group5.add("slider", undefined, undefined, undefined, undefined, {name: "StaggerInPointsSlider"});
    StaggerInPointsSlider.minvalue = 0;
    StaggerInPointsSlider.maxvalue = 100;
    StaggerInPointsSlider.value = 50;
    StaggerInPointsSlider.preferredSize.width = 113;

var StaggerInPointsTextbox = group5.add('edittext {properties: {name: "StaggerInPointsTextbox"}}');
    StaggerInPointsTextbox.text = "2";
    StaggerInPointsTextbox.preferredSize.width = 30;

// BUTTONGROUP3
// ============
var divider2 = ButtonGroup3.add("panel", undefined, undefined, {name: "divider2"});
    divider2.alignment = "fill";

// BUTTONGROUP4
// ============
var ButtonGroup4 = tab1.add("group", undefined, {name: "ButtonGroup4"});
    ButtonGroup4.orientation = "column";
    ButtonGroup4.alignChildren = ["left","center"];
    ButtonGroup4.spacing = 0;
    ButtonGroup4.margins = [0,3,0,0];

// GROUP6
// ======
var group6 = ButtonGroup4.add("group", undefined, {name: "group6"});
    group6.orientation = "row";
    group6.alignChildren = ["left","center"];
    group6.spacing = 10;
    group6.margins = 0;

var image3_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03gIDATx%C3%9A%C3%AC%C2%98%C3%8DO%13A%14%C3%80gv%C2%B7%5B%C3%A8%17%C3%92%1A%5BV%C2%81%12%13%3E%C3%94(D.%C2%92%C2%98p%11%C2%A3%06%C2%95%C2%9B1%24%C3%82%C3%89%04%0E%C3%86x%C3%A1H%C3%A2_%C3%81%0D%12%C3%A2%15%C2%84D%01%2F%C3%84%03%07%C3%93%C2%AA%C2%98H%C2%84%0A%05%C2%91%C3%B2a%3F%C2%80%C3%96%C2%A5%C3%9D%C3%AE%C2%87%C3%AF%C3%95%C2%A5%C3%92%C3%90%1EL%C3%90%C3%B6%C2%B0%2F%C2%99%C3%AC%C3%8C%C2%BE7%C3%B3~%C3%BB%C3%A6e%C3%B3f(%01%19%1C%1C%C3%B4%C3%82%C2%A3%C2%87%14_%C2%86%C2%81e%C2%95%C3%AA%40%1FdY%3E%10E%C3%91%C2%9FJ%C2%A5B%C3%BF%C2%9B%C3%84l6%0B%16%C2%8B%C3%A5*%C3%87q%C3%A50l%C3%A10B%084%3A%3A%C3%BApuu5%5E%C2%AC%10y%C2%BD%5E%7Bww%C3%B7%0B%00%C3%ABa%C3%B0%05F%C2%A8%C2%98%40(%C3%A8%1F9%C2%B0%C2%9F%C2%81*%C3%86%C2%96%C3%A5%C2%93C%0E%C2%AE%C2%90A9e%C2%98s%1Cg%3A%C3%83r%C2%BC%C2%8Be%C3%B9S%0C%C3%8B%3B%18%C2%86%C2%B7A%C2%B3P%C3%86%04z%C2%9E%C2%A3%C2%84-4_%C3%96%C2%88%22j%C2%AA%C2%84-%C2%A1%C2%AA%C3%A9%C2%B8%C2%AAJ%C2%BB%C2%AA%22E%14E%C3%9AQ%C3%A4%C3%B4%C2%86%2C%C2%A3N%C3%8D7%C2%B7%20T%15%00%C3%9D%C2%B0%C3%98%C3%9C%0D%C2%BC%C3%99%7D%C2%96%C3%A5%3C%C2%95%2C%C3%AB%C2%B6S%C3%96ma%C2%A8%C2%A7%C2%8C2n%C2%9ER7%10Y%0B%C3%8DW%08IH%C2%9A%C2%B6%C2%9D%C3%94%C3%94-QUw%C3%A2%C3%B0%C2%8C)%C3%8ANH%C2%91%C2%B7%C2%BEH%C2%A9%C3%ADi1%C2%B1%C2%BD%C2%9C%C2%96R%C3%B9%C3%A62%C2%A4%04%C3%85%C2%802%C2%A0%0C(%03%C2%AA%C3%94%C2%A1r%C3%BE%C3%A8%C2%82%20%C3%98%C3%ABAfgg%3B%C3%97%C3%92%C3%A9%C3%86%C2%BD%C3%9A%C2%9A%C2%91%C2%88%C3%95%C3%A6%C3%94T%C2%ADr_%C3%93%C2%9CVx2%C3%89%03%C3%87%C3%80%C3%A2%C2%82%C3%90b.%C3%A3%C2%9F%C3%967%C3%A5%5DTJI%C2%A4%3F%C2%B0%60%C2%AD%C3%A5L%C2%A7%C3%BB%C2%9A.%1D%C2%88%C2%94%C2%AA%09%C2%862qJ%C3%8B%C2%A3%0Cu%2Cm%7C%C3%B7%C2%AE%C3%ACE%C3%BBm6%C3%9BPkk%C3%AB%12J(%14%C2%8A%C3%A7%C2%85B%C2%A0Phs%C2%A8%C2%B9%C2%B993%C2%9EZ_%7F%C3%9E%C3%99y%C2%97l%C3%B1%C3%BCog%C2%92D%26''H%C3%B5%C3%85%0B%C3%A4%2B%C2%8C%7B%13%C2%BB%C2%A4%C2%BD%C2%BD%3D%17H%C2%B7%C2%B9~%C3%BB%16%C2%85%C2%8F%C2%ABX%C2%8E%C3%87*%C2%8E%C3%9AD%22%11%C3%B2%C3%96%C3%BF%C2%8E%C3%9C%C2%BB%7F%C2%9F%C2%80%C3%BE%C2%99%C3%AE%C3%B71%40%C3%B9%C3%B3B%C2%81%C2%91%C2%80%C3%8F%600%C2%98%19%C3%97%C3%95%C3%95%C2%91%C2%B9%C2%B9%C2%B9%C2%ACc%C3%AC%C3%A3%C2%A2%3E%C2%9F%2F%C2%AB%17%C2%84*X%C2%B4!%C2%BB%06%C3%9A%C3%98%C3%ADv266F%C2%86%C2%87%C2%87Iooo%C2%8E%C3%8D%C3%8C%C3%8C4%C3%AEH%C2%8E%1Ej%C2%A9%C3%82%C3%9B%07%C3%8E%01x%C2%93tuue%C3%86.%C2%97%C2%8B%C2%B4%C2%B5%C2%B5e%C3%B5%C3%98%C2%8FD%C3%82Y%3D%3A%3A%0Ath%C2%83%C2%91B%1B%C3%B8%C3%88c6%1D%1D7s%C3%B4%C2%87%1F%0C%C3%B5T~(%C3%9C%5B%0C%25%C3%A6%14Kh%C3%A3%C2%83%C3%8BWFj%16%03N'%C3%A4%C2%92C%C3%8F%C2%A9%3BU%C3%95%C3%8E%C2%81%C3%8F%0B%C3%A7%C3%B5%C2%9Cb%C2%88%C3%AF%C3%A3%C2%B1%C2%9Cz%C3%A4%C2%A9!%C3%BD%C2%AF%5Ek%C3%978%C3%93~%C2%9F%C2%BDr%5D%7C%C3%BF)%069%15%C2%85%C2%9C%C2%8AAN%C3%85%C3%B6%3C%C2%82%C3%B4r%7C%C2%BC%C3%9F%0A9%C2%A5%C2%BB%5D*%18)L6%7Do%C3%BD%C2%B5%26%C2%93%C2%B9b%C3%AD%C2%9B%C3%9B%C3%B5%C2%A7tIB%C3%A9%C2%A2%40%C3%A9%C3%82M%0B%C3%9EP%C2%A6t%C2%89%C3%AE%16%2C%5D%C2%A6%04%C3%AFO(%5D%C3%82%C3%89%1F%C3%A1%3D(%5D%C3%82%C2%87%C2%A5%0B%03%C2%A5K%3D%C2%94.A%13%3F%C2%B1%C2%9CH%C2%A40Z%C3%86%7F%C3%8A%C2%802%C2%A0%0C(%03%C3%AA%C2%A4K%C2%97%C2%A3%C2%B2)%C3%8B%C3%A97p%60%C2%9CO%25cpB%5E9%C3%A9%132%C2%AE%C3%BF%C3%97P%07p%C2%A4%0E%C3%80%096P%C3%A0%14%C3%BB%C3%8F%23%C2%85%C3%B7C%C2%A5%C2%B0m%3A%C2%87%C2%98%C3%89)%C2%BC%C2%B0%C3%82%C3%BB%C2%A1b%02%C2%A1%7F%C3%A4%C3%80~I%C3%9E%C3%A4Q%7C%C2%A9%C2%83%3D%C2%81%C3%96%5C%C2%A4%40%C3%ADB%C2%9B'%C3%BA%C2%9D%C3%A7%2F%01%06%00%C2%97%1B%C3%92%C3%B3%C2%B4%C3%A2%C2%8E%15%00%00%00%00IEND%C2%AEB%60%C2%82";
var image3 = group6.add("image", undefined, File.decode(image3_imgString), {name: "image3"});

var FadeInOutButton = group6.add("button", undefined, undefined, {name: "FadeInOutButton"});
    FadeInOutButton.text = "Fade In/Out";
    FadeInOutButton.preferredSize.width = 210;

// GROUP7
// ======
var group7 = ButtonGroup4.add("group", undefined, {name: "group7"});
    group7.orientation = "row";
    group7.alignChildren = ["left","center"];
    group7.spacing = 10;
    group7.margins = [50,0,0,0];

var statictext3 = group7.add("statictext", undefined, undefined, {name: "statictext3"});
    statictext3.text = "Frames";

var FadeInOutSlider = group7.add("slider", undefined, undefined, undefined, undefined, {name: "FadeInOutSlider"});
    FadeInOutSlider.minvalue = 0;
    FadeInOutSlider.maxvalue = 100;
    FadeInOutSlider.value = 50;
    FadeInOutSlider.preferredSize.width = 113;

var FadeInOutTextbox = group7.add('edittext {properties: {name: "FadeInOutTextbox"}}');
    FadeInOutTextbox.text = "10";
    FadeInOutTextbox.preferredSize.width = 30;

// BUTTONGROUP4
// ============
var divider3 = ButtonGroup4.add("panel", undefined, undefined, {name: "divider3"});
    divider3.alignment = "fill";

// BUTTONGROUP5
// ============
var ButtonGroup5 = tab1.add("group", undefined, {name: "ButtonGroup5"});
    ButtonGroup5.orientation = "column";
    ButtonGroup5.alignChildren = ["left","center"];
    ButtonGroup5.spacing = 0;
    ButtonGroup5.margins = [0,3,0,0];

// GROUP8
// ======
var group8 = ButtonGroup5.add("group", undefined, {name: "group8"});
    group8.orientation = "row";
    group8.alignChildren = ["left","center"];
    group8.spacing = 10;
    group8.margins = 0;

var image4_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C3%B1IDATx%C3%9A%C3%ACX%5DHSQ%1C%C3%BFo%C2%BBk%1F6%C2%B7r%C3%96%C2%9CI3m*X%19%C3%92C%C2%81%C2%B4%C2%9E%C2%82X_TD1RzX%C2%BDD%C3%90%C3%B2A%234%22%C3%B7%60%C3%AB%C2%A5%5E%C3%9CS%C3%81(%C2%A2D%C2%AA%11H%0F%C2%AD%C2%97Bb%C3%B4%C2%81%C2%90%C2%AE%C2%B4%C2%89%C2%B9e%C3%B91%5B%C3%AD%3A%C3%9BG%C3%B7%7F%C3%B3%C3%A26%C2%B7%C3%AE%C2%BDk8%C2%89%0E%1C%C3%8E%C2%B9%3B%3B%C3%BF%C3%BB%C2%BB%C2%BF%C3%BF%C3%A79%02%C2%A0Z%7B%7B%C2%BB%C2%8E%1A%C2%9A%20%C3%BF%C3%AD%26%C2%85%C3%85%2B%C2%98%07%C3%B4*%12%C2%89%C2%90%C2%A1P%C3%88%1D%0E%C2%87%7DK%C2%8DD%22%C2%91h%C3%A5ry%3DA%102%C3%AAq%2B%C2%81%0C!%20%C2%87%C3%83q%C3%9C%C3%AB%C3%B5%06%C3%B3E%C2%91N%C2%A7S%C2%98L%C2%A6%C3%9B%14%C2%B0%26!%C3%BE%C2%80%0C%C3%A5%12%C3%90%C3%9B%C2%B2%C3%8A%C2%AB%C2%8D%0A%C2%95%C2%96%C3%8F%1E%7C%3F%C3%A2%C3%809%0D*%C3%97*%2B%12%C2%89%0C%1DEk%1F%3E_%C2%B7%C3%81%C2%B2%5D*Wp%C3%9D%C3%87%C3%A0%20%C2%B8n%C3%80%2F%3F%C2%BAR%C2%B9S%26%14r~%C3%89zB%7C%C3%AC%C2%AEf%C2%9D%C2%B1%3F%1C%C2%B6%C3%AF%C3%B1%C2%8F%C3%9C%C3%A1%C2%BA%C2%8F%15%C3%94%C2%85U%C3%85z%C2%93Be)%14%0A%C3%AB%C2%B3aM%04%02%C3%85%16%C2%89%C3%94B%C2%A9%C2%B4~%C3%B3%C3%A8%C2%87%C3%B3%7F%0D%C3%AA%C2%BE%C2%A6l%2FE%7F%1B%C3%B3%3C%19%C2%8D%C2%BA%26cQ%0F%C2%9BP%C2%BDx%C2%85%C2%99%C2%99G!%1E%C3%8C%19S%C3%88%10%03%08%C3%81%C3%98%02%13%C3%97n%05%03%C2%9CloLWE%C2%83%C3%B2G%23%C3%8E3_%C3%BD%C2%B6%17%C2%B3!%5EN%C2%94%11%14%C2%AA%C2%8C%01%C3%84%C2%95%C3%B6DF%C3%AF~%C2%9F%C2%B1_%C2%99%C3%BE%C3%AA%C3%89F%C3%A5D%26%C2%A3fl%08%19%C3%A2%2B%C2%94%C3%AD%23%C2%9E%C2%96%C2%96%C2%9BQ%C3%85%C2%9E%C2%9Fs%C3%B6%5Dc%1F%C3%AD%C2%A9%C3%AB%C3%82t%C2%9B%C3%90%C3%8B%C2%98%2F%C3%A6%C2%AA%C2%B2%5C%C2%B6%C2%B4%C2%A0%18%C2%B7%C3%A7b%C3%94K%06*%C3%9F%C3%AD%C3%9F%01%C2%85%C2%A9%C2%83-%7D%60H%C3%89%16T%C2%92%C3%B7%19%0C%06%C3%9A%C3%A3%C3%88%C3%B1)-%C2%90a%20%0B%15Z%C3%83FCR%24W%C3%BF%08%C2%81%C3%B5%C3%8B4%1D.Z%C3%96%C2%AC%C2%B2M%14%C3%88%17%09%3D%3D%C3%A2%C3%937%C3%84%05%C2%96%C2%83%2B%0B%C2%9D%C3%A7%2B%C3%8A%1E%C2%A5%C2%AE%C2%A7%C3%8A'I2%C3%98%C3%97%C3%97%C3%A7I%0BJ%C2%AF%C2%AF%C3%AA%C3%821%20%C3%B2%02%0Cy!%C2%A0-1%C3%AA%2BtFf%5D%1A%C2%89%40%C3%A3%C3%8B%C3%97%C2%A0%3Er%C2%88~n%C3%A9%7D%C3%92ukS%05%C3%8C%12%0Bb%C3%AA%7C%C2%9F%C2%A1!%C3%AE%07%C3%A5%C3%85V%10w%C3%B7%18%C2%9B%03%C3%93%C3%86%07%C2%B5%C3%95I%C2%A0R%C3%A5%C3%8F%C3%8D%C3%8D%C2%B9)P%C2%A7%C2%B2R%C3%9F%C3%AE%C2%81%0FP%C2%AAT%C2%82%C2%AA%C3%93Jw%C2%9C%C3%A3oLS%C2%91%C2%B3%C2%B0%C2%BF%7F%00%C3%A4%C2%87%0FB%C3%81%C3%89%13%C2%B0%C2%BA%C3%AB%06%0D%12%7BN%22z%C2%BA%C3%96%5B%5D%09%1A%C2%8A)Is%C3%8B%C3%AFt23%03%C2%BD%C3%9B%C3%AA%16%18%C2%90I%01Y%C3%99%7F%C2%BF%07%C3%8455%10%C3%AA%C3%AE%C2%81%C3%97Z%0D%C3%9D%C2%B3%06%C3%A5%C3%B1%0C%C3%92%14%1E%18%C2%9F%C3%9AK%0DF%C2%95%C3%8F%C3%AF%C3%B4D%C3%83I6a%C2%95%C2%8A%C3%80z%C2%AF%C2%9B%C2%B6)%2B%C3%9A%C3%94%C3%B0P%C2%92%404%C2%8C%C3%95%C2%82%C2%B8%C2%BE%C3%A1r%C2%87%05s_'%C3%9A%C2%94g0%C3%A9%3F%C2%A9%C3%B2%C3%91%C2%A62%C2%82r%C2%B9%5Ct%C3%A5%C3%97VZ%5E%0F%C3%A2%15%20%C3%BB%16%C3%B4%C2%B9%C3%9E%C2%BDu%2FJ%C2%B8R9%0D%C3%BE%C3%85%C3%88%C3%BB%C2%B4%C2%89%C3%96%05%C3%A0%C2%A6%C2%BC%C3%8FM%C3%A7%C2%BE%C3%91%C2%A1E%C3%ABl%C3%B2%C2%89l%5C%C2%96K%C3%96%C3%8F6%19%C3%BF%C2%8F%C3%A8%C3%8B%1ET%C2%91PDG%7B2%16%0B.%0BPX%C2%AB%C3%A1i%07%C3%A7T!%C3%B8%C2%8Cs%C2%9C%C2%9A%2F%C2%BC%C3%ACl%C2%B9%C2%8D%C2%AA%C2%BB%C3%8C%7C%C2%ABR%C2%8BJ%7D%0E%C3%87o%C2%B1%C2%98%3BS%C2%AD%C3%86%C3%9B%C3%BB0%11_%2F.%C2%B1%C2%94%C2%88%08%23_%C2%86%10%10%C3%83%C2%92%23%18%C2%B0%C3%A5%24%C2%A2%3F.Y%7F%C2%ACV%221%C3%A3%C2%B1)%C2%B1%C2%B4%C3%A5bC%0C%C2%98%C3%B9%C2%90r%C3%A9O!%C2%833(%3C%C2%8A'%0ANw%C2%9Cbk%C2%A82d%C2%88-%C2%86q%06%C2%85%C2%B6%C2%93%C2%8E)%2C%C3%BE%C3%99O7%11%C3%BF%C2%A3%1FA7%C3%97z%C2%9F%C2%97%C3%BA%C3%B0%40I%C3%99%C2%94%C3%93%C2%A6%C3%96%C2%98%C3%B1H%C2%9E%C3%A0%14%C2%B9%C2%8FSx%3F%C3%84'%C3%85%C3%AC%C3%B84lk%C2%9D%1C%C3%9F%C2%87%C2%A7%C2%9D%5C%C3%9FSQ%C2%83%C2%92%06%C2%85%17Vx%3F%C3%84G%00%C2%AA%C2%82o8%60%C2%BB%C2%9FB%1C8_%C2%967y%C2%82%C2%84%3B%C3%8F%C2%B3X%C3%8D%C3%A6)%C3%9D%05%C2%A8%C3%BE%C2%86%C2%B9%C3%B3%C3%BC%25%C3%80%00o%0F%C3%96C%C2%91D%3E%C2%B8%00%00%00%00IEND%C2%AEB%60%C2%82";
var image4 = group8.add("image", undefined, File.decode(image4_imgString), {name: "image4"});

var LoopKeyframesButton = group8.add("button", undefined, undefined, {name: "LoopKeyframesButton"});
    LoopKeyframesButton.text = "Loop Keyframes";
    LoopKeyframesButton.preferredSize.width = 210;

// GROUP9
// ======
var group9 = ButtonGroup5.add("group", undefined, {name: "group9"});
    group9.orientation = "row";
    group9.alignChildren = ["left","center"];
    group9.spacing = 10;
    group9.margins = [44,0,0,5];

var LoopKeyframesDropdown_array = ["Pingpong","Cycle","Offset","Continue"];
var LoopKeyframesDropdown = group9.add("dropdownlist", undefined, undefined, {name: "LoopKeyframesDropdown", items: LoopKeyframesDropdown_array});
    LoopKeyframesDropdown.selection = 0;
    LoopKeyframesDropdown.preferredSize.width = 208;

// BUTTONGROUP5
// ============
var divider4 = ButtonGroup5.add("panel", undefined, undefined, {name: "divider4"});
    divider4.alignment = "fill";

// BUTTONGROUP6
// ============
var ButtonGroup6 = tab1.add("group", undefined, {name: "ButtonGroup6"});
    ButtonGroup6.orientation = "column";
    ButtonGroup6.alignChildren = ["left","center"];
    ButtonGroup6.spacing = 0;
    ButtonGroup6.margins = [0,3,0,0];

// GROUP10
// =======
var group10 = ButtonGroup6.add("group", undefined, {name: "group10"});
    group10.orientation = "row";
    group10.alignChildren = ["left","center"];
    group10.spacing = 10;
    group10.margins = 0;

var image5_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C3%87IDATx%C3%9A%C3%ACXML%13A%14%C2%9E%C3%BEYh%5C%C3%B9%17Z~Z%C3%84%60%C2%A4%C3%86%C2%9FTH%C3%AA%059%C3%A8%C3%81%14o%C3%84%60H%2C%C2%97r%20%C3%86%60MH%C3%94D4%C3%91%C2%93%C3%AB%C3%85%13%7B%C3%82%C2%A4%C3%91%C2%90%1A!B%C3%A4%08%C3%86D%22%C2%B41%12%C3%80%C3%98%18%C2%ADQ%C3%98(%22%C3%A8B%C2%B1%C3%9A%1F%C3%A7%C2%AD%C2%9D%C2%B2!mw%C2%B7V%C3%8A%C2%81%C2%97%C2%B43%3Bo%C3%9F%C3%9Bo%C3%9E%7B3%C3%B3%C3%9E(%10%C2%A6%C2%9E%C2%9E%1E%13n%C3%AC(%C3%BB%C3%94%C2%87%C2%B1%C3%B8%151%40%2FC%C2%A1%C3%90Z%20%10%C3%B0%06%C2%83%C3%81%C3%B9%C3%8DF%C2%A2%C3%95j%0D%3A%C2%9D%C3%8E%C2%A2V%C2%ABs%C3%B1%C3%A3%115X%08%00%C2%B9%5C%C2%AE%C2%B3~%C2%BF%C2%9F%C3%8B%C2%96%C2%89L%26%13%C3%95%C3%96%C3%96v%1F%03%C2%B3%2Ba%00%2C%C2%94I%40S%C2%95%7Bo%C2%9F%C2%A3%C3%B2%0Drd%C3%A0%C3%BB%C2%80%03%C3%BA%3C%C2%A8L%C2%BB%C2%ACH%C2%A5%3A~%C2%AB%C2%A8%C3%B4%C3%B1%C3%B3%C2%8A%3DNk%C2%8E%C2%8E%C2%92*Gp%C2%A8%C2%A5%0A%C3%80%C3%8C%C3%8F%C3%AC%C3%8Ck%C3%8CU*%25%7F%C3%84%C2%A8%C3%96%C2%B4%C3%B6%C2%97U%C3%98%C2%A6%C2%83A%C3%A6%14%C3%BB%C3%A1%C2%81T9QPW%0AJj%C3%9B%C2%A8%7C%C3%A7.%C2%A5%C3%92%C2%92%C2%8E%C3%95THA%1D%C3%92%C3%A68%C2%B1K-%07%3F%C2%BE%C2%BD%C3%B4%C3%8F%C2%A0%1E%C2%96U6c%C3%B3_%23%C3%8F%C2%8B%C3%A1%C3%B0%C3%98b%24%C3%AC%13SZ%C2%AB%C3%99%C3%A1%20%C3%BD0%C2%8Ar%19%C2%B3%14X%C2%88%00%020%C3%B4%C3%B2%C3%97%3B%C3%B7%C2%B8eI%C2%B17g%C3%9A%C3%87%C2%83b%C3%83%C2%A1%C3%A1%C3%B3%0B%2C%3D%C3%BE3%20k%11%25%05%05.%23%C2%80%C2%A4%C2%9A%5Dh%C3%91%C3%BE%C2%95%C3%AF%C3%8C%C3%8D%C2%A5%05_%3A.W'%0Bj%12C%60!%C2%B9J%C3%85%261Z%5E%C3%AD%00%17%C3%BB~%C3%BFb%C2%9A%C3%A6%C3%9E3%1B%C3%B9%C3%8ADB%C2%B0%C3%8A%C3%88%C2%8C%C2%A5%C2%BA%2C%C2%93%C2%94%10%14Y%C3%B6R%C2%82z%C3%93%40e%C2%9B%C2%B6A%C2%A5%C2%B5%C3%BA%C3%ACv%C3%BB%C3%9F%5D%7B%C3%AA%C2%B5%01%7D%5BF%C2%A8t%C2%B7%C3%81~%C2%A2%C3%91%C2%92%C3%A2%10e%C3%87%C3%86%C3%86%C3%A6%C3%BF%2B(%C2%AB%C3%95%C3%9A%1B%C3%9B%C2%86%11z6%C2%8E%C2%90y%C2%BF%0D%C2%8F%C3%99R%C2%A4%1B%C3%8C%C3%80%C3%80%00%0F%C2%BA%C2%A0%C2%A0%C2%A0%23%1A%C2%8Dzfgg%C3%B9%25%5EWW%C3%A7P(%14G%C2%97%C2%96%C2%96x%C2%9D%C2%83%C2%83%C2%83%0C%C2%9Et%2F%C3%B0%C2%BF%C2%9C%5CWId%C3%8Cf3%23%C3%B9%C3%AC%13%23%C2%86a%C3%A8x%C3%9A%C3%98%C3%97%C3%97199%C3%89B%C2%BF%C2%BE%C2%BE%C3%9E%2B%C3%A4%C2%8F%C2%8C%C2%8C%C3%808%C3%8FoA(%C2%8E%C3%8A%C3%A3%C3%B1%C3%90%C3%93%C3%93%C3%93%3EY%07%C2%B2%18uww%C3%87%15%C2%B6%C2%B7%C2%B7%7B%05%C2%AC%C3%B9%C2%8D%7C%C3%ACj%C2%9E%C3%9FR%5E%1D%7F%C2%A9%C2%B0%C2%B0%C3%90%C2%80-%C2%BE%C2%82%C2%BB%C3%9E%C2%8C%C2%81%1A%1D%1Dm%C2%86%C2%B6%C2%A9%C2%A9ihff%C3%86111%C3%81%2Bohh%C2%B0%C2%80K%08%C3%9F%C3%ADv%7B%3B%3B%3Bm%3C%C3%BF%C3%AA%C2%8D%C2%B8%3CEQz%C3%9C%24%C2%B7%14%C3%89%C3%BC%C3%90%C3%AA*d%C2%8Dz%C3%9C%C2%B2x%2Ci%20s%1C%C3%87VUU%C3%95%C2%92g%C2%83%C3%81%60%C3%81%C2%B3fI%1FZ%C3%827%1A%C2%8Do%C2%84%7CB%1A%C2%8D%C2%86J%19%C3%A8%5D%5D%5D%1D%C3%A4lB%C2%90~%C2%BC%C3%B0%0Cu%3Dr3%C2%A9%2CE%C3%93%C3%B1%C2%90%C3%A2%C2%83%5D%C3%80%1A%C2%82%C2%BF%C2%9A%C2%9A%1AZ%C3%A0%C3%AAu%C3%BD%C2%89e%C2%B67%C3%8F%C2%AD%0F%C2%AAH%C2%A9%C3%A2%C3%A3l-%12%C3%A1%C2%B6%04(%C3%88%C3%95%C2%A0%C3%9A%C2%81%3EN%04%C2%9FJN%C3%B2b%C2%89%17%23VP%C3%A0%C2%BC%C3%8B!7%2Bu%C3%A6%17_%C2%84%C3%B6G%24%C3%A2M%C2%96%C2%AB%C3%89%C3%9E%C2%A7%C2%A0%C2%8E%C2%BB%5B%C2%A2w%C3%AAUj%C2%9B%5C%0B%01%20b%25%17%C2%B7L%C2%A7%5Db%09%C3%A9%C2%89%C3%9E%C3%98z%40%C2%ABu%40%C3%99%24Lm%C2%A5%C3%84%10%01%03%C2%84%0B%C2%89%C3%AB%C2%A9%C3%B2w%C3%89%C2%A0%C2%A0%14%17*NTN%C2%89%11%C2%B8%0C%2C%24VPH%06%05%C2%B1%C2%93%C3%88R%C2%90%C3%BC%C2%8BW7!vh%C2%95%C3%B3J%C3%8D%C3%B7e%C2%B9%0F%0AJ%1CS%C3%83tq%C2%99%03Jr%C3%81%C2%A2%C3%88%C3%BC%3E%05%C3%B7CR%05%C2%A0%C2%B0%3C%C3%B6%C3%A9%1D%7Dy%C3%B1%C3%B3i%C2%A8v2%7DO%C2%85%C2%9B%3C%1E%14%5CX%C3%81%C3%BD%C2%90%1C%05%C3%A0%0A%C2%B9%C3%9B%C2%81%C3%98%C3%BD%14%C3%A0%C2%80%C3%BE%C2%96%C2%BC%C3%89S%C3%80%60%0C%C3%98%05%C3%BC%3B%C2%9C%C2%A5%C3%A3%0E%17%04%C3%A8%15%C2%8A%C3%9Dy%C3%BE%11%60%00%C3%BF%2C%C2%B3%0ANQ%C3%8E%04%00%00%00%00IEND%C2%AEB%60%C2%82";
var image5 = group10.add("image", undefined, File.decode(image5_imgString), {name: "image5"});

var LoopCompositionButton = group10.add("button", undefined, undefined, {name: "LoopCompositionButton"});
    LoopCompositionButton.text = "Loop Composition";
    LoopCompositionButton.preferredSize.width = 210;

// BUTTONGROUP6
// ============
var divider5 = ButtonGroup6.add("panel", undefined, undefined, {name: "divider5"});
    divider5.alignment = "fill";

// BUTTONGROUP7
// ============
var ButtonGroup7 = tab1.add("group", undefined, {name: "ButtonGroup7"});
    ButtonGroup7.orientation = "column";
    ButtonGroup7.alignChildren = ["left","center"];
    ButtonGroup7.spacing = 0;
    ButtonGroup7.margins = [0,3,0,0];

// GROUP11
// =======
var group11 = ButtonGroup7.add("group", undefined, {name: "group11"});
    group11.orientation = "row";
    group11.alignChildren = ["left","center"];
    group11.spacing = 10;
    group11.margins = 0;

var image6_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02bIDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg%C3%B4v%09%3B%3B%C2%BB%14%17%17%C2%971%0B%0B%0B'%C2%90k%C3%88%02%0A!%C2%90%C2%83%C2%96%2CY%12%C3%B5%C3%A0%C3%81%C2%83%C3%8F%03%15D%0A%0A%0A%C2%BC111%C3%8B%C2%80%0EK%60%02%09%C2%80Bh%20%1D%04%02%20%C3%BBA%C3%AE%00%C2%B1A!%C3%85%C2%80%1Ce%09%09%09%C3%86%40W%1B%C3%93%C3%911g%17%2CXp%16%C3%99%1D%2CX%C2%82%C3%91XRR2%C2%8D%C2%8E%C2%814%0B%C2%88%C3%8F%22%0B01%0CB0(%1D%C2%85%11%7D%C3%80%22b%164HGCj%C3%94QTIS%7Bd%C2%94%C3%92%C3%94%C3%98%C3%98%C3%93%3Ehk%C3%AE%C2%A4%C2%87%03%5E%C2%9D%C2%BF%C3%B0%C3%90%C3%A5%C3%89%C2%BDYx%1Du%C3%8D%C3%92%C3%B44%C2%87%C2%AC%C3%9C%C2%9F%C3%AFR%C2%92%C3%AF%C3%A8%C3%A1%C2%A8%C3%AB%1C%C2%AC%0F%19V%C3%9F%C3%83%1F%7DZ%C3%87O%C2%9B%C2%8A%1F%3A%C3%AA%C3%BEYI%C3%A1%C2%9D%C3%B8%C3%81%23%C2%A6%C2%B4%C2%A4%15V%C2%AC%C2%89%04%C3%99G0M%C2%9DPU%3A%C3%BC%C3%B3%C3%8D%C2%9B%0F%2F_%C2%BE%C3%BC%C3%88t%C3%B9%C2%8A%08-i%C2%90%3D%20%C3%BB%C3%90%C3%9D%00j%C2%BA4%C2%BC~%C3%BDZr%C3%AA%C3%94%C2%A9%C2%B3%06%3A%C2%81ggg%C2%A7%C2%89%C2%8A%C2%8A%3E%1F-%12%C3%88.%12zE%C2%A5%C2%8C%C3%B5%C3%999%C2%8C_(%C3%88%C3%9D%C2%A5%C2%87%03%5E%C3%9E%C2%BC%C3%B5%C2%A1%C3%B8%C3%B5%C2%B3%C2%B3x%1D%C2%A5**%C2%AA(%C3%8F%C3%85%C3%AD%2C%C2%A0%C2%A8%C3%84K%0FG%C3%B1%C2%BD%7B%C3%BF%C2%90%C2%81%C2%90%C2%A3%3E%09%09%C2%BE%7Fif%C2%BA%C3%B3%C2%95%C2%8D%C3%A5%1DZ%3BH%C3%AC%C3%88q%15%C2%90%7D%04%C3%93%14%C3%90%C3%A5%C2%82r%1B%C2%B6d%C2%81%C3%98%26%25%C3%95%7D%C2%B4%C2%A4A%C3%B6%C2%80%C3%ACCw%03%C2%B3%03%10%00%C3%9B%C3%86%C2%BC%C2%A7O%C2%9F%06%07%C3%A1EQ%C3%A1%7B%C3%AC%C3%AF%3F%C2%9E%5C%C3%BB%C3%B2%C3%99%C2%8D%C3%AF%C3%B7%1F%1E%C2%A55%C3%9D%C3%8D%C3%8Dv%14X%24%C3%BD%01%C3%99mfff%C3%8C%C3%8D%C3%8D%C3%BDe%C2%B4%C2%9C%1A%5E%C3%A5%C3%94*)y_-6v%C2%9F7j%C2%AA%C2%A7%C3%A9%C3%92t%C2%B9r%C3%A5e%C3%98%C2%B3%C2%87%C2%9B%C3%B1%3A%C3%AA%C2%85%C2%B5%C3%85%13)Y%C2%B9%C2%93%C2%BF%C3%A9%C3%94ty%C3%81%C3%8F%C3%B3%C2%84a%C3%B5C%C3%BC%C3%91%C2%A7p%C3%B5%C2%862%C3%9F%C3%AD%C2%BB%C3%8A%C2%A0%C2%A6%05%C3%A7%C2%B3%C3%A7B%C2%B4%C2%A4AM%18%C2%90%7D%04%C3%93%C3%94%25q%C3%91%C2%AB%C2%B0%C2%A6%C2%85%C3%80%C2%BA%C2%8D%C3%A6%C2%B4%C2%A4A%C3%B6%C2%80%C3%AC%1Bm%C2%BAP%C2%94%C3%BB%40%C3%A3C%C2%83%C3%811Pw%7C%03%C2%87%14h%C3%80%0A4%3E4%C2%90%0E%02%C3%99%0Fr%07%2CM%0D%C2%BA%C2%91%3CF%C3%A8%C3%B8%01%C3%88a%C3%B9%40l0%40%01%C3%B5%01%C3%94%16%60%C2%80%C2%8Ey%02%04%18%00%C2%B4APO3%C2%90%04%C2%9A%00%00%00%00IEND%C2%AEB%60%C2%82";
var image6 = group11.add("image", undefined, File.decode(image6_imgString), {name: "image6"});

var DuplicateLayersButton = group11.add("button", undefined, undefined, {name: "DuplicateLayersButton"});
    DuplicateLayersButton.text = "Duplicate Layers";
    DuplicateLayersButton.preferredSize.width = 210;

// GROUP12
// =======
var group12 = ButtonGroup7.add("group", undefined, {name: "group12"});
    group12.orientation = "row";
    group12.alignChildren = ["left","center"];
    group12.spacing = 10;
    group12.margins = [50,0,0,0];

var statictext4 = group12.add("statictext", undefined, undefined, {name: "statictext4"});
    statictext4.text = "Num";
    statictext4.preferredSize.width = 30;

var DuplicateLayersSlider = group12.add("slider", undefined, undefined, undefined, undefined, {name: "DuplicateLayersSlider"});
    DuplicateLayersSlider.minvalue = 0;
    DuplicateLayersSlider.maxvalue = 100;
    DuplicateLayersSlider.value = 50;
    DuplicateLayersSlider.preferredSize.width = 130;

var DuplicateLayersTextbox = group12.add('edittext {properties: {name: "DuplicateLayersTextbox"}}');
    DuplicateLayersTextbox.text = "1";
    DuplicateLayersTextbox.preferredSize.width = 30;

// BUTTONGROUP7
// ============
var divider6 = ButtonGroup7.add("panel", undefined, undefined, {name: "divider6"});
    divider6.alignment = "fill";

// BUTTONGROUP1
// ============
var ButtonGroup1 = tab1.add("group", undefined, {name: "ButtonGroup1"});
    ButtonGroup1.orientation = "column";
    ButtonGroup1.alignChildren = ["left","center"];
    ButtonGroup1.spacing = 0;
    ButtonGroup1.margins = 0;

// GROUP13
// =======
var group13 = ButtonGroup1.add("group", undefined, {name: "group13"});
    group13.orientation = "row";
    group13.alignChildren = ["left","center"];
    group13.spacing = 10;
    group13.margins = 0;

var image7_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%05%5DIDATx%C3%9A%C3%8CX%5BH%23W%18%C2%9Edc%C3%A2%25%C2%93h%C2%BA%C2%B1%26%C3%955%C2%8B%C2%A2%C3%A2%C2%BD%C3%8C*%C3%B8%C2%A0%C3%95m%C3%9FT%C2%B4P%0B%C3%AE%C2%8B%C3%B1e%02Z%10%C3%9D%05%C2%A1%2FF%C3%BA%24h%C3%BBd%C3%81%C2%BChA%C2%BA%20%C2%85%3E(%C3%B8%22%18%15%C3%B1%C3%81%1D%C2%AA%C2%A2%C2%AC%06i%C2%B5jBM%C3%B1%165%C3%A6%C2%A2%C3%B6%C3%BFcNv%26%C3%89%C2%B2%C2%99%C3%95%5D%7B%C3%A003%C2%87s%C3%BE%C3%B9%C3%A6%3F%C3%9F%C3%B9%C3%8EwFBA1%C2%9B%C3%8D%06%C2%B8%18%C2%A9%C3%BB%2F%23%C2%80eK%12%04%C3%B4%C2%87%C3%9F%C3%AFw%C2%9F%C2%9F%C2%9Fs%1E%C2%8F%C3%87%C3%BE%C2%B1%C2%91(%14%0A%7Dbb%22%23%C2%93%C3%89%12%C3%A0%C3%B1s%19f%08%01%C2%8D%C2%8E%C2%8E%3E%C3%9B%C3%9A%C3%9Ar%C3%B1%3B3%0CSO%C3%93t%5Dx%10%C2%9F%C3%8Fg%C2%9B%C2%9F%C2%9F%1Fx%C3%87%C2%BB%C2%98%C3%AC89%C3%95%C2%AE%C3%96%C3%84%C2%82%C2%8B%C2%93%26%C2%AB%C2%AD%C2%A7%C3%9F%7C%C3%9D%C3%A3%C2%8B%C2%8F7%22(%0A3%C2%84%C2%80jjj~%05%C2%80%C2%B6%C2%B9%C2%B993%C2%B6%C3%8B%C3%A5r%5D%C2%B5%C3%9B%C3%83T%C2%9E%C2%9C%C2%85F%C3%BF%C2%AD%C2%90S%C2%BF%24%2B%05%11%C2%AF%C2%AF%C2%AF_%C2%85%C3%B2%3F2bjmm%C3%A5TR%C3%A9%C3%90%C3%8FZ%3DU%20W%C3%84%C2%96.%3FE%C3%8D%C3%AC%3A(%5B%C3%B6cJ%C2%8A%C3%8Fd%C3%8A%C2%96%C2%96%C2%96L%C2%90%C3%82%C2%9C%C3%8A%C3%8AJ3%C3%A9%C2%AB%C3%B5%5DRynO%C2%A8%3E%C3%B2x%23%C3%A2I%24%C2%92'%7B%7B%7B%13X%11%10%C2%B6%C3%BD%C2%96%C3%B6(v%40%C3%81B%C2%9F%C3%9E%7C%C2%BC%C2%94%C3%9Fxxx%C3%A8%C3%9A%C3%9F%C3%9F%1F%C2%809%C2%AE%C3%8B%C3%8E%C3%8E%C3%8E%C2%895X___Nrrr%C2%A0VWW%C3%93%C3%98%26%16%10%C2%BF%08%40!%C2%90%C2%B4%C2%B4%C2%B4~%00%C3%97%C2%BB%C2%B9%C2%B9i%C2%8B5H%5E%5E%C2%9E%5E%C2%A9T%3E%C3%83%C3%BB%C2%96%C2%96%C2%96%C2%9C%C3%9B%12_%C3%86%7F%C3%90%C3%AB%C3%B5%C3%AC%C3%91%C3%91%C3%91%C2%8F%1C%C3%87%C2%8D%C2%93%C2%B6%C3%97%09%C3%B0%C3%85%1Au%C2%A8%C2%8F3%C3%AE%C2%81%20%00f%C2%A6%C2%AA%C2%AA%C2%AA%19x%C3%95%0Fc92%7Dw%06jvv%C3%B6%05%C3%BF%C3%B9%C3%A4%C3%A4%C2%84%C3%A3T*%0B%C2%A7%10%02%C3%B1%C2%BA%5C%0Ero%C2%B5Z%5D)))%C2%A6%C3%B0%C3%80%C2%9Fmm%3C%11%0B%C2%A6%C2%BD%C3%B6%2BVK%40%01%C2%87%C3%AA%C2%8D%C3%86VFL%C2%80%C2%A2%C2%A2%C3%A2%C2%BA%0F%C2%A1Wp%C2%B1%04%40%C2%81%0C%C2%80%24%C3%BC5~%C3%9Fr%C2%AER%C3%91%C3%B5%C2%A1%C3%A9%C2%BB%C2%BC%C2%BC%C2%B4%2F%2F%2F%C3%9B%C2%80%C2%B0%C3%8DN%C2%A7%C3%93JH%5EQQ%C3%81%26%25%25%C2%B1%11%C2%92%02%1F%01%C3%93f%0A_%C2%81%C2%93%C2%93%C2%93%0E%C2%9C%C3%8E%60%13%5BZZJ566%C2%8A%C3%81%C2%A5%13p%0A%C3%A5%C3%80%C3%AB%C3%B5%3A233%C2%87%C3%A0%C3%91D%C2%80%15%14%14P%C3%B9%C3%B9%C3%B9o%C2%88%C3%AEtRSSS%C2%82H%20%23%C3%BDZ%C2%AD%C2%B6%3A55%C3%95%04%C2%A0%02D%C3%8F%C3%88%C3%88%60a%25R%C2%B0%7D%C3%84%C2%8C%C3%A8%C3%B4%C3%B4%C2%94r%C2%B9%5C%13%02I%C3%80U%C2%87%C2%AB%0F%C2%81%C2%89%C3%91)%00%C3%B3%02W%1E%C2%BF%C2%AD%C2%AB%C2%ABK%14%C2%A0%C2%B7%C3%AA%14%C2%96%C3%A3%C3%A3%C3%A3%0D%C2%BC%C2%AA%C3%95%C3%AA%C3%9C%C3%9B%C3%B0%C3%A3%7D%01E%15O%C3%8CR%C2%B8V%7D%C3%AC%12%C3%A2Tzz%C2%BA%3E%C2%9Ax%C3%82F%C2%8D%C2%9C%C3%A1%3B%C2%84%C2%A8%C2%81%0E%0E%0El%C3%90%2F%C3%A42p%C2%93%17%0B%068%C2%AD%17%C2%80%C3%9A%C3%9D%C3%9D%C2%B5C%15%C2%88%C3%A7%C3%8E%C3%8E%C3%8E%04%0Ah%C3%B8%60%C3%98%C3%80%5D%C3%A1mYYY%02%2B%C3%93%C3%99%C3%99i%12-%C2%9E%C3%AD%C3%AD%2C%2C%C2%98%1BP%C3%B1%C3%B1%09%2C%C3%8B%C2%9AX1%01%C2%9E%3E%C3%BD%C3%B2%C3%8E%C2%A7%0Dp%C3%A0%C2%A57%00%C3%AA%C3%A2%C3%82m%C2%B1X%C2%86%2C%C3%A1%C2%9DpJ%C2%81%C3%B0%C2%BAh%C2%99%12%C2%B3a%C2%8B%C3%89%14M%2B%C3%9FL%1F%C3%AC_tQQQ%C3%8F%C3%99%C3%99%C3%99%0C%C3%A1%14hM%5D%C2%A6B%C3%81%3E%04O%15%C3%A2%C2%8ATJ%C3%BD%C3%B9%40%C3%82%01%C2%A8%08%C3%B1%2C%2F%2F%C3%8F%05%C2%A3H%C3%B88%C2%84%C2%AE%C3%B3%3B%C3%B5'1%C2%83Z%C3%BA%C3%A7_%C3%BD%C2%86Vk%11%C2%88%C2%A7%C3%9Dn%C2%B7%C3%A0%C3%AA%03%1BL%11%60%C2%95'%C3%A7T%C3%A3%C3%81qh%C3%A0%3A%C2%B8%C2%86%1F%3E%C3%95D8%C2%85%C2%8E%C2%8E%C2%8E%01%C2%B7%C3%9B%C2%8Df10%C3%AE%5B%C2%A5%C2%9A%C3%B9%3EE%2B*SJ%C3%BFe%C2%A4K%08N%C2%89%C2%89%00%C2%8B%C2%B5%C2%8C%C2%8D%C2%8D%C3%B5%C3%80%C2%82%C3%98%C2%88%C2%8B%C2%8B%C2%A3I%C3%9BO%0F%C3%93%C3%AEF%C2%A7%C3%B8%C2%A2ID%C3%B4%5Demm%C2%8D%05%C2%A1%C3%94ooos%08%C2%AA%C2%AD%C2%ADM%7F%5BnI%C3%83O%2F%60i%C2%BB%C3%A0%05%C2%A6X%C2%89%0C%C3%9A%C3%A4%C2%80%C3%BEV%C2%9DN%C2%97%0B%C3%BE%C2%9E.%2B%2B%C3%93%C3%9D%C2%A9x%C3%A2%C3%A9%25%1C%C3%90%C3%AF%1AU%C2%A0%C2%86%C3%99%C2%84%C3%90-!6f%C2%A8%C2%A9%C2%A9%C2%89!%C3%8E%C3%93%C3%A6%C3%B3Z%C3%84%C2%82%C3%99K%C2%8C%0Fp%06%0F%C2%A3fPcfee%C3%A5%C3%9E%C3%BDTqqq%C2%BDF%C2%A3%C3%A1%02%C2%99%C2%82%C2%B43%06%C3%83c%C3%9D%7D%C2%83%02%1C%C3%88%C3%87%1BP%20%C2%86%C3%A3%23%23%C3%83%11%C3%A9%06%2F%C3%85%C2%A8T*%26%C3%8A%1E%C3%A5%C3%B8%10%1B6%C2%8A%C2%A7%C2%80S(%C2%9E%C3%A0%14%C2%87%C3%B8'd%04d0%18X%C3%B0K%C2%A1%C2%81%20%C2%AE(%1D%1C%C3%91%23%C2%B2%02a3g%C3%A0%C3%A0%C3%B1%C2%B2%C2%A1%C2%A1%C3%81%1Al~e4%1A%C3%91%C2%BD%C2%8A5y%C2%BDR%C2%BExF%3B!%23%20t%C2%9E%C2%A4%02%C3%88%C2%88%C2%83(%C3%88%C2%88%1E%01%C3%95%C3%96%C3%96%C3%B6%C2%90v%C2%B1%C2%80%C3%9E*%09%04%18%C2%AC%C3%82%2F%C3%90%C2%9F%C3%87%12%C2%A0%C2%BB%C2%BB%C3%9B%06%2B%C3%97%0CY%C2%A5%2F..BG%C2%AF%C3%B7%05%14U%3C%0B%0B%0B%C2%9F_%5D%5D9%C3%96%C3%97%C3%97_%C3%86%1Adzz%C2%BA%1E%3Fbpp%C3%90%7C%17%C3%9C%C2%92%C3%B2%C3%8E%5B%14N%1BN%1Ff%0B%C2%B3F8%C2%84%C2%87%05R%C3%81%04%0A%02%2C..6%C3%83%C3%9E%C3%97%03%5Ct%C2%81%C3%BFy~%1B0%C3%BE%1B%C3%BDS%C3%8B%C2%82~%C2%9A)))%C3%89%01%C2%BD%1A%C2%87M%C3%99F%00%C3%A1*CRC%C2%8D%C3%B8%3FE%C3%AE%C2%87%C2%87%C2%87gVWW%23%C3%94%7FaaA%C2%94%C3%89%C2%83%C3%84%C3%90%C2%B0%2B%C3%B4%10%C3%B1%C3%BC%C3%9F%C3%BD%C3%89%C2%93%C3%B0%C3%BEyv%40-%C2%BD'%C3%9DDN%2C%C2%93%7F%C2%9E%C3%BF%090%00-%10%C2%98P%3Ay%08%C3%9C%00%00%00%00IEND%C2%AEB%60%C2%82";
var image7 = group13.add("image", undefined, File.decode(image7_imgString), {name: "image7"});

var RandomizeLayerOrderButton = group13.add("button", undefined, undefined, {name: "RandomizeLayerOrderButton"});
    RandomizeLayerOrderButton.text = "Randomize Layer Order";
    RandomizeLayerOrderButton.preferredSize.width = 210;

// BUTTONGROUP1
// ============
var divider7 = ButtonGroup1.add("panel", undefined, undefined, {name: "divider7"});
    divider7.alignment = "fill";

// BUTTONGROUP2
// ============
var ButtonGroup2 = tab1.add("group", undefined, {name: "ButtonGroup2"});
    ButtonGroup2.orientation = "column";
    ButtonGroup2.alignChildren = ["left","center"];
    ButtonGroup2.spacing = 0;
    ButtonGroup2.margins = 0;

// GROUP14
// =======
var group14 = ButtonGroup2.add("group", undefined, {name: "group14"});
    group14.orientation = "row";
    group14.alignChildren = ["left","center"];
    group14.spacing = 10;
    group14.margins = 0;

var image8_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%04%C3%8BIDATx%C3%9A%C3%A4X_H%5BW%18%C2%BF%C3%B9g%C2%A2%C3%AE%3A%C2%9D%0AK%C3%98%40%7C%C2%B8%C2%B0%C3%84%07K%60%C3%A0S%C3%A2%5EZ%C2%A8A2*%C2%B6%C2%9D%C3%8C%C2%BE%C2%98%C2%82B%0B%C2%B6v%C3%82%1Er%C3%B3P%10%C2%AC%01%C2%8B%0A%C2%AD%0F.%C3%83%09%C2%99%03%C2%B1%C3%BA%5C%C2%B3'ap%C2%99%03%C3%93%C3%920%C3%84%C2%A7d%C2%A0c%C3%A2%C2%8D%C2%9A%18cv~w%C2%9E%C3%B4z%C2%BD%C2%A9%C3%B9g-%C3%AC%C2%83%C3%8B%C2%B9%C3%B7%3B%C3%9Fw%C2%BF%C3%9F%C3%BD%C3%8E%C3%B9%C3%BE%C2%9C%C2%ABa%08%C3%B1%3C%C3%9FD%C2%86%3B%C3%8C%C3%A5%C3%93%0F%04%C3%8B%C2%A6%C3%A6%04%C3%90%C3%AFGGG%07%C3%BB%C3%BB%C3%BBB2%C2%99%C2%8C%C2%BEo%24F%C2%A3%C3%91RUUe%C3%97%C3%AB%C3%B5%C2%95%C3%A4%C3%B1%C2%8A%1E%1E%02%C2%A0%C3%99%C3%99%C3%99%C3%9B%C2%9B%C2%9B%C2%9B%C3%A2e%C2%B9%C2%A8%C2%A9%C2%A9%C2%89%C3%AD%C3%A9%C3%A9%C2%99%23%C3%80%C3%AEh%C3%81%C2%80%C2%87J%05%C3%94%C3%9B%C3%9Bk%2FE%1F%C3%B6%C2%81%03%C3%B7%12(%C3%B9%C2%92%C3%99l6%C2%8B%C3%9B%C3%BD%C3%B5-%C2%A5%C2%92%C3%83%C3%A1%C2%B0LMM%C2%AD%C2%8C%C2%8F%C2%8F%C3%8F)%C3%A7FFF%C3%B8%C2%B6%C2%B6%C2%B6g%18%C2%95s%C2%90%C2%87%1E%C3%B4%C2%95sW%C2%AF%5Es%12%C3%8A~%0C%C3%85%C2%A1%C3%8F%C2%B5%C3%86%C2%B9%C2%BEH%C2%A7%C3%93%C2%B1*%C2%BC%C2%8F%C3%A4%C3%A3y%C3%B2%C2%94**%0C%C2%AAs%C3%98%C3%A8%C3%BC%C3%96%C3%96%C2%96yrr%C3%B2y%C2%B1%C2%AE%C3%A78%C2%8E%25%C2%9E%C3%A2VWW%23%C2%84%C2%8A%C3%9E%06%03%03%03%C2%9E%C3%86%C3%86%C3%86%C2%98%C2%BE%1C%C2%9B%14%40%C3%88%25%C2%94k%C3%93k%C2%99%0F%C2%90%C3%8A%06%C2%AA%C2%BF%C2%BF%C3%9Fra%C2%A0%10%25j%C2%91b%C2%B7%C3%9B%C3%99%C2%9F%C2%83A%C3%8F%C2%8F%C2%81%C3%80%C2%A9%C3%88%24%C3%91%C3%83%C3%86%C3%A3%C3%B19%C2%B2'_%60%C3%84%C2%B3%7C%1E%C3%B2%C3%90%C2%83~%C2%BE%C2%B6%C3%8E%C2%80%C3%AA%C3%AE%C3%AE%C3%BE%09%C2%97%C2%92%7F%C3%BF%C3%9E%C2%BD%C2%8E%C3%A6%C3%A6f%C2%8F%C3%95j%7D%C3%80%7B%C2%BD%C3%990%C3%B6z%C2%BD%C3%8E%C3%AA%C3%AAj%0E%C3%B7%18GGG%3B%C3%A8%1C%C3%A4%20%0F%3D%C3%A8%C3%A7k%C3%AB%0C%C2%A8T*%15%3B%3E%3E%C2%8E%2B%C3%B9%C3%9B%C3%9B%C3%9B1%C2%8C%C3%A9tZ%0C%C2%BFz%15%C2%93%25%C2%BDSei%7D%7D%3DB%C3%AF!%07y%C2%B9%C2%BE%C2%9C%60%07%C3%B6JJ%09%5D%5D%5D%C2%96%C2%8D%C2%8D%0D%C2%B1%22%C3%BC%C2%9A%C3%B9%C2%AA%C2%B2%C3%9A%C3%BC%C3%B8%C2%9F-%09%C3%80%C3%8A%C3%8A%C2%8A%C2%AB%C2%B5%C2%B5%C2%B5cmmm%C2%B9%C2%BD%C2%BD%7D%09%C2%BC%C3%AF%C3%AB%1A%C2%B9%C2%97%07%7B%C2%B1C%C3%9B%17%0C%C3%B1%14%3B%3F%3F%1F%C2%BD%C2%90%C2%94%40_%0C%C2%83%C3%BD%1F%7F2w%C3%85h%C3%B2%C3%A1%C2%B9%C3%BE%C3%9B%3E%C3%87_%1A%0DS%C2%9F%C3%898~%C3%B9%C3%B4sI%C2%B6%C3%8DT%C3%A5%25%C3%83%C3%AD%C3%87%C2%82%10%11%04%C2%A1%C2%A0%C3%9CUT%C2%9E%C2%82%C2%87%00%08%C2%86%C3%93LF%C3%BC-q%C3%A0%C2%AF%C3%97%C3%A9%C3%8D%7F%C2%A7%C2%8Fb_%C2%9A*%07u%C2%8C%C2%86%5DM%C3%AC%C3%BB%C2%A8'%2F%2C%25%20%C2%AA%C2%B0L%C2%8B%C2%8B%C2%8BN%C3%8A%03%20%00%00%10%C3%8EP%C3%A1%C2%A1%C2%80%C3%80%C2%A72%C2%90%C2%87%C2%9E2*%0B%C3%B2%14%C2%8A*j%C3%98%C3%B4%C3%B4%C2%B4O%5E2%16%16%16%C2%9E%C3%94%C3%96%C3%96JQ%17%0E%C2%87%C2%9F%C2%A7%C2%AFur%C3%B0%10%05%22%C3%95%C2%B9%13%40%C3%A0s%06%C2%A3%C2%83%C3%88%C2%99I%C3%B4y0%C2%87%3DWWWwW%5E%C2%9A%C3%BA%C3%BA%C3%BA%C2%BC%24%10%C3%A2%C3%83%C3%83%C3%83%7CNO%C2%A1%C3%BD%20%C2%86%3BX%C2%96u%C2%A2%C2%96%C3%89%C3%A7(%20%C2%90%C3%85b%C2%B1%1B4%1A%16KF%01e%0B0%C3%B3%1F%1F%C3%B3%C2%90S%C3%93%C2%97%C3%B6%1Cy%3F%C3%AC%C3%80%C2%9E%C2%B2%C3%AD9%05*%10%08%08%3B%3B%3B%C3%8B%C2%A2(%C2%86P%5C%C3%A5s%C2%84%C2%9F%C2%ADm%C3%91hTHe2%22%C3%B6%C2%90%7C%C2%A9%C3%A8%C2%92%C2%82%C2%8Fy%C3%88%C2%A9%C3%A9%C2%83%C3%B0~%C3%98%C2%81%3D%C3%98%7D%C3%A7%C3%B2)%5DI%C3%89%C3%ADv%3FD%C2%A2%C3%9C%C3%9D%C3%9D%15%3B%3B%3BC%24%C3%8A%5C%C3%B2%3D%24%1F%C3%81%C3%87%12%C3%9E%C2%B0%C3%99%C2%96%C3%88%C2%9E%C2%8A%C3%94%C3%94%C3%94%C2%B0%3E%C2%9F%2F%C2%A4%2C%C3%A2CCC%0FK%C2%8A%C2%BEP(%24%C2%92kI%C2%B9T%C2%B9%C2%A2%C2%8F%C3%8A%C3%A0%03%0A%C2%8D%C2%BE%C2%A2R%02%C3%B2%14%C3%92%01%C3%82%5E%C3%9A%C2%B4dSK%7BL%C2%AB%C2%93%00%C3%92%3CE%C3%A4%C3%9E%14%C2%93%16%0A%02E3%C3%BA%C3%8B%C3%B0%C3%AB%C2%98%C2%94%18%C3%9Fft%C3%A6%24%C2%A3%C3%BFz%C3%A3mF%7F%C2%83%C2%8C%C2%8EB%C2%9CoF%C3%8F%C2%99%C2%A7%C3%90SOLL%2C)%C3%B9%C3%BE%C2%B11%C3%A7w%C2%8F%1E%C2%BD%C2%98%22%C3%9D%C3%80g%C2%AE%C3%AB%2C%05433c'9%C3%88%C2%8B%C3%A8%C3%82%C2%88g%C2%9A%60!%07y%C3%A8A_%C3%B9N%C3%98Q%C3%AB%C3%B9%C3%8F%C2%802%18%0Cf%C2%ADV%7B%C2%A6%C3%97nhh0%C3%93%C2%9E%C3%9Bf%C2%B5%C2%9A)%C2%BF%C2%A5%C2%A5%C2%85S%1C%C2%95%C2%B2%C2%AD%08%C3%A4h%C2%8FN%C3%B5O%19'v%60%C3%AF%C3%9C%C3%A5%0B%06%C2%83%C3%9F%C2%A8%C2%B9t%C3%BC%C3%A9%C3%93e%C3%B2%C3%85l%22%C2%91%10y%C2%9F%2F%1B%C3%82%24%C2%82%C2%96%09%C2%B9%C3%90%C2%B6%C3%AC%C3%AD%C3%ADE%C3%A4Q%069%C2%B2tc%26%C2%93%C2%89%C2%85~%C2%BE%C2%B6%C3%8Arp%C2%A0%C2%9D'9J%C2%95t%C2%BA%C2%A6%5DB%C3%99%C3%9A%C3%A1R%01%C3%BD%3F%0E%0E(%C2%AE%C2%A8_%18%2F%04%14%C2%8E%C3%AD7o%C3%9Ez%C2%90%C3%AB%C3%98%C2%AE%C2%96.P%C3%ADql%C3%87%C2%A8%16%C3%B6%C2%B9%C2%8E%C3%AD.B8%C2%BA%C3%A7%C3%A5%C2%A9w%C3%BD%0E%C2%A2%3D%C2%B7%C2%82%17%C2%97%C2%8F%C3%A7%C3%89S%3A%3CL%C2%89%C3%89dBT%C2%8D%3ERd%C3%AD~%C2%BF%C2%9F%2F%C3%B5%C2%AF%C2%8B%C2%B2%C3%9A%17J%C2%83%C2%83%C2%83%3C)%C3%9E%7FJ%C2%9E%C3%82%0F%2B%C3%BC%1F*%C3%A5%C2%85%C2%A5%02%C2%82%7D%C3%A0%C2%A0%C2%9E%C3%BA%C3%A0%C3%BE%C3%A4id%C3%BF%3C%C3%AF%C2%A3k%C2%BD%C2%A4%2C%C2%B0C%C2%AE%3F%C3%A8%3F%C3%8F%7F%05%18%00k.%C2%A4V%7C%0E%C2%97)%00%00%00%00IEND%C2%AEB%60%C2%82";
var image8 = group14.add("image", undefined, File.decode(image8_imgString), {name: "image8"});

var ProximityReOrderButton = group14.add("button", undefined, undefined, {name: "ProximityReOrderButton"});
    ProximityReOrderButton.text = "Proximity Re-Order";
    ProximityReOrderButton.preferredSize.width = 210;

// GROUP15
// =======
var group15 = ButtonGroup2.add("group", undefined, {name: "group15"});
    group15.orientation = "row";
    group15.alignChildren = ["left","center"];
    group15.spacing = 10;
    group15.margins = [43,0,0,0];

var ProximityReOrderTargetButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%C2%80IDATx%C3%9Ab%60%C2%A02%60%04%11%C3%B5%C3%B5%C3%B5%C3%BD%40%C2%AA%C2%80B%C2%B3%26466%162%02%0DK%00r%C3%A6%3F%7B%C3%B6%C2%AC%C3%B7%C3%95%C2%ABW%C2%B7%C3%881ILLLMJJ%C2%AA%18%C3%88Ld%01%12%0A%3F~%C3%BC8%3B%7B%C3%B6%C3%AC%C3%A5%C2%B84%C3%B4%C2%8BH%18%C2%83%C3%A8%C3%827%2F%C3%8E%C3%A2Pr%C2%B6%C2%BC%C2%BC%C3%9C%C2%81%C2%83%C2%83C%C2%81%C2%85%18%17%18%C2%B0s%1A%C3%834%12R%C3%8BD%C3%ADH!h%60%C2%B5%C2%A0%C2%A8%C2%9A%043%C2%8B1%08%C2%83%C3%98%14%19xFV%C2%B9!%C2%9D_p%26%0B%23%03%2F%08%C2%83%C3%98%201%C2%B2%0C%C3%9C%2F%C2%AD%C2%98%C3%86%C3%8F%C3%84%C2%A4%16%C3%BE%C3%A2%C2%89%C3%9F%C2%93%3F%7F%0E%C2%800%C2%88%0D%12%03%C3%89%C2%91l%C2%A0%02%0B%C2%AB%C3%AF%C2%96%C2%AF%C2%9F%7B%C2%8F%C3%BF%C3%B8%C3%B6%19%26%06b%C2%83%C3%84%40r%C2%B8%C3%B4%C2%A1%C3%84%C3%B2S%05%C3%B53%C3%88%C3%BC0%1E%C3%BE%C2%99%40%C2%8C%2C%C2%9F%C2%86M%C2%AD%C3%B4%C2%83%C2%9B%26X%0DD%C2%96%C2%B8%2F%C2%AF%C2%B6y%C3%83%C3%97O%0D%C2%A0%C2%B4%07%C3%B3%C2%A2%C3%A3%C3%93%C3%BB%C2%B3%40i2%C2%80%C2%9B%C2%AFA%C3%B1%C3%A1-_%C2%92%C2%BC%C3%BC%C3%A0%C3%8F%C3%AF%C3%8D%3E%C3%9C%C2%BC%C3%85%C2%96%1C%5C%C2%BC01%10%1B%24%06%C2%92%23%C3%8A%C3%8B%C3%88%00%C3%A4%1A%60%C2%8CJ%C2%AD%C2%94%C2%90%C3%99%C3%B4%C3%B3%C3%BF%C3%BF%C3%A7%201%20%3B%C3%B2%C3%95%C3%9F%C2%BF%07Ard%25%1B%C2%93%C3%87w%1Bf~%7C%C2%9F%C3%BE%C3%A7%3F%C3%83g%10%06%C2%B1Ab%C3%B8%C3%B4%10%C3%8Cz%C2%AD%C3%AF_%C3%9Fr%C3%A1%C3%A29%0Bc%C3%93%3D%C3%AB%11U8%5C%C3%B8%C3%B9%C3%BD%2C)%06%3E%00%16%3B%C3%86%C2%A9%C2%A9%C2%A9%C2%91%C2%B8%C3%8A%C3%83%03P%C3%9A%C2%9F%C2%81%C3%81%18Wy%082%03%C3%88%C2%9CB%C3%B5%12%1B%20%C3%80%00v%C3%AE%C2%A2%7BRe)%C3%A4%00%00%00%00IEND%C2%AEB%60%C2%82";
var ProximityReOrderTargetButton = group15.add("iconbutton", undefined, File.decode(ProximityReOrderTargetButton_imgString), {name: "ProximityReOrderTargetButton", style: "toolbutton"});
    ProximityReOrderTargetButton.text = "Create Target Point";

// BUTTONGROUP2
// ============
var divider8 = ButtonGroup2.add("panel", undefined, undefined, {name: "divider8"});
    divider8.alignment = "fill";

// BUTTONGROUP8
// ============
var ButtonGroup8 = tab1.add("group", undefined, {name: "ButtonGroup8"});
    ButtonGroup8.orientation = "column";
    ButtonGroup8.alignChildren = ["left","center"];
    ButtonGroup8.spacing = 0;
    ButtonGroup8.margins = [0,3,0,0];

// GROUP16
// =======
var group16 = ButtonGroup8.add("group", undefined, {name: "group16"});
    group16.orientation = "row";
    group16.alignChildren = ["left","center"];
    group16.spacing = 10;
    group16.margins = 0;

var image9_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%057IDATx%C3%9A%C3%8CX%5BH%23W%18%3En%C2%A2%26%C3%AA%C3%84%0B*8Z%C2%95*%C2%91%C3%AAK%25%C2%8A%C3%B8%C2%A0%C2%8D%C2%96%C3%96%17%17%C3%B1%C3%81%C2%87%C3%ACjY%5B%18A%C3%81%C2%A2Yj%C3%91B%C3%A3KAM%04%05%C3%9D%3AE%C2%ACh%0D%C2%94%16%C2%B5UP%C3%AAC%C2%AC%0FR%25HA%05S%15%05ID%C2%A9%C2%97%C3%84%C2%A8%C3%ABe%C2%B7%C3%BF%3FddL%C2%A2I%C2%BCl%C3%BA%C3%83%C3%A1%C3%8C9g.%C3%9F%C3%BC%C3%97%C3%AF%C2%9C%00%02%C2%A2%C3%91h%C2%92%C2%A1%7BA%C3%BC%2F%3F%02%C2%96%C2%8D%00%07%C2%A0%C2%85%C2%8B%C2%8B%C2%8B%C2%93%C3%A3%C3%A3c%C3%A3%C3%AB%C3%97%C2%AF%C3%8D%C3%AF%1AIpp0%1D%12%12%C2%A2%10%C2%8B%C3%85R%18f%C2%8AQC%08hpp%C3%B0%C3%99%C3%86%C3%86%C2%86%C3%8D_*JNN%C2%A6%C3%8A%C3%8B%C3%8B%C2%87%00%C3%98%C2%8B'8%C2%81%1A%C3%B2'%20%14%C3%BC%3E%C3%A2%C3%80k%0E%C2%94%3FL%C3%A6Nx%1Cb%C3%A1dnn.%13%1A%1A%C3%8Axzxjj*%C3%8By%C2%AE%C2%A5%C2%A5E%1E%1B%1BK%C3%AD%C3%AC%C3%AC%C3%98%1A%1A%1AL%C3%BC%7Cuu5%C3%9D%C3%99%C3%99%C3%B9%13%C2%98%C2%A5%C3%801%25%C2%87%C2%A6%C3%86%C2%8B(%C2%91%C2%88%C3%BC%C3%B9%5E%C3%8A%C3%95%3B%C3%BE%C3%9E%C3%B9%C2%97%C3%BE'%26%C2%86%15%3B%C2%BF%C2%BCd%C3%9F%06%C3%8Dz%23%C2%A0%C3%8F%C3%9F%C2%8F%C2%BF6V*%C2%95%C3%94%C3%B0%C3%B0%C2%B0%C2%96%C2%A2(%C2%B9%C3%8Df3I%C2%A5R%C2%9Aa%18sii%C3%A9K%C2%83%C3%81%60%C3%AB%C3%AE%C3%AE6%C2%B7%C2%B6%C2%B6ZFGG%C2%95%25%25%25%06x%C2%84%C2%82%C2%A6%C2%90%3D%11%C2%91%C2%A1%C2%B8D%C2%82%3D%2Fa%17%C2%97%C3%A4%C3%8A%7C%C3%B7%11%04d%C2%B7%C3%9B-%C2%B5%C2%B5%C2%B5%C3%8F%C2%9B%C2%9A%C2%9A%C2%9A%25%12%C3%89%C3%93%C3%B3%C3%B3s%1B%04%C2%8E%C2%9A%C2%BFgss%C3%93%C2%90%C2%9A%C2%9A*%C3%A7%C3%87%08%C3%A4g%3A%C2%91%C2%A4%07I%C3%9C%C2%BE%C3%B3%5E%C2%A0%C3%90d%C2%A8!%C2%88%1A%5D%7B%7B%7BOee%C3%A5G%C2%8E%C2%BC%C3%97%1E%1F%1F_%C3%AC%C3%AE%C2%99%C2%A2P%C3%AAV%40%1EA%C2%89%13%C3%A2I%C3%847_%C3%9F%C2%B8%5EXX%C2%A8%C3%98%C3%9B%C3%9B3%C2%A2%C2%99%20%C3%97%C3%84egg%C3%AB%C3%B9%C2%B5%C3%8B%C3%8B%C3%8B%C2%ABh%06%C3%ADQ%C3%BC%C3%B5%C2%A7!%C3%94%C2%AD%C2%80%3C%C2%82zc%C2%B5%12%C3%A9'%1F%13%C2%AA%C3%B23%C2%B7%C3%ABf%C2%B3%C3%99%12%18%18H9%22%C3%87%C2%B2%C2%B5%C2%B5%C2%A5A%C3%9F%01%1F%C3%92%C2%82%C3%89%C3%86%C3%B8%C3%BB%40k%C3%8A%C2%B1%C2%B11%C2%83%C2%B7%16%C3%B0%00%C3%8AF%C3%B6%C2%BEj%22%C2%B2%C3%9A%1ANk%C3%8E299i%C2%8A%C2%88%C2%88P%60%C2%84%C3%95%C3%97%C3%97W%C3%A1%5C~~%C2%BE%0A%7D(%25%25E%C2%87%C3%A3%C2%A5%C2%A5%25%C3%A6%C3%A4%C3%A4%C3%84%2C%C2%8C%C3%88%7B%C2%81%C3%A24%C3%B0%C3%97%1C%C2%B1%C3%BF%3AL%C2%A2Z%C2%BFsY%C3%83%C3%88Z__%C3%97%C2%A3fp%C2%9C%C2%90%C2%90%C2%A0%C2%89%C2%8C%C2%8C%C2%AC%C3%8A%C3%88%C3%88%60q%3C%3F%3F%C2%AFJKKS%C2%B1%2C%C2%AB%C3%B3%C3%85W%5DR%C3%82%C2%8A4%C2%88%C2%8C%12%C3%99u%C3%A4%03%03%C2%A4%C3%A8%C2%87%C3%AF%C2%89%C2%BD%C3%AA%0BB%C3%BE%C2%98%C2%B8%C2%B6%C2%86%1AY%5B%5BSc.jll%C2%9C%3E%3C%3C%C3%A4%12%60RR%C2%92%12r%13%C2%A5%C3%93%C3%A9%C2%AA%7C%C3%91%C2%92%0B(%C2%AB%C3%95j4%C3%8Ad%C2%AC1%C3%88I%C2%81%C2%A7v%C2%B2%C3%BE%C3%AA%15%C3%91j%C2%B5%C3%8C%07%5B%C2%9B%06H%C2%9E.%C3%80%C3%80%C2%84%C3%BA%C2%9A%C2%9A%C2%9A%C3%A2%C2%98%C2%98%18%C3%B9%C3%AE%C3%AE%C2%AE%09%C2%B4%C2%A4%2F((%C3%B8%C3%9D%C3%B9%C2%83%C2%BF%1C%1D%20%C3%80*w%60N%22eO%C2%B1G%C2%96%C2%A0%C2%81%C2%97%C3%84uuu%C2%B1%C2%9E%C3%BE%00%C3%BD%035%10%16%16%C3%B6%C3%AC1%C3%8A%0C%C3%BC%14%03%3Fe%C3%B1)O%C3%B1%C2%BE%C2%82%C3%A0%1E%C2%B3%06%C3%BA%C2%9C%3CA%C2%A3%C2%9A%C3%B4%C3%B4t%06%13%C3%A7c%C2%81%C3%A2%C3%8C%17%1E%1E%C3%BE-4%C2%AF%1F%C3%8A%C3%8C%C3%8C%24%C2%89%C2%89%C2%89%04r%C3%92%C2%83%C2%82%C2%81%20%C3%81%C3%96%C3%8C9%C3%BA%C3%AA%C3%AA*%C3%AB%C2%8DO%09e%7F%7F%C2%BF'''%C3%87%C3%88%C2%9B%C3%B4%01%7D%C3%AA%C3%AE%C2%B5%0F%C2%8B%2F%C3%A6%C2%A0%C2%BE%C2%BE%3E%C2%85%C3%9F%7DJ%C2%988%17%16%16X%C2%95J%C2%A5A%C3%BA%C3%B2%C2%90%C2%A0%C3%84N%C3%91%C2%A5%C2%90%C3%89d%1E%C3%BF%7Cvv%C2%963%19%16%600%C2%A3%C2%B2%C2%B7%C2%B7%C2%97%C3%A1%C3%8B%C2%8A%C2%B3%20%C3%A0%C2%B6%C2%B6%C2%B6bA%C2%B1%C2%A6%1CD%C2%8F_%C2%BF%C2%BAW%24%12%C3%91%C3%90Y%C2%AE%C2%81B%40%C3%91%C3%91%C3%91%C2%8CD%22%C2%BD%C3%85%C2%97%C3%B6%C2%B0c%C2%85f%C3%84l%0E%C3%A0%C2%B8%0F!%C2%97%1A%1F%1F%C3%97%03%C2%8D1%0A%02%C2%83%C2%81%C3%A4%3A%C2%8D%C3%9Au%00%C3%AA%C3%A1(%C2%A8%3C%C2%8Dk%C2%BC%04%06%06agt1%1F%02%C2%82%C3%BAucs%C2%96%C2%B2%C2%B22%C2%85%C2%831%18GFFX%C3%88a%C3%93%15%15%15Zd%0B8%C2%8F%C2%B4f%7B%7B%7B%C2%9A%C3%A7Z%C2%BC%20%18%C2%A1%C2%96%1E%C2%8C%C3%A4%C2%A1i%C3%B2%C3%B2%C3%B2%C3%AA%07%06%06%5E%C3%82N%C3%84%06%C3%9B%24%1AK%C3%8B%C3%8C%C3%8CL%7BQQ%C2%91Z%10%C3%AAf%C3%98%C3%97Q%C3%9E%00%C2%BA7%C2%A8%C2%BA%C2%BA%3A%C3%85%C3%A9%C3%A9%C2%A9%05M%C2%95%C2%95%C2%95%C2%A5%C2%9E%C2%9B%C2%9B%5B%C3%81y%04%C2%86%C2%A4%C3%AF%C2%86%1F%C2%B9%15%C3%90%C2%BDA%C3%914%1D%07%1Ar%C3%99%C2%9E!e%01%C3%9E~%C3%85%0C%C2%B0H%C3%83.%C3%87%C3%B2%C3%A8)%01eqq%C3%91%04%C3%81%C3%81y%C3%AA%C3%B2%C3%B22%C2%ABV%C2%AB%7B%C2%8E%C2%8E%C2%8E%C2%86%C3%90%C2%B1%C2%B1%1C%C3%B1%3C%3E**J%C3%91%C3%9C%C3%9Cl%C2%B8SJ%C3%B0U%C3%90l%C2%90%C2%A78%C3%8D%60f%C2%87%08%1B%C2%83%C3%90%C2%8F%C3%AB%C3%AF%C3%AF7%C2%A1%C2%83%C2%A3%C3%8FA%C2%96%C3%96%C2%AC%C2%AC%C2%AC%C3%A8q%C3%BCN4%C2%85%C3%92%C3%91%C3%91%C2%A1F%C3%8D%20%C3%91%C3%A3%C2%81%22%00%C2%8C%C2%BE%C2%89%C2%89%C2%89%C2%A1%C2%83%C2%83%03%C2%93%C2%AF%C2%A5H%C3%AC.%0F9r%C2%91W%C2%82%C2%AC%128%C3%B9s%60%C2%9Dh%C2%B2%C3%9F%C2%A0%C3%B1%5Bp%0B%26Yg%C2%A2%07%7C%C3%9Dvvvft%C3%B7%C2%AE%C2%B7o%C3%9F%C3%90%3E%C2%93%3Co%C3%B7%C2%82%C2%BE%C3%92_g%C2%92'%C3%A6%C3%8F%C2%87%1E%C2%AAn%C3%9D%15%C2%90%00%C3%871%C3%A7Sx%60%C2%85%C3%A7C%C3%BE%3Cq%C3%81%C3%AF%23%0E%C3%9E%7C%C3%BF%C2%BB%C2%93%C2%BC%00%C3%81%C2%99%C3%A7%C2%97%C3%90%3E%C3%B4%C2%93%C2%A2%0E%C3%B0%24%C2%88%3F%C3%B3%C3%BCO%C2%80%01%00%C2%9FVgI%C2%92%16%C2%9E%0C%00%00%00%00IEND%C2%AEB%60%C2%82";
var image9 = group16.add("image", undefined, File.decode(image9_imgString), {name: "image9"});

var LabelMateButton = group16.add("button", undefined, undefined, {name: "LabelMateButton"});
    LabelMateButton.text = "Label Mate";
    LabelMateButton.preferredSize.width = 210;

// GROUP17
// =======
var group17 = ButtonGroup8.add("group", undefined, {name: "group17"});
    group17.orientation = "row";
    group17.alignChildren = ["left","center"];
    group17.spacing = 10;
    group17.margins = [44,0,0,5];

var statictext5 = group17.add("statictext", undefined, undefined, {name: "statictext5"});
    statictext5.text = "Parent";
    statictext5.preferredSize.width = 40;

var LabelMateFromDropdown_array = ["None","Red","Yellow","Aqua","Pink","Lavender","Peach","Sea Foam","Blue","Green","Purple","Orange","Brown","Fuchsia","Cyan","Sandstone","Dark Green"];
var LabelMateFromDropdown = group17.add("dropdownlist", undefined, undefined, {name: "LabelMateFromDropdown", items: LabelMateFromDropdown_array});
    LabelMateFromDropdown.selection = 0;
    LabelMateFromDropdown.preferredSize.width = 160;

// GROUP18
// =======
var group18 = ButtonGroup8.add("group", undefined, {name: "group18"});
    group18.orientation = "row";
    group18.alignChildren = ["left","center"];
    group18.spacing = 10;
    group18.margins = [44,0,0,5];

var statictext6 = group18.add("statictext", undefined, undefined, {name: "statictext6"});
    statictext6.text = "To";
    statictext6.preferredSize.width = 40;

var LabelMateToDropdown_array = ["None","Red","Yellow","Aqua","Pink","Lavender","Peach","Sea Foam","Blue","Green","Purple","Orange","Brown","Fuchsia","Cyan","Sandstone","Dark Green"];
var LabelMateToDropdown = group18.add("dropdownlist", undefined, undefined, {name: "LabelMateToDropdown", items: LabelMateToDropdown_array});
    LabelMateToDropdown.selection = 0;
    LabelMateToDropdown.preferredSize.width = 160;

// GROUP19
// =======
var group19 = ButtonGroup8.add("group", undefined, {name: "group19"});
    group19.orientation = "row";
    group19.alignChildren = ["left","center"];
    group19.spacing = 10;
    group19.margins = [44,0,0,5];

var LabelMateRepositionCheck = group19.add("checkbox", undefined, undefined, {name: "LabelMateRepositionCheck"});
    LabelMateRepositionCheck.text = "Reposition";

// BUTTONGROUP8
// ============
var divider9 = ButtonGroup8.add("panel", undefined, undefined, {name: "divider9"});
    divider9.alignment = "fill";

// BUTTONGROUP9
// ============
var ButtonGroup9 = tab1.add("group", undefined, {name: "ButtonGroup9"});
    ButtonGroup9.orientation = "column";
    ButtonGroup9.alignChildren = ["left","center"];
    ButtonGroup9.spacing = 0;
    ButtonGroup9.margins = [0,3,0,0];

// GROUP20
// =======
var group20 = ButtonGroup9.add("group", undefined, {name: "group20"});
    group20.orientation = "row";
    group20.alignChildren = ["left","center"];
    group20.spacing = 10;
    group20.margins = 0;

var image10_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%C3%94IDATx%C3%9A%C3%AC%C2%98%C2%BFj%C3%82P%14%C3%86%C2%AF1%C3%B4V%C3%BB%07%2C%C3%9C%C2%82%C2%81%C3%92L%1D%C3%AC%60%C3%9B%C2%BC%C2%80CG%3B%C3%AAP%1C%C2%9C%C3%AC%C3%98%C2%A1%2F%C3%A0%0B%C3%B4%05%5C*E%3At%C2%8D%0F%C3%A0%C2%9A%C3%A1R%3A%C3%94%C2%A1CI%C2%A5Dh%C2%86%C2%96%0A%C3%B9%C2%87C%C3%AF%C2%91%0C%C2%A2%10-%C2%94%C2%93%08%1E%08%C2%89%17%C3%A1%C3%BE%C3%B8%C2%BE%C3%A3w%C3%8DI%11Q%C3%8DfS%15%C2%B7%3A%C2%89%C2%BF%C3%9A%C2%82%C3%85L%C2%85%40O%C3%A3%C3%B1%C3%98u%1C%C2%87%C3%BB%C2%BEoa%C2%93PJ%C2%95l6%C2%AB%C3%89%C2%B2%C2%9C%11%1FOeP%08%C2%80%3A%C2%9D%C3%8E%C2%A5i%C2%9A%C2%A3%C2%B8%24RUu%C2%A7V%C2%AB%3D%08%C2%B0%C2%BA%04%0B%C2%A0P%C2%9C%40P%C2%B0%3Fp%C3%803(E%C2%A6-%C2%BBe%C2%8AV%C2%A4%C2%9B%1A%16%C3%8C%C2%B3%C3%AF%C3%B1%1B%C3%9B%C3%A2%C3%93%1C%C3%B2%C3%AC%C2%97%00%C3%A8h%C2%836%10Ej%C2%89%C2%8BO%2F%C3%8CA%C3%9D%C3%BF%7Cu%C2%8B4%C3%83%C3%B1%C2%94r%C2%87%C2%B3ksP%C3%BC%40!%03%C3%86%C3%90dr%5Dw%C2%9B%18F4T%C2%A1p%5C%C3%8E%C3%A5rh%C3%B6%05A%C3%80%0D%C3%83%C2%B8%C2%8A%C2%84%C2%B2%C3%ADO%1E%C3%BA%C2%8CR%C2%9E%C2%B7%C2%84%7D%C2%BD%5E%C2%8F%C3%8F6%1Ev%C3%8DAU*%C3%95%06%C2%B6%7D%C3%AD%C3%B6%5D%C2%B4%7D%20g%10lq%3C%C3%BB%C2%BC%C3%97%C2%85J%C3%A9%C2%A2%C3%A0%C2%96(%C3%BB%1E%C2%95%C3%83%C2%8B%C3%82%06-c%01%C3%B4%03%C2%BF%5B%C2%B5%C3%9E%C3%B5H%C2%A8%3D)%C2%9D%C3%9F%C2%95%C3%92h%C3%87%C2%8C%C3%98%C2%8F%2FT*%C2%91%C2%89%3E8%2B%C3%A6%5D%C2%B6%C2%AF%C3%A15%C2%BA%C2%80%C3%92u%2B%12%C2%8A%09%20%C3%9CH%C2%98%C3%BC%C3%92%C3%B5%C3%95Kt%C3%9B%C2%B6%C2%87%C2%98%C2%89.%0E%C3%A4%C3%91B%C2%A8D%1E%C3%88%C3%ABD_'%C3%BA%7F'%C3%BA%C3%B9%C3%87%5B%0B3%12%C2%96%C2%B2%C2%AFT*i%0C9%C3%91%C3%83%3E%5E%C2%B1D%C3%AF%C3%B7_%C2%BA%C2%8C%C2%B1X%C3%83S%22%09%C2%AC%C3%B5%2B%C3%96%C2%9F%0Ed%C2%98%0F%25%C3%A1%15%2B%C3%A4p%26%3D%05%03%2B%C2%98%0F%C3%85%C3%99G%C2%B0%3Fp%C3%80s%22'y)X%0C%C3%81%C2%AE%C3%85u%12%C2%93P%C3%9F%C3%B0w%C2%9D%C2%843%C3%8F_%01%06%00%C3%96%C3%B1%0Bz%C3%A2%2Bk%C2%B4%00%00%00%00IEND%C2%AEB%60%C2%82";
var image10 = group20.add("image", undefined, File.decode(image10_imgString), {name: "image10"});

var ZebraSelectButton = group20.add("button", undefined, undefined, {name: "ZebraSelectButton"});
    ZebraSelectButton.text = "Zebra Deselect";
    ZebraSelectButton.preferredSize.width = 210;

// GROUP21
// =======
var group21 = ButtonGroup9.add("group", undefined, {name: "group21"});
    group21.orientation = "row";
    group21.alignChildren = ["left","center"];
    group21.spacing = 10;
    group21.margins = [50,0,0,0];

var statictext7 = group21.add("statictext", undefined, undefined, {name: "statictext7"});
    statictext7.text = "Layers to skip";

var ZebraSelectTextbox = group21.add('edittext {properties: {name: "ZebraSelectTextbox"}}');
    ZebraSelectTextbox.text = "1";
    ZebraSelectTextbox.preferredSize.width = 30;

// BUTTONGROUP9
// ============
var divider10 = ButtonGroup9.add("panel", undefined, undefined, {name: "divider10"});
    divider10.alignment = "fill";

// TAB2
// ====
var tab2 = tpanel1.add("tab", undefined, undefined, {name: "tab2"});
    tab2.text = "Canvas";
    tab2.orientation = "column";
    tab2.alignChildren = ["left","top"];
    tab2.spacing = 7;
    tab2.margins = 10;

// BUTTONGROUP3
// ============
var ButtonGroup3 = tab2.add("group", undefined, {name: "ButtonGroup3"});
    ButtonGroup3.orientation = "column";
    ButtonGroup3.alignChildren = ["left","center"];
    ButtonGroup3.spacing = 0;
    ButtonGroup3.margins = 0;

// GROUP22
// =======
var group22 = ButtonGroup3.add("group", undefined, {name: "group22"});
    group22.orientation = "row";
    group22.alignChildren = ["left","center"];
    group22.spacing = 10;
    group22.margins = 0;

var image11_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C2%A0IDATx%C3%9A%C3%8CXOL%C3%93P%18%C3%AFJa%C2%B89%C2%8DA%22u%23L%C2%8D%08%C3%B1%C2%A0f%C2%BB%60%22F%C3%A5%C2%82%C2%81%C2%9B%C2%9AL8%2C1l%26%1C%C2%8CY%C3%A4D%C3%82H%08%07L%C2%8F%24%C2%AE%C3%84d%07p11%C2%BB%40%C3%B4b4b%02%07%C2%B6%18N%C3%82%C3%BC7dsD%20%C3%91%15%26%C3%93%C2%B2%C3%B9%C2%BEe%5DJi%07%5D%5B%C3%A0K%C2%9A%C3%B6%C2%BD%C3%BEy%C2%BF%C3%B7%7D%C2%BF%C3%B7%C3%BB%C2%BE%3E%1D%C2%86%C3%8C%C3%AB%C3%B5Z%C3%91%C3%89%C2%89%C3%AD%C2%BF%C3%B9%11%C2%96%C2%A8.%0F%C3%A8%03%C3%8B%C2%B2%7FR%C2%A9T8%C2%9DN%C3%BF(%C3%A5k%C2%8D%0D%0D%C2%AE%C2%8Fsst)%C3%AF%C3%AA%C3%B5%C3%BA%C2%93%06%C2%83%C3%81F%10%C3%84!%C3%94%C2%BCD%C2%80%C2%87%00%C3%90%C3%A8%C3%A8%C3%A8%C3%9Dh4%C3%8A(%C2%98%25%C2%AD%C3%84EV%C2%AB%C3%95%C3%94%C3%99%C3%99%C3%B9%0C%01s%C3%A2%C3%90%01%1ER%08%08%C2%BB%C3%AFv%C3%9B%C2%94%C2%BC%0F%C3%A3%03%0E%C2%B8%06Oa%C2%A5%C2%86%C2%8CoW%C2%9B%C2%9B%7DO%7C%3E%7B%C2%B1g%C2%9CN%C2%A7%0Dyd%1BxD!%C2%9A%C2%8F%C2%83%C3%98K%16%03%20%C2%92%24%5D%3B%C2%85%5E%12%C2%94%C3%87%C3%A3i7%C2%99L%C2%A4%C3%80%C3%85a%C2%BF%C3%9F%1F%16%7B%C3%9E%C3%91%C3%91aW%0B%C2%BC%24(%C2%8B%C3%85%C3%92%06%2BBdFa)N%C2%A1%C3%B0%C2%85%C3%95%00%C2%85%C2%AB5%3B%C3%A0%C2%94%C3%A6%C2%9ER%C3%9B%5E%C3%94%C3%94%C2%B6%C2%9F%7F%C3%B5%C3%9A%C3%B5%C2%BC%C2%B5%C2%85%C3%9E3P%C3%858%05%C2%80%C2%9A*%0D%7D%C2%B3%C3%9F%17)%C2%B4%C3%92%02%25%C2%87o%7D%7D%3D%02%C2%BA%C3%81%3FZ%C2%A7C%0E%18%00%C3%AE%C2%A3ALo%C3%8D%C2%A7%0A%2B%C3%A9%C3%B1%C3%90P%C3%A1z%C3%8Ar%C3%9A%23%044%C2%BD%C2%91%C3%AA%C2%BF%C2%99X%08(%0A_oo%2F%25%C3%AC%0B%C3%95%C2%9E%C3%B1%C3%82%00%2F%C3%89%C2%BA%C3%83g%2B*%C3%9A%C3%99%2CV%10%5C%C2%8B%C3%99%C3%AC%C3%A2%C2%96v%1DQ%C3%AE%40%C3%8F%C2%9A%C3%BEf%C2%B3%0C%5C%03%C2%A0%5BK%C2%8B%C3%A3%C2%9Ap%C3%8A%C2%BE%C3%B8%C3%85%C2%8B%06%C3%83.%C3%A8%2Bs%C2%9EHf3%C2%85%C3%95%C3%86%C2%A91gd%19%C3%91%06g%C2%B9%C2%80d%C2%AF%3E%08%C3%99Q%1C%C2%AF%17%C2%BBw%C2%AF%C2%AB%C3%8B-%C3%96_UF%C2%90%C2%9AJ%02u%C2%BC%C3%86%05!%C3%9B%C3%84%C2%B2%C3%9B%C3%B2%24%C2%9FS%7C%C2%AB%2F%C2%AFpq%3C%C3%94%24%7C%C2%97c_)I%C2%B1%C3%A5q%C3%8A%1C%C2%9D%C2%B7%1F%08%C3%B1%14rJ%C2%B1xB%C2%81%06%C2%B3%C2%84T%C3%81)3%C3%A8%C2%8E%C2%B0%0D!%02%C2%8F%00%00%C3%A0%C2%90%C2%B0%C3%BDtd%C3%84%07%C2%A9)%16%C2%8F%C3%93%C2%8Fzzha%3B06%16%C2%82o%C2%BD%C2%9B%C2%9CtCJ%12%C2%B6%01%C3%87%C3%8A%C3%AAj%3FT%C2%9E%C3%9E%C3%A5%C3%A5erxxXQ%C2%91%06%00%C2%A4%C3%88%C2%BE%5B%C3%AB%C3%AE%C3%AEvUWW'T%0B%C2%9FH%C3%B2%C3%9E%C2%9B%C3%9C%07J%7D%0C%2F%C2%AB%3F%C2%82%C3%A39%00%C3%89L%26%C3%9C%C3%B8%C3%BDS%C3%8E%3B%10%22%C3%AE%C2%B9%C2%B8%C3%B5%5C%C2%88%C3%BF%C2%9E%5C%C2%AD%C2%92%C3%A5)%C3%8F%C3%8A%12M%C3%A80%C2%93%C3%98%3D%C3%A0%C2%8CX%C3%BFlz%C2%83%C3%92T%3C%C3%91%C2%8C%C2%99%C3%9F%C2%99LD%C2%8AS%C2%A2%C2%AB2%C2%9BY%C3%934%7C%C2%90%C3%BB%20%7D%C3%80%C3%AC!%C3%B7%15%C3%A3Tb%C2%93%C2%9D%C3%B8%C3%89%C2%B2%C3%B3%C2%90%2B%07o%C3%9F%C3%81%22F%C3%83%C2%96%C3%BF%00%C2%A9%0AV%16(%C3%A0%13%00%C3%A2%C3%B8%C2%81%06%C2%9B%18%C2%AC%3A%C3%A1%C3%A0%C3%AE%C3%B39%C2%B5%C3%80%C3%BE%0BpB%C2%8B%00%C2%ADU%C2%B5%C3%9C%C3%A8k%12%C3%BEu%C3%BA%C3%BDvE%C3%A1%C2%834!%C3%8C%C3%B6%10%C3%8Ak%C3%B1o%C2%B4%18%C2%A7%C3%B8%C3%8A%2F%C3%B4%C2%90*%C2%9C%C3%A2%C3%97C%C3%85%08%C3%8B%09%C2%A1%C3%AA%C2%92000%C3%A01%1A%C2%8D%5B%C2%AA%C2%80%C3%9A7%C3%AFm%C3%9333%C2%B2%C3%8B%0F%C3%95%40%01%20!a%C2%A7%C2%AE_%09%3F%1C%0F%C3%AE%08%08R%C2%85X%7F2%C2%99d%C3%A4%C3%A6E%C3%95jt%C2%A9%C3%9F%C2%AB%600%18A%C2%87%5B3%C2%9D*fjr%0A%C3%87%0E%C2%A0%11%C3%9C%C3%BEPNkb%C2%B1%09%C3%B4%C2%AB%C2%BE%25%0C%0C%C3%83%24v%C3%B3!)N%C3%89%C3%9D%C2%A7%C2%82%24%40pj%0C%C3%BBC%14E%C2%8D%C2%AB%C3%8D)9%C3%BBS%C3%B9E%C3%B6%C3%B9%40%C3%AE%C3%A4%C3%A9%C3%B2%C3%BBC%00%C3%AC%01%3A.%C3%AE%13%C2%8D~AA%C2%81%C3%A5%C3%B7%3C%C3%BF%0B0%00%C2%9C%C2%9F%C3%9A%C3%BF%C3%A3%C3%B9%C2%BC%C3%8F%00%00%00%00IEND%C2%AEB%60%C2%82";
var image11 = group22.add("image", undefined, File.decode(image11_imgString), {name: "image11"});

var CenterPositionsButton = group22.add("button", undefined, undefined, {name: "CenterPositionsButton"});
    CenterPositionsButton.text = "Center Positions";
    CenterPositionsButton.preferredSize.width = 210;

// GROUP23
// =======
var group23 = ButtonGroup3.add("group", undefined, {name: "group23"});
    group23.orientation = "row";
    group23.alignChildren = ["left","center"];
    group23.spacing = 10;
    group23.margins = [50,0,0,3];

var CenterPositionsXCheck = group23.add("checkbox", undefined, undefined, {name: "CenterPositionsXCheck"});
    CenterPositionsXCheck.text = "X";
    CenterPositionsXCheck.value = true;

var CenterPositionsYCheck = group23.add("checkbox", undefined, undefined, {name: "CenterPositionsYCheck"});
    CenterPositionsYCheck.text = "Y";
    CenterPositionsYCheck.value = true;

var CenterPositionsZCheck = group23.add("checkbox", undefined, undefined, {name: "CenterPositionsZCheck"});
    CenterPositionsZCheck.text = "Z";
    CenterPositionsZCheck.value = true;

// BUTTONGROUP3
// ============
var divider11 = ButtonGroup3.add("panel", undefined, undefined, {name: "divider11"});
    divider11.alignment = "fill";

// BUTTONGROUP4
// ============
var ButtonGroup4 = tab2.add("group", undefined, {name: "ButtonGroup4"});
    ButtonGroup4.orientation = "column";
    ButtonGroup4.alignChildren = ["left","center"];
    ButtonGroup4.spacing = 0;
    ButtonGroup4.margins = [0,0,0,0];

// GROUP24
// =======
var group24 = ButtonGroup4.add("group", undefined, {name: "group24"});
    group24.orientation = "row";
    group24.alignChildren = ["left","center"];
    group24.spacing = 10;
    group24.margins = 0;

var image12_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%04!IDATx%C3%9A%C3%AC%C2%98oH%13a%1C%C3%87%C3%AFn%C2%B7%C2%BFyj%C2%99%C3%A6%C2%AD%C2%99Vx%11%11%15'%C3%81%C3%ACE%C3%ABM%C2%AF%C3%B2%5D%08%C2%86%C3%94z%C3%A3%20%C2%88%C2%A8%C2%BD%09%13ZD%C3%AFZB%C2%BEro20%25%09%11%C2%95z%13%C2%B47%C2%B5(%C2%8F%0A%C2%8ArV%C2%8A%C2%A6%C3%93l%C2%A5%C2%9B%C2%BB%C3%ADl%7Fz~k7%C3%8E9%C3%9D%C2%B4%C3%9D%0C%C3%AA%C2%81%C3%A3v%C2%BF%1Dw%C2%9F%C3%BB%C3%BE%C3%BE%3C%C2%BF%C3%A7%C3%8114l6%5B%15%3A%C2%99%C2%B1%C2%8D%1F%1D%C2%88e%0CO%00%C2%BD%0A%C2%87%C3%83A%C2%9E%C3%A79A%10%C2%A6%C3%B2M%C2%A2V%C2%AB%C3%B5%3A%C2%9D%C2%8E%25IR%C2%8B.%0F%C2%91%C2%A0%10%00uvv%C2%9E%1A%1B%1B%C3%B3o%C2%94DUUUTccc%17%023%13%60%00%C2%856%12%08%06%C2%BC%1F8%C3%A07(%C2%85I%5D%C3%860%0CU%5B%5B%C3%8B%2CsvG%07'7%C2%98%C3%88A%C2%A6%C3%BE%01%40F%C2%A3%C2%B1%3D%0DTM%C2%BET%23%C2%B0%C2%BFp%C3%BC%C2%87%C3%8Av%2C%C2%8B)%C2%9F%C3%8F%C2%97%C3%8C%02q%14%C3%8E%C3%BB%C2%A8'%C3%9Bw6Im%C2%AF%C2%85%20w%C3%B1%C3%9Bt%C3%96%C3%81o%C2%B5Z%C3%AB%0C%06%C3%83%09%C2%A9-%10%08%C2%B8%5BZZ%C3%AC%19%C2%A1z%7B%7B%C3%9D%C3%A8%C2%B0Hm%C2%AD%5B%C3%8BY%C2%A6%C2%A0(%19%C3%BC%7C%2C%C3%AAn%C3%B6%C3%BA%C2%BA%C3%97%C3%B2%C3%B5%14E%C3%91P%20eq_%04%C2%8B%C3%B9O%C3%8FLZ%5C!%C3%9E%C2%9F7%C3%B7%C2%AD6%40!%1DN0m%C2%A5%C2%B4%C2%B5f%C3%A2%C2%93m%C2%B5%7B%C2%87*v%C3%9B6%C3%A1%04%3D%1D%09s%C2%8F%C3%B9%05%C2%A7%2C%C2%81%0E%40%09%C2%85%C2%AE%C3%91%0A%C3%B2%04%C2%BCt%C2%B5%C3%BB%C3%9B%C3%A6%C2%BC%C2%8EB%C2%82%60%19%C2%A5%C2%AA%C3%A9%5C%C3%91%C2%96%C2%AE%C2%BAg%2F%C2%9Br%C2%AAT%C3%8F%C2%82%C3%8F%C2%8D%C2%8E%C2%B8%C3%8BNN%C3%B3%03%0F%C3%8A%2B0%C2%A3Fw%15%C2%81a%2B)vP%C2%AD%C2%A1%17c1%C2%8F%0A%C3%87i%C2%B8%1E%C3%BF%C3%AEu%C2%B8%5C..5%C2%A9%C3%96%0D%C2%95%1A%3F'%C2%A7'V%04C6%0A%C3%9C%0Bj%C3%BA%C2%A2%C3%918%04%C2%80%C3%B5%0D%7F%18%C2%BC%3B%C3%B4%7CJ%C3%96%3A%05%60%C2%A2%2B%C2%9F%19vY%C3%81%C3%B6%C2%90%C2%AEl%C2%B8_n%C3%A8%2F!%14%2C%C3%BC%C2%B7w%7C%C3%84%C3%82%09A%07(v%C3%97%3F7%25K%C2%A0%C2%A7%03%03%C3%85%5E%09%C2%A1a%C2%B8%C2%9E%C2%89%C2%84%3D%C3%9A%C2%9FDw%C2%B3w%C2%A6%5BTW%C2%BCG%C2%B6%C3%ACK%1D%C3%A0%C2%AA%C2%81%C2%80%C2%9F%13U8%C3%BBu%12%C2%B2%C3%8C%C2%99%0E%3E%2F%C3%93%C3%8C%C2%9D%C2%B2%C3%AD%C2%A6%C2%AEm%C2%86%C2%AE%C2%96-%C2%A57E%C3%9B%C2%95%C3%8D%C2%A5%0CR%C2%A5N%C3%B6%3A%05%C3%95%C2%BC%C2%82T%C3%AA%C3%85%C2%AF%3DC%15%C3%AB%2Fo.%C2%BD%0A%C3%A9%C3%AE%C2%89%C2%84%07%C3%8F%C3%8Fz%C3%AC%C3%AFwT%C2%B7%C2%BF%5B%0C%0D%C3%AAI%25SI*%1B%C3%80%5DkUgMJ%1DTk%C3%99%C3%83%1A%C3%AD%25p%15%C3%8C%7F%C3%97K%C3%8A%C3%AEip%5C%C3%9F%C2%B30o%11%C2%B3%0E%00%C3%BD%C3%91%C2%A8%C2%BF%C3%B6%C3%8Bg%3B%C2%80BV%C3%BE%C2%89b%19%C2%95*W%C2%90%C2%AC%02%C3%83)%C3%88*8%C2%BB%7F.%3A%C2%8EM%C2%8E%3A%C2%92%13mq%C2%89I%12O%C3%B1%C3%B2%C2%80%C2%80%C2%B8%04%C3%98%C2%BA%14%C3%8B%C2%A8%14%C2%A8%00g%00%C2%824%C2%97%02%C3%85%1B~%C2%A5%C2%8A%C3%B5F%22%C3%8Et%C3%A5%02%C3%80%C3%84%C3%AE%02%C2%94%067%C2%AFI)%C2%93%C3%89%C2%A4G%C3%87%C2%92%C3%96%C2%A2%C3%84%C3%BB%C2%9D%C3%A2%C3%BB%1F%C3%85%C3%A7%3B%C2%B8%3E%C2%A0%C3%964%C2%A0%C3%93%C2%92%2F%2FS(%C2%8E%C2%BE%15%04%C3%87J%C3%A5%22Q%60%C3%B5E%04%C3%81%C2%88%C3%8F%C3%89%1A%0A-qh4%C2%96%C3%8EO4%C2%8DU%C2%B7%C3%9D%C2%AE%C2%81%C2%AF%C2%AC%2F(d%20%C2%BE%20%C3%AB%C3%B6%C2%A8%C3%94%C3%AC%C3%B0%C2%A2%C3%80%C3%8DE%23~P%C3%B0i%C2%88%C3%A7V%C2%ABc%00%C2%96%C3%B3%3A%05%C2%85%C3%90%C3%B5%C3%BB%C3%85%C3%B1%C2%97%C2%A3%17Q%C3%87u%05%C3%89RpD%C2%A3cQ9%C3%80n%C3%BC%C2%98u%2F%5B%C3%8F!%C3%B7%C3%8A%C3%9A%C2%BAH%15%18%C2%ADd%C2%9A%C3%84%C3%89%16%C2%B9%C3%95Z%C2%ADR%01%C2%90M%0A%06%19%08%C3%AD%C2%8B8%07F%C2%B5Z%0A%C2%AD%C3%88%C2%97u%0B%C3%88%C3%A6%C3%88IE%C3%AF%0B%C3%B8l%C3%B5%C2%A8%1B%C2%85%C2%A6%C3%AFE(x%2B%5D%C2%96%25lI%C2%BB%C3%99lf%C2%8D4%C2%9D.%C3%98%C3%93C%C2%A1%15%C2%AA%07%C3%85%C2%95%23c1mmM%3E%C3%B4%C3%8D%C2%A7Ql%C2%BC%C3%82%C3%A0%19%C3%B9%3A%C2%83av%7B%C3%AE%3BO%C2%A7%C3%939%C2%85%C2%8E%C2%8CP%C3%92%3E%7Bb%C3%BF%3E%0CG%C2%8Bj*%C3%88%C3%93%C3%BF%C3%9E%12K%C3%A6M%C2%8C%C2%ACB%C2%84%14%C3%B7%C2%87%C3%B2%01%C2%95)D%12%1C%3C)%C3%86%09%C3%AC%0Fe%C2%B3%1D%C2%84%C3%BAlK%3A%05r%C2%B1%3F%C2%95%C2%88%C3%97%C2%8F%7F%C3%A5N%1E.%C3%99%C3%B3%C2%BC%00%C2%9D%C3%8A%06%C3%85%C3%B6%1CT%18q%C3%8F%C3%B3%C2%97%00%03%00%C2%BC%26%0A%C3%AE%C2%8E%C3%9F%0D%C3%89%00%00%00%00IEND%C2%AEB%60%C2%82";
var image12 = group24.add("image", undefined, File.decode(image12_imgString), {name: "image12"});

var RandomizePositionsButton = group24.add("button", undefined, undefined, {name: "RandomizePositionsButton"});
    RandomizePositionsButton.text = "Randomize Positions";
    RandomizePositionsButton.preferredSize.width = 210;

// GROUP25
// =======
var group25 = ButtonGroup4.add("group", undefined, {name: "group25"});
    group25.orientation = "row";
    group25.alignChildren = ["left","center"];
    group25.spacing = 0;
    group25.margins = [43,0,0,0];

var GetCompSizeButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%10IDATx%C3%9Ab%60%C2%A02%60%04%11%C3%B5%C3%B5%C3%B5%C3%BD%40%C2%AA%C2%80B%C2%B3%26466%162%02%0DK%00r%C3%A6%3F%7B%C3%B6%C2%AC%C3%B7%C3%95%C2%ABW%C2%B7%C3%881ILLLMJJ%C2%AA%18%C3%88Ld%01%12%0A%3F~%C3%BC8%3B%7B%C3%B6%C3%AC%C3%A5%C3%98%14%3FUP%3F%C2%83%C3%8C%C2%97~p%C3%93%04%C2%8B%C2%B2%C2%B3%C3%A5%C3%A5%C3%A5%0E%1C%1C%1C%0A%2C%C2%84l%07%19%10%C3%8F%2B%20%05b%2F%C3%BC%C3%BC%C3%A1%19!%C3%B5L%C3%84x)%C2%81O%C3%90%07%C2%84%C2%89Q%C3%8BB%C2%8C%C2%A2%05%C2%9F%C3%9Eo!6%3Ci%C3%A7%C3%82~%11%09c%10%5D%C3%B8%C3%A6%C3%85YR%5C%08%C3%93%C3%B7%02%C3%9D%40%03vNcX%C2%8Cas!4Rf%C2%A1%C3%8B%C3%81%C3%B4%C3%AD%C3%80%16%C2%86%12%C3%8C%2C%C3%86%C3%BB%C2%A5%15%C3%93%40%C3%B4%C2%8B%C2%BF%7F%C3%8E%C3%82h%05%16V_%C2%90%3CP%C2%8E%01%5D%0EFc%C2%8D%14%C2%90%C2%84%C3%A3%C3%93%C3%BB%18%C2%AE%00%19%04%028%C3%A4%C3%92%C2%B0%C2%86%C3%A1%C2%85%C2%9F%C3%9F%C3%8F%C2%92%13%C3%8BH%C3%BA%C2%8CQ%0C%C3%84%16%19%C3%84%C2%84!L_%C3%B9%C3%90K%C2%87%C3%94r!A%03%C2%91K%C2%9B6aq%5C%C2%A5%0D%C2%A2%C2%80%C2%A5vyH%C3%B5%12%1B%20%C3%80%00%3D%C2%88%C2%8C%C3%96%C2%8D%C2%AE%C2%B0%C2%98%00%00%00%00IEND%C2%AEB%60%C2%82";
var GetCompSizeButton = group25.add("iconbutton", undefined, File.decode(GetCompSizeButton_imgString), {name: "GetCompSizeButton", style: "toolbutton"});
    GetCompSizeButton.text = "Get Comp Size";

// GROUP26
// =======
var group26 = ButtonGroup4.add("group", undefined, {name: "group26"});
    group26.orientation = "row";
    group26.alignChildren = ["left","center"];
    group26.spacing = 10;
    group26.margins = [50,0,0,0];

var statictext8 = group26.add("statictext", undefined, undefined, {name: "statictext8"});
    statictext8.text = "X";

var RandomizePositionsXTextbox = group26.add('edittext {properties: {name: "RandomizePositionsXTextbox"}}');
    RandomizePositionsXTextbox.text = "0";
    RandomizePositionsXTextbox.preferredSize.width = 40;

var statictext9 = group26.add("statictext", undefined, undefined, {name: "statictext9"});
    statictext9.text = "Y";

var RandomizePositionsYTextbox = group26.add('edittext {properties: {name: "RandomizePositionsYTextbox"}}');
    RandomizePositionsYTextbox.text = "0";
    RandomizePositionsYTextbox.preferredSize.width = 40;

var statictext10 = group26.add("statictext", undefined, undefined, {name: "statictext10"});
    statictext10.text = "Z";

var RandomizePositionsZTextbox = group26.add('edittext {properties: {name: "RandomizePositionsZTextbox"}}');
    RandomizePositionsZTextbox.text = "0";
    RandomizePositionsZTextbox.preferredSize.width = 40;

// BUTTONGROUP4
// ============
var divider12 = ButtonGroup4.add("panel", undefined, undefined, {name: "divider12"});
    divider12.alignment = "fill";

// BUTTONGROUP5
// ============
var ButtonGroup5 = tab2.add("group", undefined, {name: "ButtonGroup5"});
    ButtonGroup5.orientation = "column";
    ButtonGroup5.alignChildren = ["left","center"];
    ButtonGroup5.spacing = 0;
    ButtonGroup5.margins = 0;

// GROUP27
// =======
var group27 = ButtonGroup5.add("group", undefined, {name: "group27"});
    group27.orientation = "row";
    group27.alignChildren = ["left","center"];
    group27.spacing = 10;
    group27.margins = 0;

var image13_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02%C3%81IDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg%C3%B4v%09%3B%3B%C2%BB%14%17%17%C2%971%0B%0B%0B'%C2%90k%C3%88%02%0A!%C2%90%C2%83%C2%96%2CY%12%C3%B5%C3%A0%C3%81%C2%83%C3%8F%03%15D%0A%0A%0A%C2%BC111%C3%8B%C2%80%0EK%60%02%09%C2%80Bh%20%1D%04%02%20%C3%BBA%C3%AE%00%C2%B1%C3%81%C2%8E%1A%C2%88(%C3%83%06%60%C3%AE%60b%18%C2%84%60P%3A%C2%8A%05%C2%99%23%25%25%C3%85%C2%AB%06%04%C3%A8%C2%8An%01%C3%81%C2%B3g%C3%8F%3E%C3%93Z%1E%C2%AB%C2%A3%C3%94%C3%80%40%7D%26%16%C3%87%C2%A7%035%C2%9D%C2%A5%C2%B5%C3%BC%C2%A0%C2%8E%C2%BEQG%0DiG%C2%81%C3%AA%C2%BE%C2%86%C3%97%C2%AF_KN%C2%9D%3Au%C3%96%40%3B%26%3B%3B%3BMTT%C3%B49FH%5D%C2%92U%C3%A9%C2%89%C3%A7%15%C2%90%1AT%C3%91'%C3%8C%C3%8C%C3%AC%C3%90%26%2C%C2%BE%C3%A9%C2%98%C2%8CR%C2%B1%25%07%17%C3%AF%C2%80%3B%0A9%C2%84%C3%A4YX%23WJ%C3%88l%C3%9A%26)%1F9%C2%A0%C2%8E%C2%92aa%C3%A5A%C3%A6330%C3%B2*%C2%B2%C2%B29%C3%90%3B%C3%84P%1C%C3%95%C3%BA%C3%BE%C3%B5-%18%C3%BB%C3%97%C3%BF%C3%BF%C3%8FW%7D%C3%B9%C2%98%C2%AE%C3%B9%C3%A8v%C3%BA%C3%B1%1F%C3%9F%3E%0Fh%C2%9A%C3%BA%C3%8B%C3%B0%C3%BF%C3%B3%C3%85%C2%9F%3Fz%15%1F%C3%9E%C3%B2-%7C%C3%B3%C3%A2%2C%C2%BA%C3%BC%7Dy%C2%B5%C3%8D%C3%BD%22%12%C3%86tu%C2%94%C3%9C%C2%83%5B%C2%8E%5E%C3%8F%1F.%C3%87%C2%A5%C2%81%C2%8D%C2%91Q2%C2%8C%C2%87%7F%C3%A6u9%C3%95%C2%99%C2%B4%C3%8A%C2%A5(%15r%C2%B5%C2%A0%C2%A8Z%0C%C2%AF%4011%1A%C3%B9%C2%98%C2%98%C2%8CA%C2%B94%C2%9D_hy%C3%B1%C2%9B%17%C2%B3%C2%A8%19%C3%85(%C2%8Ez%C3%B2%C3%A7%C3%B7%C2%97%17%7F%C3%BF%C2%9C%C3%85%C3%AF%186cZ%C2%A7)%14G-%C3%BC%C3%BC%C3%A1%19%10%C3%A3-%C3%99%C2%9F*%C2%A8%C2%A7%C2%81%C3%A8O%C3%BF%C3%BE%C2%9D%C3%ADx%C3%BF%C2%BA%11%C2%A4%07Y%1E%C2%94S)%0D5%16R5%C2%80r%C3%A5%C2%86%C2%AF%C2%9F%1A%C2%B0e%02%10%00%C2%95mw%7F%C3%BF%5E%C3%AE%C3%B8%C3%B4%C3%BE%2C%C2%AA%25tB%00W%C2%AED.%C3%9B%C3%94X%C3%99%C3%92(%C3%89%C2%A5d'tB%00%C2%96K%3D%C2%B8x%C3%8F%26%C2%BDzZBJ%C2%94%C2%92%C2%9C%C3%90%09%C3%A7JDF%00%C2%95y%C3%B7%7F%C3%BF%3A%40j%1A%239%C2%A1%13%02%C2%B0%C2%8C%C3%B0%C3%B0%C3%8Fo%C2%ACE%05%C2%A8lC%C3%8F%1C4o%C3%A4%C2%BD%C3%BD%C3%BB%C3%B7%40%C3%95%C3%9B%C2%97~VO%C3%AE%C3%B5b%0B!P%C3%99vFV%C2%B9%01_%7D%C3%8ABmG%C3%A9%3D%C2%BESBH%C2%8D%243%C2%8B%0F0%C2%97%C3%9A_%C3%B9%C3%B9s%16%C2%B6%C3%9A%03%C3%85Q%C2%A0%C3%9C%02J%C2%9C%C3%B4%C2%A8tA%C2%B9T%C2%9F%C2%9D%C2%A3%18%C2%98K%C2%A3%1A%C3%9E%C2%BDJG%C2%8ER%14G%C2%AD%C3%BA%C3%B2%09%C3%94JH%C2%A7%C2%A5c%C2%90%3D%0D%2B%C3%B3%C3%90%C3%93%18%0Bl%7C%08D%C2%83%C3%92%00%10%C2%9F%C2%A5%C2%B1%C2%A3%C3%80%C2%B9%12%5B%C3%94A%C3%9D%C3%B1%0D%C2%9C%C3%90A%03V%C2%A0%C3%B1!zD%1B(W%C2%86%C2%BFx%C3%A2%C2%87%C3%AE%20%C2%90%C3%BD%20w%C3%80z3%0A%0C%C2%83l%24%C2%8F%11%24%08uX%3E%10%1B%0CP%07%C3%A6%03%10_d%C2%80%C2%8Ey%02%04%18%00%C3%AC0%C2%83!%C3%B7%C2%B0%24w%00%00%00%00IEND%C2%AEB%60%C2%82";
var image13 = group27.add("image", undefined, File.decode(image13_imgString), {name: "image13"});

var StaggerPositionsButton = group27.add("button", undefined, undefined, {name: "StaggerPositionsButton"});
    StaggerPositionsButton.text = "Stagger Positions";
    StaggerPositionsButton.preferredSize.width = 210;

// GROUP28
// =======
var group28 = ButtonGroup5.add("group", undefined, {name: "group28"});
    group28.orientation = "row";
    group28.alignChildren = ["left","center"];
    group28.spacing = 10;
    group28.margins = [50,0,0,0];

var StaggerPositionsXCheck = group28.add("checkbox", undefined, undefined, {name: "StaggerPositionsXCheck"});
    StaggerPositionsXCheck.text = "X";
    StaggerPositionsXCheck.value = true;
    StaggerPositionsXCheck.preferredSize.width = 28;

var StaggerPositionsXSlider = group28.add("slider", undefined, undefined, undefined, undefined, {name: "StaggerPositionsXSlider"});
    StaggerPositionsXSlider.minvalue = 0;
    StaggerPositionsXSlider.maxvalue = 100;
    StaggerPositionsXSlider.value = 50;
    StaggerPositionsXSlider.preferredSize.width = 120;

var StaggerPositionsXTextbox = group28.add('edittext {properties: {name: "StaggerPositionsXTextbox"}}');
    StaggerPositionsXTextbox.text = "250";
    StaggerPositionsXTextbox.preferredSize.width = 40;

// GROUP29
// =======
var group29 = ButtonGroup5.add("group", undefined, {name: "group29"});
    group29.orientation = "row";
    group29.alignChildren = ["left","center"];
    group29.spacing = 9;
    group29.margins = [50,0,0,0];

var StaggerPositionsYCheck = group29.add("checkbox", undefined, undefined, {name: "StaggerPositionsYCheck"});
    StaggerPositionsYCheck.text = "Y";
    StaggerPositionsYCheck.value = true;
    StaggerPositionsYCheck.preferredSize.width = 28;

var StaggerPositionsYSlider = group29.add("slider", undefined, undefined, undefined, undefined, {name: "StaggerPositionsYSlider"});
    StaggerPositionsYSlider.minvalue = 0;
    StaggerPositionsYSlider.maxvalue = 100;
    StaggerPositionsYSlider.value = 50;
    StaggerPositionsYSlider.preferredSize.width = 120;

var StaggerPositionsYTextbox = group29.add('edittext {properties: {name: "StaggerPositionsYTextbox"}}');
    StaggerPositionsYTextbox.text = "250";
    StaggerPositionsYTextbox.preferredSize.width = 40;

// GROUP30
// =======
var group30 = ButtonGroup5.add("group", undefined, {name: "group30"});
    group30.orientation = "row";
    group30.alignChildren = ["left","center"];
    group30.spacing = 10;
    group30.margins = [50,0,0,0];

var StaggerPositionsZCheck = group30.add("checkbox", undefined, undefined, {name: "StaggerPositionsZCheck"});
    StaggerPositionsZCheck.text = "Z";
    StaggerPositionsZCheck.preferredSize.width = 28;

var StaggerPositionsZSlider = group30.add("slider", undefined, undefined, undefined, undefined, {name: "StaggerPositionsZSlider"});
    StaggerPositionsZSlider.enabled = false;
    StaggerPositionsZSlider.minvalue = 0;
    StaggerPositionsZSlider.maxvalue = 100;
    StaggerPositionsZSlider.value = 50;
    StaggerPositionsZSlider.preferredSize.width = 120;

var StaggerPositionsZTextbox = group30.add('edittext {properties: {name: "StaggerPositionsZTextbox"}}');
    StaggerPositionsZTextbox.enabled = false;
    StaggerPositionsZTextbox.text = "500";
    StaggerPositionsZTextbox.preferredSize.width = 40;

// BUTTONGROUP5
// ============
var divider13 = ButtonGroup5.add("panel", undefined, undefined, {name: "divider13"});
    divider13.alignment = "fill";

// BUTTONGROUP10
// =============
var ButtonGroup10 = tab2.add("group", undefined, {name: "ButtonGroup10"});
    ButtonGroup10.orientation = "column";
    ButtonGroup10.alignChildren = ["left","center"];
    ButtonGroup10.spacing = 0;
    ButtonGroup10.margins = [0,3,0,0];

// GROUP31
// =======
var group31 = ButtonGroup10.add("group", undefined, {name: "group31"});
    group31.orientation = "row";
    group31.alignChildren = ["left","center"];
    group31.spacing = 10;
    group31.margins = 0;

var image14_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C2%B4IDATx%C3%9A%C3%8CXML%13A%14%C3%9En%17K%17%C2%B6%C2%88%C2%A1BA%C2%A4j%C3%A8YSbR%13%23%26%1E%C3%A5%60bBD%C2%A2%C3%A8a%7B%C3%A8%C3%81T%C2%8E%1E%2C%07%C2%8F%C3%98%13%C2%87r%C3%80j%00C%C3%A2%C2%AD%1CM%C3%80%C2%8BM%0C%1B%C3%B5Z%C3%94%14%11%0A%C2%96D%C2%B4Xhl%C2%8B%C3%B3%25%C3%9Dd%C2%BB%C3%AE%7F%C2%A18%09%C2%99%C2%BC%C3%97%C3%99%C2%B7o%C3%9F%C2%9B%C3%B9%C2%BE%C2%8F%C2%B1QdD%22%11%2F%C2%99F%C2%A8%C2%A3%1Fq%C2%92K%C3%9AVI%C3%A8%7D%C2%B1X%C3%9C%C3%8D%C3%A7%C3%B3B%C2%A1PX%C2%AFw%26%0E%C2%87%C2%A3%C2%93eY%3F%C3%830Nb%5E%60P!%244%3D%3D%3D%C2%94N%C2%A7sGU%22%C2%AF%C3%97%C3%8B%0D%0F%0F%C3%8F%C2%92%C3%84F%C2%90%14%C2%85%0AYM%C3%A8UG%C3%B7%C3%80%C3%85F%C3%A7C%3Be%C3%A3J%C3%94~%C3%AE%C3%9D%C3%9E%C3%AE%C3%93%C2%9B%1B%C2%AB%09%C2%B3q%C3%B0~%C3%A4%C3%A1r%C2%B9(%1A%0E%C2%AB-%C2%BB%C3%8B%1D%C3%AF%0C4%C2%B2%C2%8F%C2%91%10l%C3%8C%C2%B0%C3%A1%C2%B7%12O%C3%8C%C2%83%C2%AE%C2%A5%C3%A4%03M%C2%9C_%C3%89%3F%C3%98%C3%9Cr%C2%A5%C2%96%C2%B8%C2%8C%C3%9E%C2%82G%C2%ADn_%C2%9B%C3%9D%C3%8Em%C2%95J%C2%B9'%3F%C2%B2)%C3%A9o%C2%B9rY%C2%B1%C3%A5%C2%9B%C2%A5b%C3%86L%1CSI-u%C2%9F%C2%8Bx%C3%AC%C3%8Cu%C3%91%C2%BE%C3%91%C3%AC%C2%9A%C3%AF%5B%C3%BD%1C%11%C3%AD%7B%C3%9F%C3%97%16%C2%97%7BzS%C2%AC%C2%8D%C3%B6%C2%89%C2%BE%C3%BC~9%05%C2%BF%C2%998%C3%B2AkUH%1A%08%036%C3%BCR%C3%9F%C2%9D%C3%8D%C2%B5%C3%A0J%C3%B1%C3%8F%C3%8B_%C3%A5%C2%B2%C2%80%19%C2%B6%C2%958%C2%86%C2%92B%C2%A9%C2%95%C3%BC%C3%97%C3%98%C3%A6~%C2%A9%C2%9D%C3%9C%C3%8B%C3%A7.%7D%C3%BB2%3Ew%C3%BF%C2%B6%C2%80%19%C2%B6%C3%96z%C2%BD%C3%B8%C2%9AI%C2%A1%C3%B7J%C3%BE%0F%C2%85%5DA%C3%89%C3%AF%C3%B1xx%25%C3%BF%C3%AB%C3%BC%C3%8E%C2%A2%C2%99%C3%B8%C2%9AIa3fJ%C3%85y%C2%A9%0FvxkC1%C2%A9d2%194%13Gk%C2%B3kntlF%C3%92%C3%BBY%C2%B4%00_%C2%ACwj%C2%B4%C3%A2D%C3%9B%3A%12%C3%A7%1DN%C2%BF%C2%918%C2%BA%C2%90%C2%80%00F%C2%92%09%04%02%C2%B1x%3C%C3%9E%C2%A7%C3%B6%7B%C2%A5%C3%82%C2%82%C2%91%C2%8F%C2%A8%09%3C%C2%ABZ%C2%92%C3%89L%1ET%2CF%C2%89%3A%C2%80%C3%88%00%409%C3%9Eh%0D%C2%A26L%25%C3%B5%C3%ACdW%3FG%C3%93%5C%C3%A2wNx%C2%9E%C3%9B%5EWM%0A%C3%A4%0A%C3%AE%12m%00%23pG~%C3%8C%C2%95F%2C%16%5B%0A%06%C2%83%7D%C2%BAmnd%C2%B9%17%C3%AD%5D1%11p%C2%89%0D%C2%BA%1A%C2%93%C2%92xU%C3%BB%C3%80%C3%B6R%1B%0F%C2%8E%C2%B7u%C3%B0F%C2%BE%1C%0Cod%1D%C3%A2I%19%40%C3%A9%C2%BDU%C2%95%12%C3%99%5E%3AZi%C2%BB%C2%8F%C2%B4%C2%86%07%0E%C2%89%C3%87%1E%C2%9B%1A%7B%08-C%C2%85%C2%90P8%1C%0EF%C2%A3%C3%91%18%C3%84%1A*%C2%A6%C3%B6L%C3%AB%C3%94%C3%8C%3FH.%7F%2F%C2%94g%24%C2%9B%C3%8Dz%26%26%26%26%C2%BFz%7D%0B%C3%B2%05%C2%A0%0E%20%C2%B5%5E%05%C2%90%10%12%C3%93%5B%C3%B7%C3%B6%C3%94%C3%99%C3%91%1E%C2%A6%C3%A1%C2%96%C3%94%07%1Dv%3A%C2%9D%C2%BA%1A%0A%C2%85x%C2%B7%C3%9B%C2%9D%C2%A9j%1F%04ZUK%08%C2%B9%C2%8Enm%18%C3%9A%C3%80%C2%A8%C2%90%C2%91u%C2%88%C2%87%C2%B8Z%C3%AF%C2%ADj%1F6%1B9%7D%02t%12d%C2%89%C2%99%C3%93gd%C2%93%C2%8B%5C%C3%99%C2%BB%C2%B2%3C%C2%84%C3%93%C3%97ng%3Cs%3B%3F%C3%9Fh%C2%9E%3E%0C%2C%C2%90%2F2%08%09%C2%BC%19X%C3%90%C3%BA%C3%A0%03%03O5B%C2%B62t%C2%93%C2%82%C3%AEY%C3%A8%3A%C3%83%13%C3%AE%C3%92%C3%9C3j%C2%84%2C%C2%8F%C2%A3%C2%A5%C2%A3L%2BO_%C3%831%C3%AA%C2%B2%C2%B3IS1%1A%C2%8A%C3%93r%C2%82%3Ft%C3%A5)%25dE%C2%A8%20%15%C2%AE%C2%BB%C3%B2%C3%94%23d%C3%88%C2%95CW%C2%9Er%25%09.%03%20%0EN%C3%8D%C3%B81%C3%83%C2%AE%C2%BB%C3%B2%C2%94k%2B%C2%90%2B%10%C3%9AE%C3%93~%C3%8C%C2%B0%C3%AB%C2%A2%3C%C3%95%C3%BE_%03%00%C3%8A%C3%89%156%C3%BCR%1C%C3%92%C2%8BcIy%C2%AA%C3%BD%06DV%C3%B2C'%C2%99%C2%89s%C2%A0%C3%A0%09%C2%8AP%C3%B2C%C2%B8%C3%95%0C%C2%9E%C2%B8%1F%C2%B2%C3%B20%C3%A8%C2%88p%C3%99%18X%5Ed%7B%C3%98VhJ%C2%92G%0B%232%3C%C3%AE%C2%87%C2%AC%5C%07U%14c%C2%82%C2%AAq%C3%A0%C3%BD%15%C2%A5%C3%B1%C3%A9%C2%BF%C2%BC%C3%89%C2%B3I%C3%AE%3C%1F%00%C3%AB%C2%8E%C3%A8%22o%C2%9B%C3%BC%7D%14%C3%AF%3C%C3%BF%0A0%00%C3%83%C2%83H%25%C3%9E%C3%82%13%C3%8B%00%00%00%00IEND%C2%AEB%60%C2%82";
var image14 = group31.add("image", undefined, File.decode(image14_imgString), {name: "image14"});

var RadialPositionButton = group31.add("button", undefined, undefined, {name: "RadialPositionButton"});
    RadialPositionButton.text = "Radial Position";
    RadialPositionButton.preferredSize.width = 210;

// GROUP32
// =======
var group32 = ButtonGroup10.add("group", undefined, {name: "group32"});
    group32.orientation = "row";
    group32.alignChildren = ["left","center"];
    group32.spacing = 10;
    group32.margins = [50,0,0,0];

var statictext11 = group32.add("statictext", undefined, undefined, {name: "statictext11"});
    statictext11.text = "Rad";
    statictext11.preferredSize.width = 30;

var RadialPositionSlider = group32.add("slider", undefined, undefined, undefined, undefined, {name: "RadialPositionSlider"});
    RadialPositionSlider.minvalue = 0;
    RadialPositionSlider.maxvalue = 100;
    RadialPositionSlider.value = 50;
    RadialPositionSlider.preferredSize.width = 116;

var RadialPositionRadiusTextbox = group32.add('edittext {properties: {name: "RadialPositionRadiusTextbox"}}');
    RadialPositionRadiusTextbox.text = "500";
    RadialPositionRadiusTextbox.preferredSize.width = 40;

// GROUP33
// =======
var group33 = ButtonGroup10.add("group", undefined, {name: "group33"});
    group33.orientation = "row";
    group33.alignChildren = ["left","center"];
    group33.spacing = 10;
    group33.margins = [50,0,0,6];

var RadialPositionDuplicateCheck = group33.add("checkbox", undefined, undefined, {name: "RadialPositionDuplicateCheck"});
    RadialPositionDuplicateCheck.text = "Duplicate ";

var statictext12 = group33.add("statictext", undefined, undefined, {name: "statictext12"});
    statictext12.text = "Num";

var RadialPositionDuplicateTextbox = group33.add('edittext {properties: {name: "RadialPositionDuplicateTextbox"}}');
    RadialPositionDuplicateTextbox.enabled = false;
    RadialPositionDuplicateTextbox.text = "20";

var RadialPositionRotateCheck = group33.add("checkbox", undefined, undefined, {name: "RadialPositionRotateCheck"});
    RadialPositionRotateCheck.text = "Rotate";

// BUTTONGROUP10
// =============
var divider14 = ButtonGroup10.add("panel", undefined, undefined, {name: "divider14"});
    divider14.alignment = "fill";

// BUTTONGROUP6
// ============
var ButtonGroup6 = tab2.add("group", undefined, {name: "ButtonGroup6"});
    ButtonGroup6.orientation = "column";
    ButtonGroup6.alignChildren = ["left","center"];
    ButtonGroup6.spacing = 0;
    ButtonGroup6.margins = 0;

// GROUP34
// =======
var group34 = ButtonGroup6.add("group", undefined, {name: "group34"});
    group34.orientation = "row";
    group34.alignChildren = ["left","center"];
    group34.spacing = 10;
    group34.margins = 0;

var image15_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02%C3%95IDATx%C3%9A%C3%ACXA%C2%8F%C3%92%40%14.Xe%C2%97%40%C3%95%C3%A0%C2%81%C2%B2%C2%89%C2%A9%07k%5C.k%C3%AAE.%C3%84%C2%84c%C2%B9%10%C3%99%C2%83!%C2%91%13%C2%9C%C2%88%11%C3%BF%00%1E%3C%C2%82%07N%C3%B4%C2%A4%09%C3%B1%C2%B0%24%5C%C3%A0H%C3%A2%0D%2F6%C3%AA%01%C3%8C%C2%A2%C2%89D%C2%B3%C2%94%C2%84%25%C2%AE%40%10V%C3%988%0F%3BI%C2%83Lm%14%17b%C3%BA%C2%92f%C3%9A%C2%BE7%C2%9D%C2%AF%C3%9F%C2%BCy%C3%B3%C3%A6Y(%24%C2%A9T%C2%8ACM%C2%94Z%C2%BD%3CEX%C2%9A%16%15%C3%90%C3%AB%C3%89d%C3%B2m8%1C%C3%8A%C3%A3%C3%B1%C2%B8u%C3%9AHl6%C2%9B%C3%87n%C2%B7%0B4Mo%C2%A2%C3%87%1B40%04%C2%80%C3%B2%C3%B9%C3%BC%C3%9Df%C2%B3%C3%99_%15E%1C%C3%879%23%C2%91%C3%88s%04%2Cj%C2%85%17%C3%80%C3%90*%01%C2%81%C3%80%C3%B8%C2%80%03%C3%AE%C2%81)J%3BeO.%C2%B9%05R%C3%877%C3%A3%C2%91%C3%B2%C2%AC%7F4%C2%B3%C2%BD%C2%B5aw%C3%AE%3A%18%C2%9Ed%C2%BB7%C3%A85%5E%C2%8E%C2%86%C2%B3%1F%C2%BD%C3%A7%C2%BC%C3%A0%C3%99%C2%B1m%C2%B0%24%C3%9B%07%C2%87mY%C2%8B%C2%83%C2%9E7%C3%98u%C2%9C%C3%8F%C2%91%3A%C3%AF%C3%986%25%04J%C3%BAi%C3%87%C3%B0z%C2%B6H%C3%A2%08%C3%94l%C2%B0(sQ%C3%A4%C3%8F%C2%9E%C2%8B%C3%A9%C2%80%C2%BA%C2%A9%7D%C2%B6Rk(%26(%13%C3%94%C2%B2%C3%A5%C2%97%C3%95%C3%97%3B9%C2%91I%C3%86%C3%9D%C3%A9D%C3%81%C3%B7%C2%87%C3%93i_%C3%8F%16%C3%B4%C3%9A~%C2%BD3%C2%B4%C3%BC%C3%87%C2%A0%C2%AE%7Fz%1F7%C3%92%C3%B1%C3%B1%C2%97N%03%5D%C2%86l%C3%AF%C2%B4%3F%C2%97PS2%7D%C3%AA%C2%9F%C3%BB%C3%94%01w%C3%AD%15%C3%89%C2%B8%C3%B1%C3%BDX%C2%BA%7D%C3%B0Q%C3%82%C3%9B%C2%91%5ED%C3%9F%1B%7C%C2%8D%C3%A3%C3%AD%C3%A3%C3%85%C3%96%C2%95%C2%98%5ED%C3%9Fj%C3%AE%C2%9B%11%C3%9D%04e%C2%82Z%C3%8F%C2%900%C2%BF%3C%C3%B5%C2%B2%C3%85%C3%B9%C3%A4%C2%8C%24j%18%C2%91%C3%BE%2F%C2%A6%C2%8CJ8%1C%C3%B6%40%C3%ABv%C2%BB%1D%C3%95jU%09%06%C2%83%7C%C2%A9Tj%C3%B8%7C%3E%C2%B6%C3%9Dn%0F%40W(%14Z%C3%AA%C2%B9R%C2%A8%C3%95j%C2%8A%C3%97%C3%ABe%C2%A1%C2%85%3E%C3%98%06%C3%B7%C2%97e%C2%B9O%04%C3%B5%C3%AE%C3%B2Ub%C2%94%C2%AE%1D%C2%8F%C3%8A%C3%AA%C3%A6%0A%C2%A0D%C3%B5%C3%8C%C3%A6%C2%84%C3%8D%C3%96%C3%AF%C3%B7%C3%87%C2%BA%C3%9Dn%3A%10%08%04%C3%91%01%C2%A0%C2%AF%C2%82%C2%9AM%C2%99(%C2%8A9%C2%96e%1F%C3%B1%3C%2F%C2%A2%C2%B6%C2%8C%C2%80%C3%B0%08T%03t%C3%B0%C3%8E%C3%A5rI%08%C2%94L%04%C3%85X%C2%AD%C3%84%C3%93%C2%8CK%C2%93~%C2%A0%01%C3%8BZ6%C2%B2%C3%99l%5Cm%C3%93%C2%98E%2C%C3%A5r9%C2%8E%C3%98%C2%92%17e%0A%C2%89Db%1F%C2%98Z%C2%8AO%01S%C2%98%C2%AD%C3%9F%C3%A9%C2%80)%C3%92wB%C2%A1%C3%90C%C2%98%C3%BA%C2%A5%C3%B8%14f%C3%8A%C2%88%0E%C2%98%22%C3%99%16%C2%8B%C3%85%C3%B4%C3%92%C2%98B%C2%BE%23%C3%80eD%07%C3%BE%C2%A6%C3%B3%C2%9D%20%2C%C2%8E%C2%A50%C2%A5(J%C3%8B%C2%A8%C2%AE%C3%93%C3%A9%10Sapx%C2%BC%12%C3%BF%1A%14%C2%96%5C.%17%C2%ACT*2%C3%B8%10L%1B0%C2%B4%080%C2%84%C2%85%C3%AD%C3%ADm%C2%A1%5E%C2%AF%C3%8Bh%05z%C3%B4~%C2%8A%5E%C2%94%C2%9C%C3%A9%C3%95%12N%23xB%7D*%C3%95%C3%AB%C3%B5%C2%84L%26%C2%93Zu%24O%26%C2%93)%C2%86a%3E%C3%8C%1C%1D%0AVP%1FZ%25%20%18%1Fp%60%C2%A68j%C3%8D*y%16%C3%95%09%01%C3%98%7D%C2%A8%C3%B6%C2%AC%C2%88%C2%A8%23t%C2%BD%C2%A5%C3%94%C2%9A%C3%A7%0F%01%06%00%C3%A3%C2%A3i%C2%9C%11%C3%92%0C%C3%8F%00%00%00%00IEND%C2%AEB%60%C2%82";
var image15 = group34.add("image", undefined, File.decode(image15_imgString), {name: "image15"});

var GridPositionsButton = group34.add("button", undefined, undefined, {name: "GridPositionsButton"});
    GridPositionsButton.text = "Grid Positions";
    GridPositionsButton.preferredSize.width = 210;

// GROUP35
// =======
var group35 = ButtonGroup6.add("group", undefined, {name: "group35"});
    group35.orientation = "row";
    group35.alignChildren = ["left","center"];
    group35.spacing = 10;
    group35.margins = [50,0,0,10];

var GridPositionsDuplicateCheck = group35.add("checkbox", undefined, undefined, {name: "GridPositionsDuplicateCheck"});
    GridPositionsDuplicateCheck.text = "Duplicate (xx)";
    GridPositionsDuplicateCheck.preferredSize.width = 109;

var GridPositions3DCheck = group35.add("checkbox", undefined, undefined, {name: "GridPositions3DCheck"});
    GridPositions3DCheck.text = "3D Grid";

// GROUP36
// =======
var group36 = ButtonGroup6.add("group", undefined, {name: "group36"});
    group36.orientation = "column";
    group36.alignChildren = ["left","center"];
    group36.spacing = 0;
    group36.margins = [50,0,0,0];

// GROUP37
// =======
var group37 = group36.add("group", undefined, {name: "group37"});
    group37.orientation = "row";
    group37.alignChildren = ["left","center"];
    group37.spacing = 10;
    group37.margins = 0;

var UnifyGridCountCheck = group37.add("checkbox", undefined, undefined, {name: "UnifyGridCountCheck"});
    UnifyGridCountCheck.text = "Unify Grid Count";
    UnifyGridCountCheck.value = true;

// GROUP38
// =======
var group38 = group36.add("group", undefined, {name: "group38"});
    group38.orientation = "row";
    group38.alignChildren = ["left","center"];
    group38.spacing = 10;
    group38.margins = [0,0,0,0];

var statictext13 = group38.add("statictext", undefined, undefined, {name: "statictext13"});
    statictext13.text = "Col";

var GridCountColTextbox = group38.add('edittext {properties: {name: "GridCountColTextbox"}}');
    GridCountColTextbox.text = "2";
    GridCountColTextbox.preferredSize.width = 30;

// GRIDROWGROUP
// ============
var GridRowGroup = group38.add("group", undefined, {name: "GridRowGroup"});
    GridRowGroup.enabled = false;
    GridRowGroup.orientation = "row";
    GridRowGroup.alignChildren = ["left","center"];
    GridRowGroup.spacing = 5;
    GridRowGroup.margins = 0;

var statictext14 = GridRowGroup.add("statictext", undefined, undefined, {name: "statictext14"});
    statictext14.text = "Row";

var GridCountRowTextbox = GridRowGroup.add('edittext {properties: {name: "GridCountRowTextbox"}}');
    GridCountRowTextbox.text = "2";
    GridCountRowTextbox.preferredSize.width = 30;

// GRIDSTEPGROUP
// =============
var GridStepGroup = group38.add("group", undefined, {name: "GridStepGroup"});
    GridStepGroup.enabled = false;
    GridStepGroup.orientation = "row";
    GridStepGroup.alignChildren = ["left","center"];
    GridStepGroup.spacing = 5;
    GridStepGroup.margins = 0;

var statictext15 = GridStepGroup.add("statictext", undefined, undefined, {name: "statictext15"});
    statictext15.text = "Step";

var GridCountStepTextbox = GridStepGroup.add('edittext {properties: {name: "GridCountStepTextbox"}}');
    GridCountStepTextbox.text = "2";
    GridCountStepTextbox.preferredSize.width = 30;

// GROUP39
// =======
var group39 = ButtonGroup6.add("group", undefined, {name: "group39"});
    group39.orientation = "column";
    group39.alignChildren = ["left","center"];
    group39.spacing = 0;
    group39.margins = [50,10,0,0];

// GROUP40
// =======
var group40 = group39.add("group", undefined, {name: "group40"});
    group40.orientation = "row";
    group40.alignChildren = ["left","center"];
    group40.spacing = 10;
    group40.margins = 0;

var UnifyGapCheck = group40.add("checkbox", undefined, undefined, {name: "UnifyGapCheck"});
    UnifyGapCheck.text = "Unify Gap";
    UnifyGapCheck.value = true;

// GROUP41
// =======
var group41 = group39.add("group", undefined, {name: "group41"});
    group41.orientation = "row";
    group41.alignChildren = ["left","center"];
    group41.spacing = 10;
    group41.margins = [0,0,0,0];

var statictext16 = group41.add("statictext", undefined, undefined, {name: "statictext16"});
    statictext16.text = "Col";

var GapColTextbox = group41.add('edittext {properties: {name: "GapColTextbox"}}');
    GapColTextbox.text = "50";
    GapColTextbox.preferredSize.width = 30;

// GAPROWGROUP
// ===========
var GapRowGroup = group41.add("group", undefined, {name: "GapRowGroup"});
    GapRowGroup.enabled = false;
    GapRowGroup.orientation = "row";
    GapRowGroup.alignChildren = ["left","center"];
    GapRowGroup.spacing = 5;
    GapRowGroup.margins = 0;

var statictext17 = GapRowGroup.add("statictext", undefined, undefined, {name: "statictext17"});
    statictext17.text = "Row";

var GapRowTextbox = GapRowGroup.add('edittext {properties: {name: "GapRowTextbox"}}');
    GapRowTextbox.text = "50";
    GapRowTextbox.preferredSize.width = 30;

// GAPSTEPGROUP
// ============
var GapStepGroup = group41.add("group", undefined, {name: "GapStepGroup"});
    GapStepGroup.enabled = false;
    GapStepGroup.orientation = "row";
    GapStepGroup.alignChildren = ["left","center"];
    GapStepGroup.spacing = 5;
    GapStepGroup.margins = 0;

var statictext18 = GapStepGroup.add("statictext", undefined, undefined, {name: "statictext18"});
    statictext18.text = "Step";

var GapStepTextbox = GapStepGroup.add('edittext {properties: {name: "GapStepTextbox"}}');
    GapStepTextbox.text = "50";
    GapStepTextbox.preferredSize.width = 30;

// BUTTONGROUP6
// ============
var divider15 = ButtonGroup6.add("panel", undefined, undefined, {name: "divider15"});
    divider15.alignment = "fill";

// BUTTONGROUP11
// =============
var ButtonGroup11 = tab2.add("group", undefined, {name: "ButtonGroup11"});
    ButtonGroup11.orientation = "column";
    ButtonGroup11.alignChildren = ["left","center"];
    ButtonGroup11.spacing = 0;
    ButtonGroup11.margins = [0,3,0,0];

// GROUP42
// =======
var group42 = ButtonGroup11.add("group", undefined, {name: "group42"});
    group42.orientation = "row";
    group42.alignChildren = ["left","center"];
    group42.spacing = 10;
    group42.margins = 0;

var image16_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%04XIDATx%C3%9A%C3%8CX_LSW%18%3F%C2%94%22X%C2%B8M%C2%A0%C2%84%40%C3%B7'%C2%8D%C2%84%0B%2C%C3%8D%C2%A2%5C%25%C3%AA%C3%83%06%7BX%C3%B60L%40LS%25%C2%A3%C3%9DC!%C3%91%04%C2%B2%C2%92%C3%B0%08%C3%84h%24%C2%A1%C3%8A2c%C2%80%2C%40%16%C3%A6Bt%C3%B8P%C2%9F%17x%C3%99L%C3%A5%22F%C2%96i%0D%1B%19Z%C2%88%03JzI'%06%C2%8B%C3%A7w%C3%A5%C3%94%2B%5E%C3%A4%C2%A2%C3%BD%C3%83IN%C3%8Fw%C3%8E%3D%7F~%C3%B7%C3%BB%C2%BE%C3%9F%C3%B7%C3%9D%C2%9E%14BK%7B%7B%C2%BB%C2%856%0E%C2%92%C3%BC2H%C2%B1%C3%8C%C2%A4l%00%C2%BA%C2%B3%C2%B6%C2%B6%C3%B6%7F8%1C%16WWW%03%C2%89F%C2%92%C2%9E%C2%9En6%18%0C%C2%82%5E%C2%AF%C3%9FK%C2%BB%07%C3%B4%C3%90%10%00%0D%0D%0D%C2%9D%C2%9C%C2%99%C2%99%C2%910izz%C3%9A%C2%9D%C2%93%C2%93%C3%83C%C3%AE%C3%AB%C3%AB%C3%B3%C2%B4%C2%B6%C2%B6%C3%BA%C3%A3%0D%C3%8Cb%C2%B1puuuW)0%07%40%11h%C2%88%01B%01%C2%A0%C3%8C%C3%80%C2%BC%10%3A%7B%C2%9E%C3%94%C3%BEu%C2%BF%C3%BD%C3%98%C3%87E%C2%92r%C2%83!i%C3%99s.%C3%B8_L%C2%81%C3%A2%7C%C3%A00%1A%C2%8DD%06%C2%A5f%C2%B2%C3%94%0F%3F%20%5C%C3%93%19r%C2%AF%7F%C3%90%3By%C3%A3F%14%C3%80%C3%97%C2%99%C2%9C%3B75%C2%95%C2%8B%C2%87%C2%B6%18%0E%C2%BD%C3%9A%C3%83%C3%89%C3%89%C3%89%C2%9Byyy%221f%C2%91ki)cW%16%C3%A6%C2%A3%C2%A0%C2%BF2p%C3%92%C3%BB%1C%C3%9C%C3%99%C3%99%C3%89%C2%BB%5C.7%C3%A4%C2%A5%C2%A5%25%7Faa%C2%A1g%C3%B3%1CUP%C2%95%C2%95%C2%95%C3%9Ex%C3%B9%0E%7DY.%C3%83'%0A%C2%B0%041%C3%A7%C2%AB%C3%8E%C3%91%25%C2%9Ai%C3%A6%C3%8B%C2%BD%C3%BCR%C3%83i%C3%B2%C3%BC%C3%91%C3%A3-%C3%A7%C3%A8%13%09%C3%A8z%C3%BEGU%C3%96%C3%85%C2%A0%7B%C3%8A%C2%94%C3%AD%09%04f%C3%BDO%C3%BAD)%C2%A9%C2%A0%00%C3%A8H%C2%86%C2%A1%C3%AD%C2%8F%C2%A7%C3%A1%C2%8EZ%C3%B1%C2%81%C2%978o%C2%BD%C2%BF%C2%A6x%C2%9E%C3%A7%C2%ACVk%01%19%C2%BFG%0C%C3%BB%C3%B6%C2%99%2B%C2%AC%25s%C2%A3%C2%A3%C2%A3%C2%81%C2%8A%C2%8A%0A3%0D!Y%C2%94%C3%8A%5C(%14%C2%92%C2%A8%C3%B3%C2%AE%C2%B0%C3%B1%C2%8D%C3%B0%C2%92u%C3%B2%C3%B7%C3%9B%C3%85Q%40%C3%B3%C2%B3%C3%9B%C3%BA%C2%ABfP%00TVVV%05P%C2%99%C3%85%C2%BC%20%C3%A4%C2%99%08%0E%17h%C3%A9%C3%AA%C3%AAjc%C3%B3ZZZ%3A%C3%98%C2%B8L%C2%9A%60%C3%88u%20%C3%83P%C2%A0%15%C3%90%3B9z0%C3%B2%C3%9C%1FN%C3%93k%0E%0B%C2%9F%C3%BE6%C2%96u%C3%A7%C2%8B%C3%8F%C3%A6%C2%AE%1E%3D%C3%B4%40%C3%AB%1A%C3%8D%C2%9A%C2%82Y%C2%82%C3%81%C2%A0%C3%BFW%5B5Y%5C%5C%0C%C3%90%1Fy%5C%C2%96%15%C2%85%C3%B5Y%C3%BB%C3%BD%C3%B1%C2%AA%C2%8B%C3%B2%C3%BA%C2%BF%1F%C2%AE%C3%84%1C%C3%94%C3%9B%C3%8A%C3%B0%C3%B0%C2%B0G%C2%A7%C3%93q%C2%91HD%C2%8A%C3%85~%C2%9AA%C3%81OP%C3%9F%C3%B8%C3%96%18%1C%14Q%C3%95%C3%867D1n%C2%A0%C3%80%26%C3%A6%C2%BC%C3%8C48%C3%98%C3%A1p%08%26%C2%93%C3%89%C3%8Cq%5C%C2%81%24Isx%C3%86%C3%861%07%C3%8Fdd%C2%B4%C2%A8%C2%BD%C2%94fG%C2%A7%C2%BE%C3%93%C2%BB%C2%BE%C2%BE%3E%C2%8E%3A00%200jggg%C3%B3%C3%AC%20v%18Z%C2%B0%C2%8F%16%17Z%C3%A58%C2%93%C2%B1%0E%C3%AB!c%3F%C2%B67%C3%8E%C3%99%C2%91%C2%A6%C2%9E%C3%9D%C3%B2%C2%91%05%C3%BB7%C3%A4KBz%1F%5B%C2%8A%09%C2%99%C3%B8S%C2%AE%C2%A1HD%1C%C3%BE%C3%B6T%C3%94%24%C3%90%C2%90r%1D%C3%AB%C2%B3%C3%96%C3%96%C3%BF%C2%B3%60%C3%94%C3%A9%04'!%C3%B6%1F%C2%B0O%C3%87%05%12%C2%A05%C3%B7%C2%97%C2%9F%08)%C3%A1wf%C2%BE%3D%C2%87%C3%8B%C2%89%C3%B9%C2%9F%C3%BB0Q%C2%83%C3%93%C3%A9%14kjjx%C3%84)0%C2%90H%C2%AF%C3%BC%19%26S%C2%AEc%7D%C3%96%C3%BEx%C3%A2%C3%98M%C2%AA)%C3%BF%C3%84%C3%84%C2%84wdd%C3%84%0FMQ%C3%93%C3%8A%1A%0A%2F%2Fk%07E7i%C3%98*%24l%0E%03%C2%90%110%C2%95%3E%C2%A5%C2%9C%03%13b%1D%C3%96%C2%A3%C2%8F%17%C2%A4%C3%B5%60%C3%9C%C3%99%C2%A7%C3%86%C2%B0%C2%84%C2%B1%C2%AF%C2%B1%C2%B1%C3%B1s%C3%884%1E%C2%AD%C3%B8%7C%C2%BE%40ww%C3%B7%C2%96%C3%ACknn%16%C3%8A%C3%8B%C3%8B%C3%8D4~%C3%89%0E%C3%9E%C3%93%C3%933%C2%A6%C2%95%7D%C2%9AA%C2%81%3D6%C2%9B%C3%8D%1D%C2%A5%C2%ADN%C2%87%2FF%C2%91%01%C3%9A%C3%A4%C3%B4%22%00%C3%99%C3%AD%C3%B6hN%04(%C2%ADgi%C3%8E%7D%C3%B8%0Axm!%C2%8D%C3%A0%C2%9BY%C2%A6%C3%AC3%0D)_*%C3%A6%C2%A0%C3%B0Y%C2%A2%C3%AC%C2%B3%C2%94%C3%82X%06%C3%9A%C2%AB%C2%B11%C2%AEi%06%C3%AC%01%C3%8B%C3%94%C3%98%C2%A7%0C%07%C2%AC%0Fs%C2%A12%0DMMM%C3%8D%C3%85%1C%C3%94v%C3%AC%C3%BB%C3%8ER%C3%9C%C3%A6%C3%B1x%C2%BC%C3%8A%C3%B9q%C3%97%C3%94N%0Be%2BW__%1F%0D%C3%99%C2%88OI%01u)7_%60%C3%B2%C3%BE%C2%A2R%C3%BEh%C3%89'n%C3%BC%C2%95B%C3%9D.%60%C3%86%05%14r%22%C3%BD%C2%A3%C3%AA%C2%8A%C2%A6)%C3%9F8'I%2Bd%C3%AF%C3%B1jb%C2%A8%C2%ADN%C2%8E%C3%B9J%C3%BF%7D%C3%B8Zj%C3%AA%3C%C3%BD%C3%B2%C2%9F%C3%B03%24%C3%B7-r%5C%C3%82%7D%0A75%C2%B46%C2%BC%C2%B3%C2%A3%C3%A3~h%17%5C%C2%981%1Ca9x%C3%A2%C3%82%0A%C3%B7C%C3%89%04%C2%84%C3%B3%C2%81%03%C3%B2%C2%AE%C2%BC%C3%89KQ%C3%9Cy6%C2%81%C3%89IR%14%C2%98p%C2%97%C3%9Dy%C2%BE%10%60%00F%C3%86UfC%C3%A5%C3%8D%C2%95%00%00%00%00IEND%C2%AEB%60%C2%82";
var image16 = group42.add("image", undefined, File.decode(image16_imgString), {name: "image16"});

var GridMoveButton = group42.add("button", undefined, undefined, {name: "GridMoveButton"});
    GridMoveButton.text = "Grid Move";
    GridMoveButton.preferredSize.width = 210;

// GROUP43
// =======
var group43 = ButtonGroup11.add("group", undefined, {name: "group43"});
    group43.orientation = "row";
    group43.alignChildren = ["left","center"];
    group43.spacing = 10;
    group43.margins = [50,0,0,6];

var GridMoveDirection2V = group43.add("radiobutton", undefined, undefined, {name: "GridMoveDirection2V"});
    GridMoveDirection2V.text = "2V";
    GridMoveDirection2V.value = true;
    GridMoveDirection2V.preferredSize.width = 45;

var GridMoveDirection2H = group43.add("radiobutton", undefined, undefined, {name: "GridMoveDirection2H"});
    GridMoveDirection2H.text = "2H";
    GridMoveDirection2H.preferredSize.width = 45;

var GridMoveDirection4 = group43.add("radiobutton", undefined, undefined, {name: "GridMoveDirection4"});
    GridMoveDirection4.text = "4";
    GridMoveDirection4.preferredSize.width = 45;

var GridMoveDirection8 = group43.add("radiobutton", undefined, undefined, {name: "GridMoveDirection8"});
    GridMoveDirection8.text = "8";
    GridMoveDirection8.preferredSize.width = 45;

// GROUP44
// =======
var group44 = ButtonGroup11.add("group", undefined, {name: "group44"});
    group44.orientation = "row";
    group44.alignChildren = ["left","center"];
    group44.spacing = 10;
    group44.margins = [50,0,0,0];

var statictext19 = group44.add("statictext", undefined, undefined, {name: "statictext19"});
    statictext19.text = "Distance";

var GridMoveDistanceTextbox = group44.add('edittext {properties: {name: "GridMoveDistanceTextbox"}}');
    GridMoveDistanceTextbox.text = "100";
    GridMoveDistanceTextbox.preferredSize.width = 40;

var statictext20 = group44.add("statictext", undefined, undefined, {name: "statictext20"});
    statictext20.text = "Mult";

var GridMoveMultiplierTextbox = group44.add('edittext {properties: {name: "GridMoveMultiplierTextbox"}}');
    GridMoveMultiplierTextbox.text = "1";
    GridMoveMultiplierTextbox.preferredSize.width = 30;

// GROUP45
// =======
var group45 = ButtonGroup11.add("group", undefined, {name: "group45"});
    group45.orientation = "row";
    group45.alignChildren = ["left","center"];
    group45.spacing = 10;
    group45.margins = [50,0,0,0];

var GridMoveAllowStatisCheck = group45.add("checkbox", undefined, undefined, {name: "GridMoveAllowStatisCheck"});
    GridMoveAllowStatisCheck.text = "Allow Stasis";

// BUTTONGROUP11
// =============
var divider16 = ButtonGroup11.add("panel", undefined, undefined, {name: "divider16"});
    divider16.alignment = "fill";

// BUTTONGROUP12
// =============
var ButtonGroup12 = tab2.add("group", undefined, {name: "ButtonGroup12"});
    ButtonGroup12.orientation = "column";
    ButtonGroup12.alignChildren = ["left","center"];
    ButtonGroup12.spacing = 0;
    ButtonGroup12.margins = [0,3,0,0];

// GROUP46
// =======
var group46 = ButtonGroup12.add("group", undefined, {name: "group46"});
    group46.orientation = "row";
    group46.alignChildren = ["left","center"];
    group46.spacing = 10;
    group46.margins = 0;

var image17_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03vIDATx%C3%9A%C3%8C%C2%98OL%C3%93p%14%C3%87%C3%97%C2%AD%5D%C3%B7%C2%87m%C2%B2%01c%0B%C3%81%5D%C3%80%C2%93%063%C2%BD%C2%91%18%03%C3%A1%20J%22%24%C3%86%2C%18%C2%89%09F%0E%C3%82Y%C3%B1%C3%80%05%C3%B5F%C2%A2%C2%89%1EP%C2%94H%16c%C2%8CF%03%17%02%C3%AA%C2%81D%13%C2%B2%C3%B8%C2%87%C2%93x%C2%B0%02%0E7%C3%98%C3%86%C3%9A%C3%BD%C3%AB%C2%9Fm%C3%BE%1E%19fY%3A%C3%96%02%C2%B3%7BI%C3%93%C3%B6%C3%B5%C3%8F%C3%AF%C3%93%C3%B7%5E%C2%BF%C2%BF%C2%97%1F%C2%A6B622%C3%A2B%C2%BB%3E%C2%95%C3%B2%C3%B6%14%C2%B1PX%0E%C3%A8%C2%B3%20%08%C3%89D%22%C3%A1cY%C3%96%C3%BF%C2%BFIH%C2%92t%1A%0C%067%C2%8E%C3%A3ztz%1C%C2%87%08%01%C3%90%C3%94%C3%94%C2%94%C2%87%C2%A2(F%C2%A9%10%C2%B9%5C.Soo%C2%AF%17%C2%81%C3%B5%C2%A9%C3%81%01%11R%12%08%0C%C3%86%07%0E8%C3%9E%C2%86R%22eb%C2%B6%C3%83%C2%81%C2%8B%5D%1C%C2%AB%C2%A9w%C2%B7%C2%90zw%C3%91j%C2%A4%23%C3%93%C2%93%C3%8CV%C3%99%3ED%14%0A%C2%80%C2%9A%09%C3%AD%C3%95b%0F%C2%B5%C2%90%3A%C3%9F%24%C2%A3*%1B%C2%94%C2%BA%5C%2F%1E%C2%ABq%C2%B8_%C3%967%C2%9Es%11ZmE%40u%19%C3%8D6%14M%C2%B7M%C2%A3q%C2%8C%C3%97%3A%3D%C2%83%C2%87l.E%C2%A1%202%C3%97%2C%C3%96%C2%8E%7F%C3%B5%C2%81a%C3%9A%C3%B3Fs%C3%87pum%C2%B3bP%5DF%C2%93S%C2%8Fa%C2%A6%7C%1F%C2%9D%C3%89%C2%84F%23%1B%C3%8B%C2%8AA%C3%9D%C3%9B%0AQ%C2%AF%C3%A3%C3%B4%C2%AC%C2%90%C3%8Drp%0E%C3%BB%C3%87t%C3%A4%C2%83%C3%A25%05%60%C3%BD%1B~%C3%AF%C2%BA%20P%C2%8Bl%C3%92%C3%B76N%C2%87%C3%B6-%09%C2%A0C%C3%B0%C3%9B%17%7B%C3%A8E%C2%8C.%C2%99%0A%C2%8A%C3%A78O%60u%C3%B6%C3%80t%0A%C2%84%C2%B1%C2%9C%3A%C2%A4%C2%98N%C3%A5%C3%9Bi%C2%BD%C3%91RQP7%C2%90%14%C3%9C%C2%B5%C3%99%07%C3%86%C3%AB%C2%9C%C2%AD%15%01%05%11%3Ak%C2%A8%C3%AA%C2%84%C3%A3cZ%5D%C3%AB%1BGcO%13%C2%A1%C3%95)%06%05%C2%83%23%C3%81%C3%ACA%C3%A2I%C3%AE%C3%B8%C3%AA5x%C3%93C%C2%A4%C3%B0%17%C2%AB%2C%C3%B6%7DA9q%C2%828c4Y%2F%C2%9B%C2%AB%C2%9Dr%C2%A0Fm%C3%B66%C2%93Z%5DW%C3%A8%07%C3%9Fu%C2%8B%C3%95s%C3%9Bf%3F*%C3%AB%C3%AF%03%10%24%09%C2%A6%23%04i1%C2%AB%C3%95%C2%BA%3C%C3%BF%C2%86_%C3%A0%C3%B9R%400%C3%A0a%C2%9C(%3E(%C2%8A%5E%C2%9B%C3%9E%C3%98%C3%B9%C3%8C%C3%9E%60%C2%BF%14X%C2%9B%C2%93%14)%C3%B4B%C3%9DIRo%C3%8F%07%C3%8A%C2%B5%2C%C2%A6R%40%C2%90%1A%18PJ4Q%7Btb%C3%8E%C3%A9%C2%BARXg%C2%A2P%1FS%09%C2%86%C3%8Ff%C3%93%C2%85~%C2%88%5C%C2%A9%3A%C2%82%C3%94%C3%88I3%C2%9A'-%C2%92k%C3%AAwZ%C2%88%15%C3%BA%20r%C2%90%C3%9A%C2%A2%C3%93K%C2%8D%C2%A3%3B%C2%BF%C2%B0%C2%A5%C3%98%C3%BDh%C3%98%C3%BB%C2%83%C3%A7R%C2%92%C2%A0%C2%969%C2%96)%C3%92u%C2%8A%C2%A6%10%C3%95G%C2%BBU%C2%A3i%C2%94%03%C3%B4)%C2%95%C2%9C%7F%1E%C2%8B%06%24GJN%0AA%20%C2%A1%3E%C3%A4%00%C3%BD%12%C3%B8%C2%A5%C2%A1%C3%8D%C3%B5E%C3%99%C2%92%205%C2%85%C3%A87%C2%97%C2%952%26%C2%93%09%0E%C2%87%02%C3%B3%7B%C3%92)%C2%A9)%C2%BC%19%0A%2C%C2%A1I%C3%9C%C2%8Bz'%C2%B6%14%10%C3%9C%C3%B3%C2%88%C2%8E%C3%8C%14%C3%96%C2%91d(9)%7C%10%0D%C2%AF%C3%9C%0A%07'%20%0A%C2%BB%C2%BDs%3A%11%C2%9B%11%C2%AB%23Y%C2%8A%5E%C2%98B%C3%94%C3%9A%C2%A6%C2%BE%C3%B3lT%C3%AC%C3%9E%C3%B7%C3%89x%C2%B4%C3%9DOM%40%C2%BD%C2%88%5D%C3%BF%C3%86%C2%A5%16%C3%AEHh%C2%8B%C3%B1R7%C2%AC%C3%B2%5C%C2%BC%0AS%13%3F%05%C2%8E%C3%B9%C3%82%C2%A6%18)%C2%8A~%C3%A1%C3%8F%C3%AA%0CR%C3%B5%C2%95S%3AC%C3%BB%C2%8ED%C2%84%C3%93%C3%A9%C2%95%C3%BE%C2%A0%7Fa%C3%8FM%5E%C2%BE%C2%BDC_%0F%C2%9B%C3%9C%09%19%C3%AA%0C%C2%A9%7Bp%C3%80b%C3%AD%C2%86%C3%B3%C3%81%C3%8D%C3%B5W%C3%BB%C3%AA%3C%0F%C3%8A%C2%A0v%7Cl%C3%B2I%03N%C2%90%C2%BB%15%C2%B6(%14%C2%AC%0F%C2%95%0B%0C%60%C2%A4%02%C3%A58%12%C3%9B%C2%85%0E%0BV%C2%B0%3E%C2%A4%C3%A4%C2%8A%0B%C2%8C%0F%1Cp%5C%C2%91%2By%188s%60C%C2%A0%C2%8B%0A%05j%0Bm_U%C2%B95%C3%8F%C2%BF%02%0C%00%C3%81i%C2%86%C3%83%C2%BF%3C%C2%96%7F%00%00%00%00IEND%C2%AEB%60%C2%82";
var image17 = group46.add("image", undefined, File.decode(image17_imgString), {name: "image17"});

var RandomizerButton = group46.add("button", undefined, undefined, {name: "RandomizerButton"});
    RandomizerButton.text = "Randomizer";
    RandomizerButton.preferredSize.width = 210;

// GROUP47
// =======
var group47 = ButtonGroup12.add("group", undefined, {name: "group47"});
    group47.orientation = "row";
    group47.alignChildren = ["left","center"];
    group47.spacing = 10;
    group47.margins = [50,0,0,0];

var RandomizerScaleCheck = group47.add("checkbox", undefined, undefined, {name: "RandomizerScaleCheck"});
    RandomizerScaleCheck.text = "Sca";
    RandomizerScaleCheck.value = true;
    RandomizerScaleCheck.preferredSize.width = 44;

// RANDOMSCALEGROUP
// ================
var RandomScaleGroup = group47.add("group", undefined, {name: "RandomScaleGroup"});
    RandomScaleGroup.orientation = "row";
    RandomScaleGroup.alignChildren = ["left","center"];
    RandomScaleGroup.spacing = 5;
    RandomScaleGroup.margins = 0;

var statictext21 = RandomScaleGroup.add("statictext", undefined, undefined, {name: "statictext21"});
    statictext21.text = "Min";

var RandomizerScaleMinTextbox = RandomScaleGroup.add('edittext {properties: {name: "RandomizerScaleMinTextbox"}}');
    RandomizerScaleMinTextbox.text = "1";
    RandomizerScaleMinTextbox.preferredSize.width = 30;

var statictext22 = RandomScaleGroup.add("statictext", undefined, undefined, {name: "statictext22"});
    statictext22.text = "Max";

var RandomizerScaleMaxTextbox = RandomScaleGroup.add('edittext {properties: {name: "RandomizerScaleMaxTextbox"}}');
    RandomizerScaleMaxTextbox.text = "100";
    RandomizerScaleMaxTextbox.preferredSize.width = 30;

var RandomizerScaleLinkCheck = RandomScaleGroup.add("checkbox", undefined, undefined, {name: "RandomizerScaleLinkCheck"});
    RandomizerScaleLinkCheck.value = true;

// GROUP48
// =======
var group48 = ButtonGroup12.add("group", undefined, {name: "group48"});
    group48.orientation = "row";
    group48.alignChildren = ["left","center"];
    group48.spacing = 10;
    group48.margins = [50,0,0,0];

var RandomizerRotationCheck = group48.add("checkbox", undefined, undefined, {name: "RandomizerRotationCheck"});
    RandomizerRotationCheck.text = "Rot";
    RandomizerRotationCheck.preferredSize.width = 44;

// RANDOMROTATIONGROUP
// ===================
var RandomRotationGroup = group48.add("group", undefined, {name: "RandomRotationGroup"});
    RandomRotationGroup.enabled = false;
    RandomRotationGroup.orientation = "row";
    RandomRotationGroup.alignChildren = ["left","center"];
    RandomRotationGroup.spacing = 5;
    RandomRotationGroup.margins = 0;

var statictext23 = RandomRotationGroup.add("statictext", undefined, undefined, {name: "statictext23"});
    statictext23.text = "Min";

var RandomizerRotationMinTextbox = RandomRotationGroup.add('edittext {properties: {name: "RandomizerRotationMinTextbox"}}');
    RandomizerRotationMinTextbox.text = "1";
    RandomizerRotationMinTextbox.preferredSize.width = 30;

var statictext24 = RandomRotationGroup.add("statictext", undefined, undefined, {name: "statictext24"});
    statictext24.text = "Max";

var RandomizerRotationMaxTextbox = RandomRotationGroup.add('edittext {properties: {name: "RandomizerRotationMaxTextbox"}}');
    RandomizerRotationMaxTextbox.text = "360";
    RandomizerRotationMaxTextbox.preferredSize.width = 30;

// GROUP49
// =======
var group49 = ButtonGroup12.add("group", undefined, {name: "group49"});
    group49.orientation = "row";
    group49.alignChildren = ["left","center"];
    group49.spacing = 10;
    group49.margins = [50,0,0,0];

var RandomizerOpacityCheck = group49.add("checkbox", undefined, undefined, {name: "RandomizerOpacityCheck"});
    RandomizerOpacityCheck.text = "Opa";
    RandomizerOpacityCheck.preferredSize.width = 44;

// RANDOMOPACITYGROUP
// ==================
var RandomOpacityGroup = group49.add("group", undefined, {name: "RandomOpacityGroup"});
    RandomOpacityGroup.enabled = false;
    RandomOpacityGroup.orientation = "row";
    RandomOpacityGroup.alignChildren = ["left","center"];
    RandomOpacityGroup.spacing = 5;
    RandomOpacityGroup.margins = 0;

var statictext25 = RandomOpacityGroup.add("statictext", undefined, undefined, {name: "statictext25"});
    statictext25.text = "Min";

var RandomizerOpacityMinTextbox = RandomOpacityGroup.add('edittext {properties: {name: "RandomizerOpacityMinTextbox"}}');
    RandomizerOpacityMinTextbox.text = "1";
    RandomizerOpacityMinTextbox.preferredSize.width = 30;

var statictext26 = RandomOpacityGroup.add("statictext", undefined, undefined, {name: "statictext26"});
    statictext26.text = "Max";

var RandomizerOpacityMaxTextbox = RandomOpacityGroup.add('edittext {properties: {name: "RandomizerOpacityMaxTextbox"}}');
    RandomizerOpacityMaxTextbox.text = "100";
    RandomizerOpacityMaxTextbox.preferredSize.width = 30;

// BUTTONGROUP12
// =============
var divider17 = ButtonGroup12.add("panel", undefined, undefined, {name: "divider17"});
    divider17.alignment = "fill";

// TAB3
// ====
var tab3 = tpanel1.add("tab", undefined, undefined, {name: "tab3"});
    tab3.text = "Utils";
    tab3.orientation = "column";
    tab3.alignChildren = ["left","top"];
    tab3.spacing = 10;
    tab3.margins = 10;

// BUTTONGROUP13
// =============
var ButtonGroup13 = tab3.add("group", undefined, {name: "ButtonGroup13"});
    ButtonGroup13.orientation = "column";
    ButtonGroup13.alignChildren = ["left","center"];
    ButtonGroup13.spacing = 0;
    ButtonGroup13.margins = [0,3,0,0];

// GROUP50
// =======
var group50 = ButtonGroup13.add("group", undefined, {name: "group50"});
    group50.orientation = "row";
    group50.alignChildren = ["left","center"];
    group50.spacing = 10;
    group50.margins = 0;

var image18_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%05%C3%BBIDATx%C3%9A%C3%8CX%5Dh%14W%14%C2%BE%C3%B7%C3%8E%C3%AC%C3%8C%C3%AC_v7%26jB%C2%A4%11lL%C2%89%C2%90%C2%9A%C3%A8C%C2%90%C2%80-E%C2%B0(%C2%85%3C%C2%8A%C3%90%3C%C2%99%07%1F%C3%84%C2%84%C2%82T%1F%C3%B2%C3%A0%C2%8B%C2%85%C3%84%C2%87%22t%C3%85%C2%87HE%10!%C2%A5%C3%AAC%C2%A9%C2%B4%C2%88%C2%B6RZ%C2%B3%C2%A9%C2%AD%C3%95tkqm%C3%93D%C3%9C%C3%BC%C3%AE%C3%AE%C3%8C%C3%AE%C3%AC%C3%AC%C3%8C%C3%B4~%C3%AB%C2%8E%C3%9D%26%C2%BB%C2%9B4J%C3%97%0B%C3%83%C3%8E%5E%C3%AE%3D%C3%A7%C2%9Bs%C3%8E%C3%B7%C2%9D%C2%B9C%09%1F%C2%83%C2%83%C2%83%C3%8D%C3%BC%C2%A7%C2%97T%7F%C2%8Cp%2C1Z%004%C2%9E%C3%8B%C3%A5%C3%92%C2%9A%C2%A6%C2%8D%C3%A9%C2%BA%3E%C3%B5%7F%23%C2%91e%C2%B9%C3%91%C3%A3%C3%B1t%C2%8A%C2%A2%C3%A8%C3%A6%7F%C2%B7%C2%8B%C2%88%10%00%5D%C2%B8p%C3%A1%40%2C%16KV%2BD%C3%8D%C3%8D%C3%8D%C3%BE%C2%83%07%0F%5E%C3%A4%C3%80z%19%26%10%C2%A1j%02%C3%82%C2%80%7F%C3%A0%C3%80%7D%1ETq%C3%8AN%C2%9E%3C9%C2%80%C2%ABx%C3%83%C3%80%C3%80%C3%80%C3%BE%C3%93%C2%A7O%C2%87%7BzzZ%C2%8A%C3%A71%C2%B7t-%C3%BEc%C2%BEx%0E%C3%BB0%07%3BK%C3%97%16%C3%AFwp0%C3%B2%0A%0E%14%C3%BA%60%3C%1Eo8s%C3%A6%C3%8C%C3%99j%C2%839%7C%C3%B8%C3%B0%C2%A1%C3%BA%C3%BA%C3%BAiq%C2%AD%06%C2%90%0A%C2%BF%C3%9F%C3%9F%C2%80%C3%BB%1B7n%5C%C3%A3%C3%97%C3%94%C3%AE%C3%9D%C2%BB%1B%C3%B9%C2%B5%0Fs%C3%89drzhh%C3%A8%C3%AAZl%C2%AF%19TSS%C3%93%3E%C3%90%C2%B8%C3%80%1C%14%C3%A8%14%C3%BFm%C3%A0%C3%A3%10%C3%A6%02%C2%81%00%C3%A6%5E%0E(%C2%A7%18%C2%8B%C2%9F2%1C%0E%C3%9FqXz%C3%B4%C3%A8%C3%91%C2%BE%C3%A7%C2%B9%C2%B7%2C%C3%82r%26Y%C2%AF%C2%A6%7D%C3%AFz%C3%BC%C2%B5%1BT%C3%8D%2F%C3%AAYb%C2%89%22%C2%A1K%08%C3%A1%3C%40__%C3%9F%C2%8EJ%C2%BEJ%C2%82B%04%0A%C2%B7e%C2%9F%C2%B2V%10%C3%84%C3%8C%C3%84%C2%AF7%C3%BD%C2%8CM*%19%5D~%23%C3%BA0%C2%B8%C3%95W%C2%B3M%C2%8C%C3%BE%1E%14%3D%C2%BE%2FuY%C3%92%0D%C3%8B%7C%C3%94%2C%C2%BA%C2%A4X%C3%8E%C3%88V%C2%8Av)_%C3%8B%40%C3%9D%C2%BAukh%C3%A9%1C%C2%A7j%C2%94%C2%ABn%C2%8B%C2%A2(-%1F%C2%9F%3A%15N%7Dq%C3%BDRh%C3%B4%C3%8A%C2%A3%C2%90%20%24%7D%C2%8C%05%24%C3%8A6%0A.%C2%A9%C3%89%C2%9A%C2%99%C2%B3%C2%8C%C3%AB_G5%C3%9BJ%10%C3%93%C2%9C%3D%C2%B2%C2%AB%C3%BBmy%C3%8F%3B%3DTQ%5Ew%C3%AC%C2%AC%C3%A4%C2%AB%24%C2%A8%C3%91%C3%91%C3%91%C3%A8%C3%92%C2%B9H%242%C3%94%C3%95%C3%95%15v%C2%99%C2%A6%3F%C2%A8%1B%C2%9D%1BL%C3%AB%C3%87%C2%90K%C3%92x%C2%A46(%C2%94%C3%96%C2%BA(%C3%B5%C3%B2t%C2%896!V%C3%8E%26%C2%9An%5B%0B5%C2%8C%C3%85%17LK12z%C2%87%C3%8AS%C2%9Au%2By%3B%2B%C3%B9%C3%BAO%C2%85%C2%8E%C3%BAq%2F%26%C2%88on%C2%9Ex%C2%B5tCP%10%C2%A8%C2%87%C2%B2F%C2%89%C3%92%3A%C2%91R%7F%01%C2%94i%C3%9A%C2%B6f%C3%98tN%C2%B6Y%40%C3%902V%C2%8A%C2%AF%C2%B7%05FLq%C3%9D%C3%8Ba%1F%0A%11y%17%04%C3%81%2F%24%C2%93qy%C3%AAI%C3%82%1D%C2%9F%C3%B1%04%C2%B4t%C2%AD%C2%8F%C2%B2%C2%A0%C3%82X%C2%93%40%C2%88%17%C2%98%C2%9D%3D%02%07%C3%88A%06%05%C3%9Bv%C2%93tz%C3%9E%C2%9A%C2%9A~%C2%9A5%0C-%23%C2%8A%C2%BE%C3%8E%C2%8E%C2%8E%C2%81%C3%B6%C3%B6%C3%B6%C3%A4%C3%A4%C3%A4%C3%A4%C2%B5Jr%C2%B1%0C%C2%94%C3%93%22%C3%802%C3%A8%10X%C2%83(%C3%99%0F%26%3E%C2%A7%C2%9F%5D%C2%BD%C3%AB%13%5D%C2%AD%5E%26l-%00%C3%B2%C2%952%C3%8A%C3%90%C3%B8)m%C2%B4T-%C2%9B%C2%BB%13%C3%B9%5E%C3%8D%C3%A5%26%C3%A8%C3%9E%3Dm%C3%AE%C2%8E%C3%B6%C2%BD%C2%A6%2C%13nwl%C2%A9%C2%AF%C2%8A%C2%A0TU%5D%C2%96g%C3%90%1E%2CCQ%C2%A3%C2%86%C2%90%C2%B2B%C2%84%C3%8A%C2%A7%C2%9B%10%C2%89%C2%AF%C2%AB%C2%97%09%C2%9D%C3%B12%16Tu%5D%C2%B6%C2%B2%061%5D%C2%AE%C2%8A%C2%BEJ%C2%82%3Aq%C3%A2%C3%84%C3%B3b%C2%84RC%18%C2%A1C%C2%A0%3DX%C2%86%C2%A2F%0D%15%C2%A7%C2%AC%C3%9C%60%C2%94zD%C2%9B%C3%BA88%C2%8F%C3%BD%C3%93%C2%BD%C3%88d*%C3%B9%C3%95%C3%83P%60%C2%86%C2%BF%11L%2F%C3%B5%C2%B5%C3%AA%C2%9AB%C3%AB%C2%80RC%18%C2%A1C%C2%A0%3D%0A%C2%9A%C2%AE%C2%92%20%7C%C2%9D%C3%80(q1%C2%AC%C2%8F%C3%87%17'%C3%BF%C2%88%C3%9D%3F%C2%BF8%C3%B7%C2%A7%C3%BD%22%C2%85%C2%8E%5E%C2%86%C3%96%C2%91Wj.%C2%8C%C3%90!%C3%90%1E%2C%5B%25%C2%91%2C%C3%9B%26%26%C3%B6%C3%90%C3%BA%C2%BA%C3%90%C2%A6%C3%8D%C2%9Dm%C3%AF%C3%97%06%C3%97%23R%C2%85%07%5E%1D(%C3%A7%C3%BD%06%C2%A1EsE%2FC%C3%AB%C2%80RC%18%C2%A1C%C2%A0%C2%BD%C3%B0%2C%C2%85%C2%95%11q%C2%BD4%09%24%C3%82N%C2%B3mm%C3%9B%C2%9Bvt%C2%BCU%C3%A7%C3%B3%C2%A2W%C2%9E%C3%A5%C2%A0%C3%8E%16%C3%BB%C2%AA%08%C3%8A%C3%AB%C3%B5%C2%B6%2C3%C3%8E%7B%19Z%07%C2%94%1A%C3%82%08%1D%02%C3%AD%C3%81%C2%B2r%C2%80%10M%0EfV%C2%B7%C3%ADy%C2%BEo%C2%91%C3%AF%C3%8F%C3%A6%24%C3%97%C2%8A%C2%BEJ%C2%82*%C2%A6'%5E%3F%C3%90%C3%AD%C2%A1S%C3%BE%C3%8D%C3%8D%5D%C3%A6%7B%C3%BB%C2%B7%C2%A9%5C%C2%A7%C2%A4%C3%BB%13%7F%09Zz%1A%C2%B4%07%C3%8B%C3%8A%00%C2%8AknEM%C2%B5l%C3%A90%C3%AA%C3%96%C2%B5Z%C2%AFm%C3%B2i%C2%96%15%C3%8DiZ%12vKI%C3%81%C2%AAj%C2%AA%20pW%7B%7B%7B%3Bw%C3%AD%C3%9C%19%C3%8E6l%C2%AC%C3%93x%C3%94%C2%84%C3%98%C3%A3%C2%9FYJMX%C2%94fA%7B%C2%B0%0CE%C2%8D%C2%A0%22e%C2%88P%C3%86%C2%B6%C2%A6%C2%93n%C3%85P%1B6%C2%B6e%C3%AA%C3%AB%C2%88%11%0A%C2%92%C2%B1H%C3%A4%C3%83%C2%91%C2%91%C2%91%C2%B1%C2%97%C3%B6%3E%C2%85%14j%C3%81%1A%C2%AEY9b(%C3%8A%13%C3%8B2u%C3%9E%C3%BBR%C3%90!%C3%90%1E%2CCQ%C2%A3%C2%86%C2%902%C3%95%C2%B2%C2%9E.*%C2%8A%C2%94%C2%A9%0D%C3%B1%7D%01b%C3%88%C3%B2%C3%9A%C3%9B%C2%8Cs8(n%C2%96%1D%C2%BC%3D%C3%A4%C2%BB%C2%BC%24%25uE%C3%BA-%2B%C3%90h2g%C3%A8%C2%B5L%C2%98%C2%870B%C2%87X%C2%A1!%C2%A3%C2%A8QC%C2%BC%19%C3%8F.0*1Y%1A%C2%B7%3C%C3%AE-%3C%C2%92~%C3%98%C3%A1%C2%91%3AP%C3%89WIP%C3%9D%C3%9D%C3%9D%03%C2%85%C2%85%7DE%C2%87%C3%85%C3%BC%C3%A6L%26%13%C3%AD%3F~%C2%BC%C2%AFU%C2%92%C2%95%0F%C2%8E%1D%3B%C2%97H%C2%A9%C2%AELF%17H%C3%AC%C3%B1x.2%1E%01%C3%AD%C3%812%14%C3%B5%C2%BCi%3E%C2%BAx%C3%B9%C3%B2%C2%A5%1Fn%C3%9F%C2%BC%C3%B2%C3%91%C3%B0%C3%B0'hW%C2%8E%C2%9DJ%C2%BEJ%C2%82B%C2%B3%C2%AC%14Z%08%C3%9F%C2%83%C2%AC%C2%9E1%1A%1BZ-%C2%9EJ%C2%9D%C2%B7%C2%8E%C2%A4%C3%80%C2%BE%C3%BB%C3%A5%C3%9Bo%C3%AEA%C2%87%40%7B%C2%B0%C3%8C4%C2%8C%C2%B1%C3%9B%C2%9F%C2%9E%3FW%C3%89V9_b%C2%99%C3%A2%C3%BE%C3%97(~%C2%85%C3%BDG%C2%AEi%C2%BE%C2%8F%C3%A1%C2%9A%5D%17J%C2%84%C2%B9RC%18%C2%A1C%C3%B9%1A%C3%A4%C2%80K1z%25_%2FtppN%C2%B3%C2%8Et%C3%98%C3%8FN%C2%B9%C3%93%10Fgn%C2%AD%C2%B6%C3%97%0C%C2%AA%C3%94%C3%93%C2%A3u%40%C2%A9_%C3%B4%C3%BC%C3%87J%C2%B5%C2%99j%1D%C3%9B%C3%8B%C2%82ze%C2%8E%C3%AD%C2%89D%C2%A2sxxx%C2%B0%C3%9A%60%C3%BA%C3%BB%C3%BB%07kjj%1E%C3%A6%23%05%0D%C3%81%C3%B7%C2%A1j%02%C2%82%7F%C3%A7%C3%80%C3%BAJ~%C3%89%C2%A3E%C3%9F%3C%C2%8F%C3%B0%C3%AB%C3%8D*%05j%C2%81_w%C2%9Do%C2%9E%7F%0B0%00%C2%9B%C2%BD%3A%0D%C3%A5v%2BI%00%00%00%00IEND%C2%AEB%60%C2%82";
var image18 = group50.add("image", undefined, File.decode(image18_imgString), {name: "image18"});

var EffectorButton = group50.add("button", undefined, undefined, {name: "EffectorButton"});
    EffectorButton.text = "Effector";
    EffectorButton.preferredSize.width = 210;

// GROUP51
// =======
var group51 = ButtonGroup13.add("group", undefined, {name: "group51"});
    group51.orientation = "row";
    group51.alignChildren = ["left","center"];
    group51.spacing = 10;
    group51.margins = [50,0,0,0];

var EffectorPositionCheck = group51.add("checkbox", undefined, undefined, {name: "EffectorPositionCheck"});
    EffectorPositionCheck.text = "Pos";
    EffectorPositionCheck.value = true;

var EffectorScaleCheck = group51.add("checkbox", undefined, undefined, {name: "EffectorScaleCheck"});
    EffectorScaleCheck.text = "Sca";
    EffectorScaleCheck.preferredSize.width = 50;

var EffectorRotationCheck = group51.add("checkbox", undefined, undefined, {name: "EffectorRotationCheck"});
    EffectorRotationCheck.text = "Rot";
    EffectorRotationCheck.preferredSize.width = 50;

var EffectorOpacityCheck = group51.add("checkbox", undefined, undefined, {name: "EffectorOpacityCheck"});
    EffectorOpacityCheck.text = "Opa";
    EffectorOpacityCheck.preferredSize.width = 50;

// BUTTONGROUP13
// =============
var divider18 = ButtonGroup13.add("panel", undefined, undefined, {name: "divider18"});
    divider18.alignment = "fill";

// BUTTONGROUP14
// =============
var ButtonGroup14 = tab3.add("group", undefined, {name: "ButtonGroup14"});
    ButtonGroup14.orientation = "column";
    ButtonGroup14.alignChildren = ["left","center"];
    ButtonGroup14.spacing = 0;
    ButtonGroup14.margins = [0,3,0,0];

// GROUP52
// =======
var group52 = ButtonGroup14.add("group", undefined, {name: "group52"});
    group52.orientation = "row";
    group52.alignChildren = ["left","center"];
    group52.spacing = 10;
    group52.margins = 0;

var image19_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C3%85IDATx%C3%9A%C3%8C%C2%98oHSQ%14%C3%80%C3%9F%C2%9E%C3%8F9%C2%B7%C3%9D%C2%B9%C2%A9%C2%A9%C2%9B%C2%A5%C3%93%C3%B0E%04%C3%BD%7B%C3%82%C2%B0%C2%A2eT%04%19%04%19%C2%A4%09%C3%ADK%5B~)dB%7D(Z%60%C3%9F%26%7Dn%C2%A8X%C2%8C%C2%A4(%C3%82%C3%96%C3%87%C3%88%C2%85%C2%94%C2%91N%C3%BB%C2%87%C3%A6%1B%C3%A5%C3%B2%C3%BF%C2%BF%C2%95%C3%B9%C3%A6t%C3%9B%C3%93u%C2%AF%C3%B8d%C2%85Nk%C3%8F%C3%9E%0E%5C%C3%9E%C3%9D%C3%9D%C3%A3%C2%BC%1F%C3%A7%C2%9C%7B%C3%8E%C2%B9W%C2%84A%C2%B1X%2CZ%C3%B80%60%C3%82K%23d%C3%B1%C2%88%C2%96%C2%80%C2%BAX%C2%96%C2%9D%C3%B5%C3%BB%C3%BD%C2%AE%40%200%C3%BC%C2%BFI%C2%92%C2%92%C2%924R%C2%A9%C2%94%22%08%22%19%C3%BE%C3%9CC%20%0B!%20%C2%BB%C3%9D%5E%C3%AE%C3%B1x%18%C2%A1L%C2%A4%C3%95jAEE%C3%85%7D%08f%C3%80%C3%91%02%C2%B2%C2%90%C2%90%40H%C3%90%C3%B7%11%07%C2%9A%2FB%09%C3%A1%C2%B2%C2%95%C2%84%C3%A3%C3%80%C3%B9V%C3%9C%C2%92%C2%9Dg%C3%AC%C3%8B%25%1D%C3%A7%C2%81R%C3%B3%C2%AF%3A%08%5E%C2%81%C3%B6%C3%AA%2CirP2%C2%9E%C2%A2%C3%80%C2%AE%7D%C3%B8h5(TN%C3%AE%C2%BF%C3%A2%C2%A1%3E%1BoP%1D%5B%C2%B6ZZgg%1CU%C2%93%C2%A3%C2%AE%C3%88u%C2%83%C3%81%40%C2%A5%C2%A5%C2%A5iT*%15)%C2%93%C3%89H%C2%89DB%C3%928%0E%14c%13Xb%20%C2%80e%7C%C3%B8%04%C2%B8w%C3%89D%C2%B1%11%3Eb%C2%87B%C3%A6%C2%BF%C2%AA%C3%9At%23Q%C2%A5%C2%A4%C3%B4%C3%8A%3C%C2%BD%C2%A5%C3%B8b%C2%93%5C.'%C3%85b%C2%B1%06na%12%C3%BA%C2%9F%0E%06%C2%83%C3%83%3E%C2%9F%C2%8Fv%C2%BB%C3%9DM%C3%9D%C3%9D%C3%9D%C2%B4%C3%93%C3%A9%1Cn%3E%5Eb%C2%99%C3%91%15%C3%AA%C3%AB%C2%A6%7F%C2%98o%C3%BD%C2%98%C2%A0%C2%91%C2%AE!%C3%AD6%23%2F%C3%AE%3B)%03%C2%94%02%C3%87%C2%A9%C2%97%C2%A7N0%C2%A2%04%02l%C3%B7z%0FI%7Bh%26s%7C%12%C3%8C%C3%90n%C3%9Bj%C3%AEx%C2%92%C2%95%C3%AE%C3%98%C2%A5LQs%40%C2%BC%C3%86T%C3%A9%C3%A8%C2%80%03%06%C2%ADZ%C3%8C%C3%8E%1B%C3%95%C2%ADmt%C3%B5%C3%ABVS%C3%9B%C2%9C%C2%9FA%C2%81%C2%BC%C3%91%C2%BB0jL!k%C3%9CNO%C2%A5%C2%9E%C3%A5%C2%A8mm%2F%C3%BC%C3%AB%C3%8Ec%5B%26%C2%BFS%C3%90e%1Dq%C2%B1%C3%BB8%19HOu%C2%95zzM%1B%0Au%C2%A1%7F%C3%84%7C%25%C2%A7%60%C3%91R%12%C2%91H%C3%A3aC%0E%C3%81%C3%9C%C3%87I%C2%97B%C3%AE%08%C3%B9%C2%99%C3%A5%C3%80%7D%17%C2%98%1B%11%1C%C2%AAC%09%C3%A8%C3%86%3F%C3%B2T%C2%94%1A6%C2%A2%C3%93%C3%A9%C3%88X%C2%A0x%2F3%C2%817o%19%1C%26%C3%91%C2%B8%C2%81*%C2%92H%C3%81%C2%83%C2%AC%C3%8DO%C3%91%C3%9C%C2%9D%5Bp%3F.v_CF%C2%B6u%3E%C2%8C%C3%B9%C3%A0%14%C2%B0Y%C2%99%C3%A4%C2%90%08_N%0B%0F%7D%3FMU%C3%AB%0C%01%5E-%C2%B5%C2%BD%C3%9Fmb%C2%B10%C2%B3%C3%A3%C2%B9%13%7Bu%C3%B64S%2C%0E%17g%7Bz%0B%C2%A7%17%16%5C%C2%82%C3%86T%C3%817wy%5E%7B'%C3%A6%0D%06_VVVZ%C3%A3%22%C3%909%C2%A9%C2%AF%C2%AF%C2%AFMHH%00555%C3%A6%C2%B8%C2%81j%C2%9E%0B%5B%0F6%C3%981%0DP%C2%94y%C3%B7%C3%AC%24%05%0B%C3%B4%C3%88%C2%A0%5E%C2%9C%C3%80r%C3%89%C2%BA%3AI%C3%BA%C2%B0%C3%9E%C3%BCe!%C2%84a%C2%8E%C2%A7%C3%82A%C3%BD%C2%B6%C3%8B%C3%AE5%C2%BA%2C%C3%B9Z%40%1E%3Db%26%7B%3F%C2%9Bh%C2%9Af%04s_%C2%A4%C3%80%C2%B3%C2%A5%0D5%C2%84F%C2%A3%C3%B1FON%C3%81%C2%9D%C2%98%C2%A0%5Eo%C3%8E7%C2%A36%C3%A4R%C3%9F%C2%A0%15%25%C3%86X%C3%80l6%C3%9B%C3%8DM!%C2%96%1A%C3%95%C3%AF%C2%A7Pb%C2%8D%C2%A6%C2%8F%C2%88v*%C3%89%25%12%C3%8Bz%C2%93%25%23%C3%AD%C3%A5g%C3%94%C2%86%C3%B23-%C2%B1%C2%9E%C3%AB%C3%A7%C3%A0%C2%A0%0F%14a%C2%B0%C2%8F'%1F%C2%89%C3%B0%16n%C2%9D%0E%05%7F%C3%ABd%C2%89h%0D%1E%C2%B4%148Vw%C2%AFl%1E%26%C3%84%C3%AB%C3%9E%C3%B1sw%C2%99%C2%A9a%C2%AE%C3%B3%C3%BC%C2%9B%C3%93%09'%C3%88u%C2%A8%C3%85%C3%B6%C2%87%17%C3%A8%C3%92%C2%B1%C2%A1U%3B%C3%99%C2%A8%C3%AE%C3%9B7%C3%B8%C2%B5%16e%C3%A3%C3%87%C2%BE%C3%A9j%04%C3%84G%C3%86%C3%A7%12%2C%02%124%C3%907%C2%A4%20%C2%97%C3%88%C2%80%C3%B9%C2%B8%14%C3%B0%C3%96yF%C3%AE%C3%80%C2%95%C3%B4%C2%AD%09eg%C2%A6j%C3%93a%C2%B9%C2%88%5C%C2%8B%C2%A5%C3%B3%5CN%C2%ACQ%C3%B4%11%C3%9C%C3%BD%C3%90jJb9%C2%BF%C2%AD%C2%99XW%C2%B8%C2%A7Bu%601%C2%A6%C3%90%C2%85%15%C2%BA%1F%122%C2%8E%C3%90%C3%B7%11%07%C2%9A%C3%87%C3%A5M%C2%9Eh%C2%A9%0C%20%C2%B0%C3%8Bp%C3%AC%16%C3%88PSp%C2%BC%C3%87%C2%96%C3%AE%3C%7F%090%00%C2%92%C3%B8%C2%B8%C3%83%10%C2%9F%C2%A0%C3%99%00%00%00%00IEND%C2%AEB%60%C2%82";
var image19 = group52.add("image", undefined, File.decode(image19_imgString), {name: "image19"});

var StringerButton = group52.add("button", undefined, undefined, {name: "StringerButton"});
    StringerButton.text = "Stringer";
    StringerButton.preferredSize.width = 210;

// GROUP53
// =======
var group53 = ButtonGroup14.add("group", undefined, {name: "group53"});
    group53.orientation = "row";
    group53.alignChildren = ["left","center"];
    group53.spacing = 10;
    group53.margins = [50,0,0,0];

var StringExistingPointsCheckbox = group53.add("checkbox", undefined, undefined, {name: "StringExistingPointsCheckbox"});
    StringExistingPointsCheckbox.text = "Existing Points";

var StringerBezierCheck = group53.add("checkbox", undefined, undefined, {name: "StringerBezierCheck"});
    StringerBezierCheck.text = "Bezier";

var StringerClosedCheck = group53.add("checkbox", undefined, undefined, {name: "StringerClosedCheck"});
    StringerClosedCheck.text = "Closed";

// GROUP54
// =======
var group54 = ButtonGroup14.add("group", undefined, {name: "group54"});
    group54.orientation = "row";
    group54.alignChildren = ["left","center"];
    group54.spacing = 10;
    group54.margins = [50,0,0,0];

// STRINGERPOINTSGROUP
// ===================
var StringerPointsGroup = group54.add("group", undefined, {name: "StringerPointsGroup"});
    StringerPointsGroup.orientation = "row";
    StringerPointsGroup.alignChildren = ["left","center"];
    StringerPointsGroup.spacing = 10;
    StringerPointsGroup.margins = 0;

var statictext27 = StringerPointsGroup.add("statictext", undefined, undefined, {name: "statictext27"});
    statictext27.text = "Points";

var StringerNumberTextbox = StringerPointsGroup.add('edittext {properties: {name: "StringerNumberTextbox"}}');
    StringerNumberTextbox.text = "4";
    StringerNumberTextbox.preferredSize.width = 30;

// BUTTONGROUP14
// =============
var divider19 = ButtonGroup14.add("panel", undefined, undefined, {name: "divider19"});
    divider19.alignment = "fill";

// BUTTONGROUP15
// =============
var ButtonGroup15 = tab3.add("group", undefined, {name: "ButtonGroup15"});
    ButtonGroup15.orientation = "column";
    ButtonGroup15.alignChildren = ["left","center"];
    ButtonGroup15.spacing = 0;
    ButtonGroup15.margins = [0,3,0,0];

// GROUP55
// =======
var group55 = ButtonGroup15.add("group", undefined, {name: "group55"});
    group55.orientation = "row";
    group55.alignChildren = ["left","center"];
    group55.spacing = 10;
    group55.margins = 0;

var image20_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02%C2%99IDATx%C3%9A%C3%AC%C2%98%3D%C2%88%1AA%14%C3%87W%C3%9D%C2%8B%1F%20~%04%25%C2%A7%C2%91H%22ZhaP%C2%8B%14%C2%82%C2%BD%5E%C2%97%C3%86%20xir%C2%A0E%20w%7D%C3%B6%C3%BA%C3%83N%C3%A1%C2%AE%C3%91BrM*%13%C2%9B4Z%25%C2%A0'!%01%C3%AD%22%C3%82%19%13l%14%3C6%C2%9A(f%C3%BF%C2%8B%1B6%C2%87w%C3%AEr%26k%C2%B1%0F%C2%96%C2%9D7%C3%A3%C2%9B%C3%B9%C3%B9%C3%A6%C3%8D%C3%9B%C3%87(%08F(%C2%8Ar2%C2%AF%5DBz)0%2C%1D%C3%85%02%C3%A8%C3%A3t%3A%C3%BDA%C3%93tc2%C2%99%C3%B4%C3%BE7%C2%89Z%C2%AD%C2%B6%C3%A9t%C2%BA%00I%C2%92ZF%7DH%C3%82C%00*%16%C2%8BO%3A%C2%9D%C3%8EH*%179%C2%9DN%7D%22%C2%91x%C3%85%C2%80%C3%AD*%C3%91%01%0FI%09%04%C3%81%C3%BA%C3%A0%40%C2%9B%C2%85%C2%92b%C3%8B%C2%96%09%C3%87%C2%A1%246Pd(%19J%C2%86%12%23%C2%A9T%C3%8A%C3%96%C3%ADv%C2%A9%C3%81%60p%C3%9C%C3%AF%C3%B7%C2%8F%C2%A0%C3%BFs%C2%A8%C3%B7w%C3%AF%C3%AF%7Fv%C2%B8%C2%8E8%C2%BD%C3%99l%3E%C2%9B%C3%8F%C3%A7g%C3%B9%7C%3E%00%3D%C2%93%C3%89%1C%C3%9B%C3%AD%C3%B6%C2%98V%C2%AB%C2%B5Y%2C%C2%96%08%C3%B4H%24%C2%A2%C3%87%18%C3%AC%60%C2%BFV%C2%A83%C3%87%03%C3%AA%1E%C2%B9%15%C2%BF%C2%ADRE%C2%96%C2%8D%03%C2%8C%C3%B9~m%C2%B7%C3%9B%C3%ADS%C2%8DF%C2%B3%C3%93j%C2%B5N%C2%A0'%C2%93I7%C3%86a%07%7B%C3%8C%C2%B3%16(L%C2%B4%C2%AD%22ch%7F%18%C3%93%C2%87%C3%9CV%19%0C%06v%7B%7C%3E%C2%9F%C3%9Bl6%C2%B3%1E%19%C2%8F%C3%87%C3%AC%C2%A7*%C2%9B%C3%8D%C2%BE%05X%C2%BD%5E%C3%BF%C3%86%C2%B7%C3%83%3CB%C3%80%C2%94b%C2%80%1E%7F%3F%7F%C2%83v%3A%C2%9D%C2%8Ea%C2%AB%C3%90%0E%06%C2%83%C3%BB.%C2%97%C3%8B%C3%8D%C2%B7%C3%8B%C3%A5r%3D%C2%AF%C3%97%7B%C2%827t%C3%98%C2%89%01S%C2%8A%05%C2%82%60Ax%C2%82-%C2%80%0A%C2%85%C2%BDZ%C2%AD%C3%96%C3%A0%C3%86*%C2%95%C3%8A%0E%C3%A2%0D%0F%3F%C3%98%C3%85%C2%80%C2%91b%C2%81V%C2%89%C3%9F%C3%AF%C2%8F%19%C2%8DF6%C3%B8C%C2%A1%10%60%7B%7C%C2%B0%C3%97w%1C%C3%84%23%C2%8D%C3%AE%C3%A5%02%C2%8C%08%C2%9E%7F%C2%A1%04y%C2%AA%C3%B3%C3%AB%C3%A7%C2%9F%7F%C3%AE%C3%9C%C2%BA%15%10s%C2%9CM%26%C3%93%1E%C2%BCwe%C3%9D%C3%84%C2%9B%C2%8F%C2%BF%C3%8EJ(%C2%B11%20T%C2%84%C3%AE%C3%80%C2%951u%130%C2%A6%C2%8A%C2%B4%C3%9D%24%24%C2%AE%3D%7DB%C3%80%C2%A2%C3%91h%C2%9C%C3%89%C3%A0%C2%A3%C3%99l6%C3%B2x%3Cqd%C3%B5p8%C3%BC%02c%5CJ%10%1B%C2%A3%2B%C3%B3%C3%94e0%C2%AE%C2%9FI%0B%C2%A7%C3%83%C3%A1%C2%B0%C2%81%C3%ACm%C2%B5Z%C3%B5%C3%A5r%C3%B9%C2%90%C2%A9%C3%B5%2F%C2%B8TQ*%C2%95%0E%C2%B8%C2%94%20%C3%B6%C3%90%C2%90B%C2%B6%03%13%C3%A5%C2%AD%C3%B6%C2%BFj%C3%B8j%C2%B5%3ABP_%C3%BAiu%C2%99%C3%BD%3B%C3%BA%C3%A2%00%C3%AF%C2%A7%C3%BD%C2%AFU!%C3%AB%C2%91B%C3%A3D%C3%A8%C2%84%C3%AB%C2%B0%C2%95%C3%AB)%19J%C2%86%C2%92%C2%A16%1D%C2%8A%C3%A4%C3%AE%C2%876%01f%C3%81A%C2%B3%C2%9E%C3%82%C2%85%15%C3%AE%C2%87%C2%A4%04%C3%82%C3%BA%C3%A0%40%7B%23o%C3%B2%14%C3%A8%5C%C2%80%3DG5%2B%C2%91%C2%A3%C2%86%C3%8C%C3%B3%C2%89X%C3%9Cy%C3%BE%16%60%00'%C3%99l%C3%BA%17%C2%A1%20%10%00%00%00%00IEND%C2%AEB%60%C2%82";
var image20 = group55.add("image", undefined, File.decode(image20_imgString), {name: "image20"});

var TextGreeblerButton = group55.add("button", undefined, undefined, {name: "TextGreeblerButton"});
    TextGreeblerButton.text = "Text Greebler";
    TextGreeblerButton.preferredSize.width = 210;

// GROUP56
// =======
var group56 = ButtonGroup15.add("group", undefined, {name: "group56"});
    group56.orientation = "row";
    group56.alignChildren = ["left","center"];
    group56.spacing = 10;
    group56.margins = [50,0,0,0];

var statictext28 = group56.add("statictext", undefined, undefined, {name: "statictext28"});
    statictext28.text = "Num";

var TextGreeblerInstancesTextbox = group56.add('edittext {properties: {name: "TextGreeblerInstancesTextbox"}}');
    TextGreeblerInstancesTextbox.text = "1";
    TextGreeblerInstancesTextbox.preferredSize.width = 30;

var TextGreeblerUpperButton = group56.add("button", undefined, undefined, {name: "TextGreeblerUpperButton"});
    TextGreeblerUpperButton.text = "AZ";
    TextGreeblerUpperButton.preferredSize.width = 35;

var TextGreeblerLowerButton = group56.add("button", undefined, undefined, {name: "TextGreeblerLowerButton"});
    TextGreeblerLowerButton.text = "az";
    TextGreeblerLowerButton.preferredSize.width = 35;

var TextGreeblerNumberButton = group56.add("button", undefined, undefined, {name: "TextGreeblerNumberButton"});
    TextGreeblerNumberButton.text = "09";
    TextGreeblerNumberButton.preferredSize.width = 35;

// GROUP57
// =======
var group57 = ButtonGroup15.add("group", undefined, {name: "group57"});
    group57.orientation = "row";
    group57.alignChildren = ["left","center"];
    group57.spacing = 10;
    group57.margins = [50,8,0,6];

var TextGreeblerInputTextbox = group57.add('edittext {properties: {name: "TextGreeblerInputTextbox", multiline: true}}');
    TextGreeblerInputTextbox.preferredSize.width = 205;
    TextGreeblerInputTextbox.preferredSize.height = 35;

// BUTTONGROUP15
// =============
var divider20 = ButtonGroup15.add("panel", undefined, undefined, {name: "divider20"});
    divider20.alignment = "fill";

// BUTTONGROUP7
// ============
var ButtonGroup7 = tab3.add("group", undefined, {name: "ButtonGroup7"});
    ButtonGroup7.orientation = "column";
    ButtonGroup7.alignChildren = ["left","center"];
    ButtonGroup7.spacing = 0;
    ButtonGroup7.margins = 0;

// GROUP58
// =======
var group58 = ButtonGroup7.add("group", undefined, {name: "group58"});
    group58.orientation = "row";
    group58.alignChildren = ["left","center"];
    group58.spacing = 10;
    group58.margins = 0;

var image21_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C2%B6IDATx%C3%9A%C3%8C%C2%98_HSQ%1C%C3%87%C2%8F%C3%A3%C3%AA%C3%94t%C2%94%14%C2%B6%C2%B9%C2%87Q2%C2%B2%3FT%5B%C2%A2%2F%C3%81%60%C2%95%10-h!%C2%91%C3%B8%20%11%5B02a%12DB%06R%11-%C3%BA%C3%B3%C3%92%C3%AEKE%C3%A2%C2%8B%C2%B1%C2%97%C3%ADE%C3%8BZ%C3%90%C2%83%C2%B3%C2%B6%C2%A8%C3%80l%C3%BD%1Bf%1B%C3%A8j%C3%92%C3%A6%C3%A6%C2%B5Q%C2%9D%C3%9Fm%C3%B7v%C3%9B%C3%A6%C3%BE%C3%9Eu%C3%BD%C3%81%C3%A1%C2%9Es%C3%AEv%C3%AE%C3%A7%C3%BE%C2%BE%C2%BF%C3%B3%3B%C3%B7%C2%9C2%C2%84%C2%AD%C2%BF%C2%BF_%C2%81%2F%5DHx%C2%BB%C2%83Y%7Ce%09%C2%A0%17%C3%B1x%3C%16%C2%8DF%C3%9D%14E%C3%B9%C3%BF7%C2%89X%2C%C2%96UWW%C2%AB%09%C2%82%C2%A8%C3%82%C3%8D%C2%9D%04x%08%C2%80%06%07%07%3B%7C%3E_X(%17)%14%C2%8A%C3%9A%C3%8E%C3%8E%C3%8E!%0C%C3%96%25%C2%82%0E%C3%B0%C2%90%C2%90%40%60%C3%B0%7C%C3%A0%C2%80%3Ax%0Aq%25%C2%B3Z%C2%AD%C3%8F%0B%1D%C3%98h4%C3%AE*%06%C2%8C%C3%A1%20%C3%92%C3%9D4%18%0Cy%0FH%C2%92d%C3%86%C3%BB8v%0DR%C2%A9%C3%B4%C2%9F%C2%81%03%C2%81%00%C2%89%C3%BBS%C3%BEH%14%C3%B2F%3F%C2%BF%C2%87%C3%91%C3%BC%C3%80E%C2%BA%C2%BE%C2%BA%C3%AF%0C%12Ij%C2%B3%C3%BE%07%C2%80FFF%3Al6%C2%9B%17%C3%9Az%C2%BD%5E%C3%99%C3%96%C3%966%04%C3%AF%C2%93%17%C2%94k%7C%1C%17WJ%C2%BFf%C3%82%C2%8D%C3%96%C2%B8%C3%BE%C2%AA%5Cw%C3%B9BN%2F%C3%83%001u%0C%C2%95%C3%B6w%22%C2%B4%02-%C2%A3%C2%A7ZZ%5B%C3%A9B%C2%B9%C2%9E%C2%A1%C3%B2%C2%A6M%C2%ACL%C3%89%C3%B2%C3%A5j%20%19W%C2%BE%C2%82%C2%A0%C3%80%C2%82'N%C2%A2%C3%98%C2%831%1A%C2%A8%C3%9EnC%C2%84%C2%BC%C2%81%C2%AE%C3%A7*%197%C2%A8!%C2%86%C2%B8%C2%92A_%C3%9EP7%C2%AE%5DG%C2%870%10%C3%A3%C2%9D%C2%BE%C3%9D%1At%C3%BFW%C2%9C%C2%BD%C3%9F%C3%9D%C3%93%C2%83%C3%8B%C2%A9%C2%9C%C2%A0%12%C2%B3%C2%8C%2CZ%3Ex%60p%C3%AA%3D%C3%AB%C2%A9%01%C3%AC%C2%A9K%C3%98S%C2%82%C3%86%14%C3%98%C3%9A%5B7%C3%91%C2%8F7Shir%0A%7D%3B%7D%16U%C2%B66%23I%C2%B7I8(nJ8%7Cw%C2%88%C2%96%C2%90rM%20%C3%A7%C3%A7i%C3%A4k%C2%90%C3%A1I%C3%90BO%C2%84t%C2%81%5CRO%C3%A5cZ%C2%AD%C3%96%C2%82%0B%0A%C2%85BN%C2%8F%C3%87cg%00%1F%C3%8A7%18%C2%94%15%C3%A2%C2%B4%C3%8B%C2%84w%C2%89%22%C3%B7%C3%8C%7C%24%C3%B3N%09%60%C2%B1-%5BQ%C3%B8%C3%B6%3DZ%C2%BE%C2%83%C3%8B%C3%88g2%C2%99t%C3%A0-%C2%95J%C2%A5%C3%A3%02.%C2%8D%3E%C2%AEE3~%C3%BE%3DU%C2%B5WK%C2%97%5C%C2%B26.%16%5C%C2%B50%C2%80%C2%9F%C2%8E%C3%A8%C3%95%C3%81%C2%85(%C2%AA%7F%C3%B7%015%C2%BC%C2%9ED%C2%92%C3%99%C2%B9%C3%BC%C2%A1%C2%B2-%C2%AE%C3%8B%C2%99%C3%99l%C3%96Y%2C%16%7B2%20%C2%96%2F%C2%BC%5E.7%7C%C3%99%C2%B6%19y%C3%B4%3A%C2%A4%C2%B2%C3%993%C2%82%11%C2%99%3E%3F%60e%C3%A7%C3%A4%C2%98%C2%AC%40J%C2%A5%C3%B2%1C%C2%BE%22.%18c%00!%19%7B%C2%82%C2%9Ap%C3%89f%C2%BC%C2%AD%7D%00%C3%A2%C3%B5z%C3%8F'%C3%80t%C3%85%C2%8C%C3%85%C3%AB%C2%82%C3%8C%17%18%C3%81w%C3%A2%030%C2%90%C2%90%2Beb%C3%8A%C2%93%C2%82x%C2%8A%2F%C2%8F%C2%95%C3%AC%7B%C2%AA%18%C2%B0%14%C3%B9%2C%C3%ABd%C3%AA%C3%AD%C3%A2J5%C3%94gg%C2%83j%26%23%C3%83%C3%B5%25%C2%B5%C3%A86%C3%8F%C3%B9%C3%9D%C2%85Hi%3Dv%5C%C2%B9q%C3%B4Q%C3%8A%C2%8E)%C3%9D%C2%98)P%00%C3%84%2C%09%C2%A2%C3%88%02%C3%9D%C3%97X!V3)%0C%17v%00%C2%8DF%23koo%C2%B7%C3%A2%C2%BD%C2%9A%C2%94%C3%A9%C3%83%7B%C3%88%C3%80%C3%B0%C3%B0%C2%B0%C3%91%C3%A9t%C3%BA%190%00B-%C3%8DGW%7D%0D%C3%91%C3%8939-r%C3%87%2C%3A%C3%901%C3%94%C2%81X%2C%C3%B6%C2%B6%C2%B7%C2%B7%C2%97%C2%95%C3%A7%0A6%C3%A8%C3%87Pl%60%C2%83%C2%87%00%C3%A8%C3%95%C3%BE%7Dt%3B%0D%18%C2%BF%C2%B3%2F%12%C2%89x3%C2%B5%19c%40%00%C2%8CX%C2%A4%C3%A8%25%C2%A7%20%C2%A8%C3%86%C2%A7%C3%A3%C2%BC%06%3F%C2%80%01P%C3%9D%C3%B4Lig_MM%C2%8D2S%3B%C3%99%C3%80C%C3%A5%14U%3A%C3%B9p%C3%9C8%20%C3%90%C2%B9%5B%7D%08t%C2%87%C3%83q%C2%95%C3%97%C2%8F%3C%C2%98%C2%A2%C3%8Be%C3%9F%C3%84%3D.%C2%94%1F%C2%97%C2%AC9(%C2%9F1Y(8%1FbW%C3%BB%3F9%C3%83%C3%8Dg%2C%C3%A5%3Af%C2%82%23J%C3%87%14%1CX%C3%81%C3%B9%C2%90%C2%90%C2%BBbx%3Ep%40%7DE%C2%9E%C3%A4%C2%95q%C3%8E%3CaW%C2%B9C%20G%C3%8DCx1g%C2%9E%C2%BF%05%18%00a%0D%C3%AD%C3%B2%24%15%C3%A2%22%00%00%00%00IEND%C2%AEB%60%C2%82";
var image21 = group58.add("image", undefined, File.decode(image21_imgString), {name: "image21"});

var PropertyManagerButton = group58.add("button", undefined, undefined, {name: "PropertyManagerButton"});
    PropertyManagerButton.text = "Property Manager";
    PropertyManagerButton.preferredSize.width = 210;

// BUTTONGROUP7
// ============
var divider21 = ButtonGroup7.add("panel", undefined, undefined, {name: "divider21"});
    divider21.alignment = "fill";

// BUTTONGROUP8
// ============
var ButtonGroup8 = tab3.add("group", undefined, {name: "ButtonGroup8"});
    ButtonGroup8.orientation = "column";
    ButtonGroup8.alignChildren = ["left","center"];
    ButtonGroup8.spacing = 0;
    ButtonGroup8.margins = 0;

// GROUP59
// =======
var group59 = ButtonGroup8.add("group", undefined, {name: "group59"});
    group59.orientation = "row";
    group59.alignChildren = ["left","center"];
    group59.spacing = 10;
    group59.margins = 0;

var image22_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%04eIDATx%C3%9A%C3%8C%C2%98ML%C2%A3E%18%C3%87%07Z%C2%BES*%025m1)!%20%14%13%C3%91%06%C2%BA7%C3%A1%C3%84%C2%81%C3%AE%C2%81.%1E%20%3D%C3%80e7A%C3%A3%5E%08DcB7.%C2%BA%C2%A0%07w%C3%8D%C2%92%5D%0Fv%15%2C%06%08%1E%C2%A8%C2%86%C3%84D8%C3%9A5o%C3%84%04%C2%BAK%13%03%C2%89%C2%A5U%12B%C2%A1%7C%04%C3%A4%C3%83%C3%A7%3Fv%C2%BA%05)a%C3%89%C3%8B%C3%BB%3A%C3%89%C2%9B%C2%99w%3A%C3%AD%C3%BC%C3%BA%3C%C3%8F%C3%BC%C3%A7%C2%99IcT%C3%9Cn%C2%B7%C2%85%C2%AAv%C2%A6~yD%2CKiq%C2%A0_%C3%B7%C3%B7%C3%B7w%C2%B6%C2%B7%C2%B7%C2%A5%C3%9D%C3%9D%C3%9D%C2%B0%C3%92%24YYY%C2%A6%C3%9C%C3%9C%5C%C2%9BV%C2%AB%C3%8D%C2%A1%C3%97%C3%97%C2%B5%C2%B0%10%C2%80%C2%86%C2%87%C2%87%C3%9B%C2%96%C2%96%C2%96bj%C2%99%C3%88b%C2%B1%C3%A8%5C.%C2%97%C2%97%C3%80%C3%9A%C3%93%C3%91%01%0B%C2%A9%09%C2%84%C2%82%C3%B9%C3%81%C2%816%C2%87R%C3%82e%C3%B5%C3%B5%C3%B5%C2%BA%C2%B5%C2%B5%C2%B5%C2%87%C3%B3%C3%B3%C3%B3%C3%97S%C2%8D%11%1C%C3%A9JYbff%26%16%0E%C2%87%25%C2%AB%C3%95z%7Dss%C3%93%0B%C3%88Tc%15%C2%81%C3%AA%C3%AC%C3%AC4%C2%A1%C2%AE%C2%AE%C2%AE%C3%BEb%60%60%C2%A0%0Dm%C2%9F%C3%8F%C3%B70%15%C2%98%22P%7D%7D%7D%C2%BD%C2%B4%C2%98%C2%A6%C3%A1%C2%BA%C2%9E%C2%9E%C2%9E%C2%A0%C3%83%C3%A1%C2%B8%C2%91%C2%9D%C2%9Dm%1C%1D%1D%C3%ADU%0D%C2%AA%C2%B9%C2%B9%C2%B9kaaa%04%C2%AE%0B%C2%85Bn%C2%B8rhh%C2%A8%C2%AB%C2%B8%C2%B8%C2%B8%C3%9E%C3%A3%C3%B1%C3%98T%C2%81%02%04%5CG%C3%B5-%C2%B3%C3%99%C3%AC%00HGG%C2%87%C2%B4%C2%B5%C2%B5%15%C2%AC%C2%AB%C2%AB%C3%BB%0F%C2%94V%C3%8E%C3%89%C2%9DNgE~~%C2%BE.%C2%AE%3B%7C%C2%B2%C2%9C%C2%9C%1C%C2%93%C3%9F%C3%AF%C3%B7NLL%04%1B%1A%1A%26i%05%3A%C2%9A%C2%9A%C2%9AZ%C3%A9%23%C2%A9%C2%BB%C2%BB%C2%BB%2B%10%08%C3%84.%0C%C2%85%09KKK_%C3%91%C3%A9tF%C2%BC%C3%AB%C3%B5z%3E%C2%A9F%C2%A3%C3%91%C2%91%22W%C2%A0M%C2%9F%C3%B1%07%C2%A5%C2%B0%C2%B0%C2%90effB%7F%C3%98%C3%8A%C3%8A%0A%C3%B4'(%5CIn%C3%A4%C2%83%06%07%07O%C2%95%C2%A2sC%C3%99%C3%AD%C3%B6%C2%B6%C2%B2%C2%B22%07Y%C2%80%C2%9D%040%1A%C2%8Dg~wnn%C3%8E%C2%98%C3%ACJ%3Cg%C2%8D%3F7%C3%94%C3%8E%C3%8EN%18%406%C2%9B%C3%AD%C3%8Cq%C3%91%C3%9BwX%C3%8C%C3%B35%C3%8B%C2%A8%C2%AAd%06%C3%AFW%17%0A%C2%83%C3%A7%C2%8A%C2%A9%C2%BD%C2%BD%C2%BDD%C3%BBI%20%C3%80666x%C3%9B%C3%BF%C2%B3%C2%9F%C3%97%C3%8B%C2%A1%10%7B%C3%A7%C2%BB%C3%AFy%C3%BB%C3%AF'O%C3%B9%C2%A3%2B%C3%90'%5C-%3B%14%C3%85%C2%86%C2%B4%C2%BA%C2%BA%C3%BA%2C%C3%87%C3%B8%C3%92%C3%83hy%C3%B3v%C2%95%C3%95%C3%8A(%C3%80%C2%A9%C2%AEb%19O%7F%C3%A70%3C%C3%9E%C3%8C%26%C2%A6%C3%93%C2%A4_%C2%AE%C2%A5%C2%92K%C3%BF%C2%A7%C2%9F%C2%9C%C3%9A%7F%C3%98%C3%B2%16%C2%87%02%C2%90%C2%B6%C3%84%C3%8CX%24%C3%82%17%C3%83%C3%B3%C3%BC%C3%B6%C2%B9%C3%BF%06%C2%B9*F%C3%A5x%C3%9F%C2%BD%C3%BB%C3%AC%C2%8F2%2B%C3%BB%C3%93%C3%A1d%C2%87%1B1%C3%AE%C3%8E_%02%C3%B3l%C3%B6%C3%A8%C2%80%C3%BD%C3%85%C2%8E%12%C2%8B%40%C2%ACN%C3%99-%05%C2%9Dill%7C%C3%B6%3E%3E%C3%8Ej%C3%AF%C3%9EO%C3%84%C3%8F%C3%BB%C2%AF%C2%BD%C3%81%C3%86%C2%8F%C3%B6%C2%99%C3%BD%C3%8A%15%C3%9Ew%C2%AD%C3%A5%1As%C2%B6%C2%B4%5C~%C2%A0%1F%C2%93%08%C2%9A%3C%C3%83%5E%C3%87v%C3%BD%C2%8F%C3%B9%C3%BB%C2%87%3FL%C2%B2%3B%C2%B4%C3%A2N%2B%C2%90%0E%C3%A8%1C%C3%BE%C2%98%C3%ACP%C2%94%C3%AF%04%23%C2%91H%05%5Cb.)a%C2%87%0F%3EO%04%C3%B5z%C3%9Cj%C3%BA%C2%9Bos98%09%25%C2%94%5Ev%C2%A8%C2%83%C2%83%C2%83XR%C2%8CqY%40y%C3%A9%C3%910%C3%93%C3%BC%C3%B8SB*%1E%C2%98%0C%C2%AC%C2%84%C2%A0S-%06%C3%99%C3%9D%C2%87%60%C2%87%C2%A5%C2%A0I%C3%B7%3E%C2%BB%C3%8B%C3%BB%5C%C3%A1%15%C3%B6j%C3%BC%C3%B3%C2%97I%16%C3%9Emwq%C2%89%10%05%5BN%7C%2F%C2%94d%C2%87Z__%C2%97%08%C3%8A%26%C2%B4%C3%A9%C2%9BoG%C3%BE%C2%95%01Zy%C3%91%C3%9B%1F%C3%B3%C3%B6%0B%1F%C2%BC%C3%87%2C'%3C%C2%85%3DP%C2%91%40%3F%C2%A6%2B%04%C3%B1%C3%A2%C3%80G%C2%BCM1%C3%87%C3%98%C3%96%26%C2%B7%C2%A8%C2%90%10l%C3%8A%C3%88%16d%C2%81%C2%9A%C2%9E%C2%9E%C2%BE%3A66%26%C2%89%C3%9D%C2%9C%26%C2%89%60%02%C2%B1%C3%A5%08%C2%85O%06%C3%80b%10%C2%B1%07%C3%8B%C2%8A%C3%AF-...%C3%88%02USS%C3%A3(%2F%2F%C2%B7%11%C2%94%1B%C3%AF%C3%B8a%C2%83%C3%81%C3%A0%C2%A3%5D%3F%2C%C2%B6%1E!%C2%AC%C3%A7%5D%C3%AE%17%C2%82%C2%82uhb%232%C3%85%C3%99%C3%99Y%1F%25%C3%B7%C2%BD%C3%94'!A%C3%83%C3%84%C3%B4%C2%B8%2F%3BS%3Du%C2%9BA.%C2%8D%C2%94%15%20%C3%8B%C3%8B%C3%8B%1C%0C%C2%B9%C2%B58%C2%95(%0E%05%C2%90h4*%C2%B5%C2%B6%C2%B6%C2%BAq%04%22%C2%BDA%C2%A2%7F%C2%AB%C2%A8%C2%A8%08y%C3%B5%C2%9B%C2%AA%40%C2%89%C2%94%C2%95%C2%8ED%C2%B1%C2%A9%C2%A9)o%7F%7F%7F%05%40%C3%A9Ht%C2%B5%C2%B6%C2%B6vD5(%C2%A4%C2%AB8%C2%9B!%C3%9B%C2%A4%C3%A4%C3%9E%0B%C3%97%01N%C2%A9%C3%93t%C3%BAY%C3%87%C2%A2%C2%82%C2%82%C2%82%1Bp%5D%5E%5E%C2%9E%C2%B1%C2%B2%C2%B2%C3%92%C2%A4%14%C2%94V%C3%9C%0F%C2%A5%1A%00%C3%97Q5%C2%A9%C3%94%3D%15.%C2%81%C2%B8%C2%A5pa%C2%85%C3%BB!5%C2%AF%C2%820%3F8%C3%90%C3%BE_%C3%9E%C3%A4%C2%A5%25%C3%9Dy%C3%9E%C2%84%C2%88%C2%ABd%C2%A8(%3D%C2%BF%C2%89%3B%C3%8F%7F%04%18%00%C3%B7w%14%C3%8FR%C2%99%C2%88V%00%00%00%00IEND%C2%AEB%60%C2%82";
var image22 = group59.add("image", undefined, File.decode(image22_imgString), {name: "image22"});

var WiggleManagerButton = group59.add("button", undefined, undefined, {name: "WiggleManagerButton"});
    WiggleManagerButton.text = "Wiggle Manager";
    WiggleManagerButton.preferredSize.width = 210;

// BUTTONGROUP8
// ============
var divider22 = ButtonGroup8.add("panel", undefined, undefined, {name: "divider22"});
    divider22.alignment = "fill";

// BUTTONGROUP9
// ============
var ButtonGroup9 = tab3.add("group", undefined, {name: "ButtonGroup9"});
    ButtonGroup9.orientation = "column";
    ButtonGroup9.alignChildren = ["left","center"];
    ButtonGroup9.spacing = 0;
    ButtonGroup9.margins = 0;

// GROUP60
// =======
var group60 = ButtonGroup9.add("group", undefined, {name: "group60"});
    group60.orientation = "row";
    group60.alignChildren = ["left","center"];
    group60.spacing = 10;
    group60.margins = 0;

var image23_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C3%A6IDATx%C3%9Abd%00%C2%82%C2%86%C2%86%06%05%20%C2%95%C3%800%C3%B0%60%01%C3%90-%0F%18%C2%A1%0E%3A%C3%BF%C3%A7%C3%8F%C2%9F%C3%AF%C3%9F%C2%BE%7D%3B%C3%BB%C3%B3%C3%A7%C3%8Fg%C3%B4v%09%3B%3B%C2%BB%14%17%17%C2%971%0B%0B%0B'%C2%90k%C3%88%02%0A!%C2%90%C2%83%C2%96%2CY%12%C3%B5%C3%A0%C3%81%C2%83%C3%8F%03%15D%0A%0A%0A%C2%BC111%C3%8B%C2%80%0EK%60%02%09%C2%80Bh%20%1D%04%02%20%C3%BBA%C3%AE%00%C2%B1A!%C3%85%C2%80%1Ce3g%C3%8E%3CC%C2%AE%C3%81%C3%A9%C3%A9%C3%A9%26%C2%948%0C%C3%A6%0E%16l%C2%92iii%24%1B8k%C3%96%2C%C2%AC%C3%A22%1A%1ER%C2%92%C2%AA%C2%8E%C3%B6wN%2F%C3%9A%C3%B2%C3%BE%C3%85U%C2%A2b%C2%83%C2%85%1C%1F%C2%BD%C3%B8%C3%B1%13%C2%8CA%C3%80%40%C2%80%0F%C2%AB%1AA%09m%5E%0D%C2%9B%C2%AC4N%5E%C3%B1H%C2%B0%3A%C2%8F%C3%BA%C2%B4%C2%8F%2F%C2%AF%C3%B7%C2%9D%C3%9B%5E%C2%BF%C2%99%22G%C2%9D%3Cq%02%C2%88O%C3%82%C3%B9%C3%81!%C3%81%0C%C3%9222%0C%C3%9B_%C2%BEf%C2%98%C3%BF%C3%A0%09X%C3%AC%C2%90%C2%BD%05%C2%86%3E%23%C3%8FF_~q%C3%8D%22FF%26%5E%C2%98%18%C2%88-%20%C2%A1%5Do%1F%C2%BB%24%C3%B2%C3%89%C3%B5%1D%0Dw%C3%8F%2C%C2%B9%C2%85%C3%8B%5E%26Z%24Z%1E!%05%1Fd%07!%03f%16%0E5%11Yc%07%C2%B2C%C3%8A%C3%9C%C3%82%02%C2%8C%C3%91%C2%81%C2%A7%C2%B8(%C2%83!%3F%1F%C3%8Dr%22Yi%C3%AA%C3%A2%C3%99%17%0C%3B%C2%8F%3E%C2%84%C2%A4%C2%A92%3B%C2%AA%3B%0Ao%C3%B4M%C2%9A0%C2%91AEA%11%C2%8EAi%0C%04%5E%C2%BE%C3%B9%C3%86p%C3%B1%C3%86k0%C2%A6%7BH%C3%A5%15%C3%A4%C2%831%3A%10%17%C3%A1b%C3%90%C3%97%10%C3%85%C2%A9%C3%AF%C3%B7%C3%8F%2F%C2%B7X%C3%98%C2%B8%C2%8D%C2%B1%C3%89%C3%BD%C3%BF%C3%BF%C3%AF%C3%B3%C3%B7O%2FnQ%3D%C3%BA%5C%C3%A4Y%18%1C%C2%999p%C3%8A%1F_%C2%93%C3%9D%C2%ABi%C2%9Bs%40L%C3%81%C2%A2%18%C2%94%C2%B0%C3%A1%C2%85%C3%A3%C2%B7w%5B%1E%5E%5C7%C3%AB%C3%89%C2%8D%1D%C3%8F%C2%A8%5E%24%7C%5B%C2%BB%C2%9E%C3%A1%C3%B3%C2%84)%601%C2%A9%C3%BB7%C2%B0%C3%AA%C2%BD~x%C3%8AY%20%C2%8E%02%15%0F%C3%9C%02%C2%B2%C3%B6o%C2%9E%C2%9C%5B%0E%12%C2%A3YB'%05%40%0B%C3%8B%C3%8DTKS%C2%B8%C2%8A%04%C2%AE%C3%A0%40%06vs3%C2%A2-%C2%B1%C3%A4%C3%A0%C3%A2m%13%16%C2%8F%14fbV%C3%AB%C3%BD%C3%B0%C2%A6o%C3%A1%C3%A7%0F%C3%8F%C2%A8%1ER%C3%8C2%C3%92%60L%0C%C2%98%2F%26%C3%AD%C3%A0%C3%80%C3%89%5D%C3%8C%C3%86%C3%88(%09%C3%A2%03%1D%C3%A7%C2%90%C3%80'8%C2%AB%C3%AA%C3%AD%C3%8B%C3%A5%C3%87%7F%7C%C3%BBL%C2%B4%C2%A3pU%C2%AE%C2%A4%C2%80jAQ%C2%B5%18%5E%C2%81b%3E%26%26%C2%8C%5C%C2%A8%C3%86%C3%8A%C2%96%C2%B6RB%26%C3%B2%C3%94%C2%8F%C3%AF%7D!%2F%1Eo%26%C3%A8(J%C2%9B%1F%20%C2%B0FB%C3%96%17%18e%C3%B5xC%C2%9B%C2%81%C2%91%17%C2%A4%C3%A6%C2%92%C2%AC%C2%8A%C2%BD%C3%9E%C3%A3%3B%254%C2%AF%C3%BB%C2%84%C2%99Y%24%C2%89U%C3%8B%C3%8A%C3%88%C3%88K%C2%97%0A%C2%99%C2%A6%C3%95%C3%8C%C2%A0tT%3C%C2%AF%C2%80%C3%94u9%C3%95%C2%99%C3%80x%C3%AF%01%C2%B1%C3%A9%C3%A5(%16b%13%2B(%2B%03%C2%B3vI%C3%A2%C2%AB%C2%A7%07%06%2C%C2%A4%C2%B0%25V%05V6%C2%B5A%C2%9D%C2%A6%C3%B8%0D%C2%8Cx%C2%8D%17%2CK3%5D%C2%B6%C2%A6%18%C3%84F%C2%96s%7Cz%7F%C3%96%C2%AD%C3%9F%C2%BFf%C3%BDe%C3%B8%C2%8F%C2%B7%C2%A3%C3%B0%C3%B6%C3%AF%C3%9F%03%1D%C3%AF_7%12%1D%7D%7B%C2%BE%7D9%C2%A0%C3%80'%C3%A8%0B%2B%C2%89%C2%BF%C3%BD%C3%BFw%0B%24%06b%C3%ABM%C2%98%C3%AA%C3%8B%C2%A7%C2%AB_%C3%84%C3%88%C3%8C%0Cv%C2%8Cn%C3%AF%24%C2%9F%C2%AFwn%C3%8D%3A%C2%9F%C2%9E%C2%B4%1C%C3%99a%C3%80%C3%A8_%3EYT%C2%B2X%C2%92%C2%99%C3%85%07%C3%99l%C2%90Y%5B%C2%BE~%C3%AE-%7C%C3%B3%C3%A2%2CI!%C3%95%C3%BA%C3%BE%C3%B5-%C3%85%C2%87%C2%B7%7C%2F%C3%BE%C3%BC%C3%91%0B%C2%AC%0E%1AU%1F%C3%9E%C2%8E%02%C2%89%C2%A9U%C3%94%18%03C%C2%A6%1E%C3%A6%20p%C2%A7%00%C3%88%C3%A6Q%C3%97%2C%06%C3%89%C2%A14a%C2%80%C3%95%C2%88%C3%89%C3%A3%C2%BB%0D%C2%AB%C2%BE%7CL%C3%BF%C3%B4%C3%AF%C3%9FYP%C3%88%C3%81%C3%8C%C3%82%C3%A5%20%C2%A2%C3%AA%3E%C2%AF%C3%A7%0F%C2%97S%C2%9AF%40%0E(dx%C2%91%3E%7C%C3%8B%C2%A9!%C3%A3%C2%A8%5B%1D-g_%C3%AE%C3%98%C2%9A%C3%BE%C3%AF%C3%B7%C2%AF%C3%A701%10%C3%BB%C3%AD%C3%91%C3%83%25%209%C2%AA%15%C2%9E%C2%A0%C3%B1!R%1D%06%C3%84%C2%BE%C2%863%C3%A7E2%C2%B1s%C3%B0%C2%9EM%C2%88%C2%9AE%0D%C3%87%40%C3%9D%C3%B1%0D%C3%AC(%C3%90%C2%80%15h%7C%C2%88%C3%94%C3%A1%20%C3%A4%22%C2%80%1A%C3%A3S%20w%00%C2%99w%06%C3%A5H%1E%23H%10%C3%AA0P%07%C3%8F%60%C2%80%C3%92%C3%B6%07P%C3%87%C2%9B%01%3A%C3%A6%09%10%60%00%C3%A6j%C2%9Ca)%C2%B7%15%23%00%00%00%00IEND%C2%AEB%60%C2%82";
var image23 = group60.add("image", undefined, File.decode(image23_imgString), {name: "image23"});

var PaletteManagerButton = group60.add("button", undefined, undefined, {name: "PaletteManagerButton"});
    PaletteManagerButton.text = "Palette Manager";
    PaletteManagerButton.preferredSize.width = 210;

// BUTTONGROUP9
// ============
var divider23 = ButtonGroup9.add("panel", undefined, undefined, {name: "divider23"});
    divider23.alignment = "fill";

// BUTTONGROUP10
// =============
var ButtonGroup10 = tab3.add("group", undefined, {name: "ButtonGroup10"});
    ButtonGroup10.orientation = "column";
    ButtonGroup10.alignChildren = ["left","center"];
    ButtonGroup10.spacing = 0;
    ButtonGroup10.margins = 0;

// GROUP61
// =======
var group61 = ButtonGroup10.add("group", undefined, {name: "group61"});
    group61.orientation = "row";
    group61.alignChildren = ["left","center"];
    group61.spacing = 10;
    group61.margins = 0;

var image24_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%03IDATx%C3%9A%C3%AC%C2%98%3Fh%1AQ%1C%C3%87O%C3%AFJ4x%C2%A5b%05cI%C2%B0C%1C%C3%A2R9p%0D%05%C2%A7P%C2%B7%C3%86%C2%A18d%C2%8AS%C3%A8%C3%90%C2%B1%C2%8B-t%C3%AC%24%08%C3%89%C3%94!dH%20%C3%8B%05%5D%02m%17%C2%A1%C2%81%C3%83v0%C2%A57X%C2%A14%11T%2CUl%C2%8C%C2%9A%C3%B4%7D%C2%8F%7B%C3%85%C3%A8%C3%B9'%C2%8D%C3%A7e%C3%B0%07%C2%8F%C3%B7%7CO%7C%C2%9F%C3%B7%C3%BB%C3%B3%7D%C3%A7%C2%99%18b%C2%B1X%C3%8CC%C2%BA5%C3%86x%7BGX%C3%B2%26%15(%C3%93j%C2%B5%C3%BE%C3%94%C3%ABu%C2%A9%C3%91h%C2%9CL%C2%9Adff%C3%86%3D%3B%3B%2Bp%1Cg%25%1F%C3%BD%1C%3C%04%C2%A0%C3%AD%C3%AD%C3%ADg%C3%B9%7C%C2%BEj%C2%94%C2%8B%3C%1E%0F%1F%C2%89Dv%08%C3%98%C2%9A%19%13%C3%B0%C2%90%C2%91%400%C3%AC%0F%0E%C2%8C%15(%23B%C2%A6e%C2%94%C3%83%C3%8C%C3%9CB%C2%9BB%C2%8Dj%5C%C3%B7%C3%84K%C2%BB%C3%93%1B%C3%A1%C3%AF%C2%BD%C2%98%14%40%C3%B6%C3%BC%C3%AC%C3%A0i%C3%A1%C2%878%10%C3%AA%3E%C3%8B%C3%B2w%C3%8DfAn%C2%9Eo%C3%A9.%03%C3%9C%C2%9D%C2%90%C2%83%C3%A5%C3%A6%C2%86z%C2%8A%C3%9A%C3%A3%C2%9F%C3%9Fu%C2%87%C3%BA%C2%BA%C2%B0(%C2%8C%14%C2%BEN%C3%9B%C3%9C%C3%9C%0C%C3%99%C3%AD%C3%B6%C2%9E%C2%93%C2%84%C3%83%C3%A1%C2%AD%C2%89%C3%A6T%C2%A7%C3%8D%C3%8F%C3%8F%0B%C2%B5Z%C3%AD%C2%8A%C2%869%C2%9DN%C3%8D%C3%93%C2%91%C3%ABJXZZ%12%C3%86%01%3D%10jee%25F%C3%87%C2%AB%C2%AB%C2%ABn%C3%92%C2%9E%24%12%C2%89WZ%C3%9F%C2%A5%40%C2%80%C3%9E%C3%9D%C3%9D%5D'%1E%C3%B6%12%C2%85%3E%25%C2%82X%25w%1B%7Fxx(%C3%86%C3%A3qy%C2%AC%C2%92%C3%A0%C3%B3%C3%B9%C3%A6%C2%B0!z%C2%AD%C3%B5%C3%A3%C3%A3c%C3%A5%C2%8A(%16%C2%8BJ_%C2%A9Td%00%C2%A9J%5D-%14%0A%C2%B5%C2%B1x%C2%AA%2B%3C%C3%98%2C%3Ad%5D%C3%AA%17Rx%C2%99%C2%B4%7Fk%7B%7B%7B%07%C3%8C%C2%A7%C3%8F%C3%BA%C2%88'%C2%8A%01%0Dc%C2%84%0D%20Z!%C2%85'%C2%91kh%18%C3%B7%C3%B3%C3%B8%C2%B5%3C%05%C3%9B%C3%98%C3%98%C3%B0%3A%1C%0E%C2%BE%C2%BB%18%C2%9A%C3%8D%C2%A6%12%26%C2%9B%C3%8D%C3%A6%26%20%0C%C3%B5%186%07%18B%C2%8A%C2%9E%40%0BW%3C5%0E%C2%A8%600%18%C3%8Ad2%1F%02%C2%81%40%C2%A8T*%7D%C2%A3%C3%B3Hb%C3%B4GGGb6%C2%9B%3D%1D%14%C3%92N%7B%C2%BD%C2%B0xs(%C2%92%C2%AC2Nl%C2%B5Z%C3%A7%2C%16%C3%8B%09NK%C3%B2%C2%84%C2%A7U%C2%A5B%C3%A8%C2%ABS%C3%9D%16%C2%8DF%C3%85NQE%C3%B2v%C2%AE%C2%A7%C3%93i%C2%91eY%5B%C2%B9%5C%C3%BE%08%7DC.!t%C3%97%C3%95-%C3%AE%7FNB%C3%A1%C2%B4%1E%C3%92%C3%B0%C2%BC%C2%8D%C3%90%C3%A6r9yyyY%C2%A0R%C2%A1%3BT%3F%C3%9B%C3%9F%C3%9F%7F%C3%9BY%08%10Z%C2%97%C3%8BeC%C2%81%C2%8C*%C2%9C%03%C2%A1P%C3%9AHh%1A%06%3AO%C3%85%C2%91%1A*%C2%8E*%C2%BF%C3%96%C3%86%C3%89d%C2%92%C2%AE%C3%85%C3%86%C3%A2)%1A%06%02%C3%A7%06%1C%00%C2%BA%C3%83%C3%A1%C3%B7%C3%BB%C3%B9A%C2%BF%C2%91J%C2%A5v%C3%86%16%3EQ%14%C3%A5PH%C3%91D%C2%A5%C3%94%C3%95%C3%A9%C2%9E%C3%BC%C2%A0r%C3%90%C3%8F%C2%AE%13%C2%B6%C2%A1P%C2%92%24UI%C2%93%18%03%C2%AC%2F%C3%94%C3%BB%07%0F%C3%97%C3%B5%C3%9E%C3%9Cb2%C2%B9%C2%B5%C2%BC%C3%9F%03Uj%C2%B7%C2%AB%C2%BF%2F.%24%17%C3%8B%09zC%C2%9D%5D%5E%C2%9E%C2%94%C3%9B%C2%AD%C3%93%C2%A1Po*E%C2%99%C2%B4%C3%A8%C3%B4%2F%C3%96%14%C3%AA%26%C3%95%C2%87%C3%BB%C3%AA6%C3%80%C2%A8%1Cu%C3%85Sxa%C2%85%C3%B7CF%02a%7Fp%60%7C%2B%C3%9F%C3%A4%C2%99%C3%94%C3%8B%17%60%C3%8FI%7Bd%C2%90%C2%A3~%C2%91%C3%B6%C2%85Q%C3%9Fy%C3%BE%15%60%00i7x%C3%81%C2%82%C2%9Az%03%00%00%00%00IEND%C2%AEB%60%C2%82";
var image24 = group61.add("image", undefined, File.decode(image24_imgString), {name: "image24"});

var GlitchMatteButton = group61.add("button", undefined, undefined, {name: "GlitchMatteButton"});
    GlitchMatteButton.text = "Glitch Matte";
    GlitchMatteButton.preferredSize.width = 210;

// BUTTONGROUP10
// =============
var divider24 = ButtonGroup10.add("panel", undefined, undefined, {name: "divider24"});
    divider24.alignment = "fill";

// BUTTONGROUP11
// =============
var ButtonGroup11 = tab3.add("group", undefined, {name: "ButtonGroup11"});
    ButtonGroup11.orientation = "column";
    ButtonGroup11.alignChildren = ["left","center"];
    ButtonGroup11.spacing = 0;
    ButtonGroup11.margins = 0;

// GROUP62
// =======
var group62 = ButtonGroup11.add("group", undefined, {name: "group62"});
    group62.orientation = "row";
    group62.alignChildren = ["left","center"];
    group62.spacing = 10;
    group62.margins = 0;

var image25_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%25%00%00%00%25%08%06%00%00%00%C3%85%C2%9E%20%03%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%08~IDATx%C3%9A%C3%84%C2%98%C3%9B%C2%92%1CG%11%C2%86%C3%AB%C3%94%C3%9D%C3%93%3D%C2%B3%2B%C3%B9%20%C2%850%5C%C2%88C8%7C%09o%C3%81%15%17%3C%C2%81%C3%9F%C2%80W%C3%90%C2%A3%C3%B0%04%5Cp%C3%85%5B%10D%40%10%C3%81%05(%0C%C2%B6%15%C2%B6%0C%C2%B6vN%7D%C2%A8*%C2%BE%C2%BF%C2%BAgvV%06G%C3%88%2C%C3%A1%09%C2%95%C2%AA%C2%B7%C2%A7'%C3%B3%C3%AB%C2%AC%C2%AC%C2%AC%C3%8C%C2%B4%C2%86%C3%8F%C2%B3g%C3%8F%C2%9E2%7Dh%C2%BE%C3%BB%C3%8F%C2%AFayn%17%C2%A0%C3%9F_mw%0F%C2%BF%C3%B7%C3%A23%C3%83%5C%C2%BE%C3%8D%C3%BC%C3%8B%C3%96%C2%A4d%C3%AC%C3%84%1C%C3%B9%3Bfkc2%26q%C3%8Dm%C2%AB9%C3%AB%C3%91%7C!%C3%95.%C2%93%C3%95e%C3%8E%C2%8E%C3%999%C2%86%C3%8D%C3%99s%C3%ADm6%C3%9E%C2%99%1C%C2%98%C2%9D%5D%1E%C2%BF%C3%99%C2%AC%C3%8D%C2%A7O%1Ek%C3%BE%C2%92%3F%7F%16d!%01%C3%BD%C3%B2%C2%B7%C2%BF3%C3%B50%C2%9C%C2%80%26%C2%94%1FS%C3%8E%7D%C3%96l%C3%8C%C3%80%C3%B5Pf%C2%BE%C3%8Bed%C3%8D%C3%9C%06p%06%3D%019%C2%88%0A%C2%8C560%077%C2%8F%C2%9A%2Fj%C3%8D%C3%9C%5Bq%C3%9Dp%C2%BD%C3%92%C3%B7%C3%BA%C3%91P%C3%97%C3%A67%C2%BF%C3%B8%C3%B9C%C3%80%3E%2C7d!%01%15k%00%11s%16%C3%88!%C2%99%C3%8C%C2%B5%C3%A9%C2%B9f%C3%A4%1E%C3%8Dc4y%C3%A4%C2%991%C2%99%C3%85z%C3%99%C2%9C%2Cv%C2%B2%C2%94%C2%9D%C2%81%C2%8AEd%C2%9D%C3%8A%1B%5Bq%C2%A3r%C3%99%08%C2%A4%C3%A1f%C3%83%C3%B5%C2%8A%C3%AB%C3%96%5B%2B%C2%B0%15%C3%BA%C2%BD8n~%C3%B2%C3%83%C2%99r%C3%83%C2%92!u%40%C3%83%5E0(%C3%9E%C2%A3%C2%B1%C2%80M%050%C3%B7%110%C3%AE%0D%C2%82J%C2%82%C3%8AyZ%C3%80%C2%BE%0E%C2%95%C3%8B%C2%92y%C2%AC!%0B%01UF%C3%ADM%06%C3%8A6%C3%81X%C2%802%40%C2%A6%C3%A7%C2%A5%3A%C2%9E%19%C2%81%C3%AB%C3%A0%C2%A8%25%C2%A3%40%25%C2%8B%05r%C2%BEA%C3%B1%0E%C2%88%7D%5C%C3%80%C2%B8f6G%C2%81%C2%B1V%C2%80%C3%A5ab%C3%84%C3%99b%134%C2%8B%C2%8F%C3%A5t%0Be%C2%8B%0Fa%19%C3%AF%C2%B3%0D(%C2%AE%C2%80%C2%A8%C2%B9%C2%AEY%C3%8B%C2%86%C2%B1B%C3%97*X%C2%8B%C3%A5m%C3%87%0B%C2%8F%5C%C2%8F%C3%B8_%C2%84%C3%A3%C3%BA%0C%15y%60%C3%82%C3%9FP%C2%BE%3B%C2%81%C2%A1%7C%3F%02%25%C2%B0%110%C2%AE%7B%0D%C3%AEk%06%C3%8AL%C2%93%04%C2%99%02%C2%96gW%C2%84h%1E%1EE%1E%C3%AB%C2%84%C3%8AZA5%C3%8CM%C2%A5y%06j%C3%A5%C2%9F(%1F%C3%99%3C%C2%88%C3%8B%C3%9AD%09%C2%8E%C3%A6%12j%40%C3%81%0D%0A%05%C2%B4%03b%C3%87%C2%93%C3%BBa%1E%C2%87e%1C%C2%B1u%C2%8F%C3%A7%C3%B5%7DN%C2%A3%C3%80p%C2%AE%C2%89%C3%9F%C3%84%C2%A8%1D%C3%88%C3%87%C3%B2%01%C3%84%02%C3%A1%2B%3B%035%C3%96U50%0D%0Ak%C3%BC%C2%87%C3%91%C3%96%C3%B3%C2%86%19%C2%B1%C3%8Ct%02%C3%A2%C2%95%04u%7D%C2%B1%7CV%C3%8B%C2%B2%1D%05%C2%94%C3%8Dv%C3%88i%C2%87%C3%B2%1D%10%C3%BB%C2%A3F%C3%8A%C2%87CN%1A%C3%87%3D%60%C2%87%C2%94%C2%86%03P%C3%87%C2%9C%26%C2%9E%11T%C3%82%C3%87%C3%98%C3%BF%05%C3%8A%01%C3%A0W%C3%96%C2%85%16%C2%A8%C3%96%C2%B9%C2%BA%03%C2%A8%C2%B5n%C3%85h%C3%99v%C3%B8%C2%A5%1D%15jX%3E%C2%80%C2%9C%C2%96%3F%2B%C2%80%C2%88%C3%A3%C3%92R%C3%A3%09%08%2B0%C2%B2%C3%86%0E%C2%88%1D%10%C2%BB%5DJ%C2%87mJ%C3%BBW9%1E%C2%BFJ%C3%A9%C3%B8U%C2%8C%03%C3%B3%C3%80%C3%9F%13%C3%B7%05%C2%96%C3%A4T%2C%C2%9B%01%C3%88m%C2%9C%0B%C3%97%C3%96%C2%87%07%00%3D%C3%B0%C2%BEf%5E%C3%B1%C3%B7j%C3%A3%C3%B2%C2%B06n%40%C3%9F%C2%94%C2%AC%C2%93%0F%C2%A5y%C3%B3%C2%BA%C2%B2%C3%BA%C3%A2%C2%B8%03%C2%85O%C3%AD%C2%8B%C2%85%00%C3%82%3A%5B%C2%80%C2%B6(%C3%9C%C3%9E%00%C3%B3e%C2%8A%C2%BB%7F%C2%A6%C2%B8%C3%BF%3C%C3%86%C3%83%C2%8B8%1E%3F%C2%9E%C2%A6%C3%BE%C2%B38%C2%8D%7C%17%C3%A5%10%C2%AF%07O%C2%96%C3%8D%5E9%C3%A7%1F%C3%BBP%7D%3F%C2%84%C3%A6%C2%89%C2%AFV%C2%8F%7Cj%C3%9F%C3%8E%C2%9E%C2%97%C3%B7St.f'%1A%C2%97m%C3%B9%0D6b%7F%7C%0D%C2%AA%C3%B8%10%60Z2YH%40Xc%0B%C3%8C%0E%C2%80%C3%9D%3F%C2%A6q%C3%B7%C3%97q%C3%98%3F%C2%9F%C3%86%1E%C3%8B%C2%A5%C3%BFvN%08%C2%90%17%C3%8B_%C3%848i%7C%C3%84%C3%B3O%C3%83%C3%94%C3%BF%C2%A8%C2%AA%C3%87%1F%C2%84*NZjc%C3%A6%C3%9F%3Bm%0AWV%C3%9D%11%C3%B1%C3%AF%40%C3%819%C2%8D%C3%85%C2%99%C3%93A%3E%C3%84%C2%92%C3%ADe%C2%A1%7F%01%C3%B4b%C2%9A%C2%B6%C3%8F%C2%A7a%C3%BB%C2%A7%C2%A1%C3%9F%7D2%C2%8DCz%C3%83%C3%83L%2F%C3%B0%C3%A7%C2%A1%3F%C3%B0%C2%82q%C3%902%C3%A3%40%C3%AC%043%C2%87%0D%C3%AD%C3%90%0CP%0A%C3%9E%C2%B8%20%C2%8E%0BK%19A%C3%B5%03%01%C3%B3(g%C3%86%C2%87%5E%C3%A5%C2%B4%7F%19%C2%A7%C3%BD%C3%9F%C2%B1%C3%90%1F%C2%87~%0B%C3%90%C2%98%C2%BF%C3%A5)%C2%AB%17%C3%B9%C2%98%17R%C2%90%25%C2%BA%5Bv%C2%A6c%C2%89%7D%C2%95l%C2%A8%1Cq%2C%C3%BB%3A%C2%98%5C%C2%8B%C3%A3%C3%92R2k%C2%89C%2C%1F%3B%0CgN%C3%B1(%1F%C3%BA%C3%9B4%C3%AC%3F%C3%BD%1F%C2%80.%C2%97Ur%C2%AE%C2%9D%C3%9B%C3%A3o%C2%A1s%C2%AEbw%C3%96%2B%C2%82j%C2%93s3)%C2%98%C3%82a%C2%96%0D%C2%A3%1F%C2%A4Iq%C2%87h%0D%C2%94%C2%B6%C3%BB%C3%B0*%259s%C3%BF%C3%91%C3%B8%C3%A6K%C3%B6M%16%C2%93%3C%C3%89%C2%95%7C%C3%A9%C2%91%3E%C3%A9%C2%95%C3%BE%C2%BC%C3%B8%C2%9A%5B%2C%C2%95tl%C3%B0%C3%85D%7C%C2%9A%C2%88C%23%C2%8E%3Eb%C2%A9a%C2%9FS%C2%BA%C3%8F%C2%84I%C3%B2%24W%C3%B2%C2%A5gX%C3%B4%C2%96cKA%C3%B4%04e%C2%96%1D%11%C2%8B%C3%85L%C3%A4%C3%81%C3%88%0E%C2%8C%2Ca%C3%8C%C3%B7%C2%9C%C3%85I%C2%9E%C3%A4J%C2%BE%C3%B4H_%C2%BC%C3%9D%C2%91%C3%A9r%C3%B9%C2%8CY%0EV9%C2%A3.%14%7F%C2%86%C2%BB!%C3%A8%C3%9E%3E%C2%92%2B%C3%B9s(%C3%97%C3%88%C3%A7%C2%9C%C3%AC%C3%92R%17I%C3%A3%3C%13B%C2%8C%C2%B7%C3%BF%C2%9F%C2%9CWr%C3%9D%C2%AC%C3%86%C2%BE%C2%AE%C3%B7%0CuJ%C3%8CxP'%3B%5B%C3%96%C3%AA%C3%BCrm%C3%89B%C3%AE%C3%BF%23%C2%B9%C2%92_-%07%C2%B8%C3%B4.%C2%89%C2%A1%C2%BD%C2%84r%C3%84%0FO%7C%C3%A0t%C2%B7%C2%81%1F%C2%845%5B%C3%B6%1D%C3%A7%2B%C3%92%C2%8C%7B%C2%B5%C2%97%C3%A4I%C2%AE%C3%A4K%C2%8F%C3%B4I%C2%AF_%C3%80n%C2%A18%C3%A0%C2%B9%13%C3%B8AU%C3%ABd'~%10K%C2%AA%C3%87!%C3%94%08%08%C3%B7%09%25y%C2%92%7B%C2%B5%C3%84)%C3%A9%C2%93%5E%C3%A9%17%C3%87%19%C2%8A%7C%C3%99)%3B%C3%A4%C2%81Zy%0F%C2%81%C2%AD%C3%91%C3%89%C3%BE%C3%88%C2%85%15g%C3%96%C3%AA%C2%BE%C2%96Qr%24Or%25_z%C2%96%3C%C2%AB%C2%96~q%C2%9C%23%C2%BAJ%C2%9E%C2%92%19f%C3%9B%C2%ACH%C3%84%3A%C3%AB%C2%86k%C3%A7%C3%87G!O%C3%87%5CE%C2%8E%1E%C2%9D_%C3%8A%C2%AD%C2%BE%C3%B5nD%C2%AE%C3%BD%C2%A0%C2%AE%C3%9B%C2%A7%C2%A1%C3%AA%1E%05%C3%9F!%C2%BFE%C3%8FJ%C3%BA%C2%AA%253%15%C3%87%19%C3%8A%C3%A7%C2%ACum!%26%C3%8D%C2%B5%13!%C2%9F%C3%A1bt%3E%C3%850%C3%87%0E9%C3%A5_%C2%86%C3%A1%40%1A%13%C3%9F%14%C3%A8%C2%A1%C3%B3%C3%BE%7D%C2%80~%1C%C3%AA%C3%B5%7B%C2%A1Z%C2%B3%C2%84%C3%AB%2B%C3%AB%3A%C2%92%C2%BFn%C2%A5L%C2%94!%C3%BD%C3%A2%C2%B8%C2%B5T.%C2%96R%C3%9EL%C2%85B%C3%B2%C3%A5%C3%A6*e%0EaZl%C3%A3%C3%88%18%3D%C3%82%C2%AB%C3%A7%C3%A3x%C3%B8%24%C2%8E%C2%83N%C3%BFo2%C2%9Bv%07%C3%8E%C3%AC%C3%9E%C3%B3U%C3%BD%C2%B4%C2%AAZ%C3%B2%C2%AA%C2%96%C3%BC%C2%AA%7B%C3%9B%C2%85%C3%B5C%C3%A7%C3%96%C3%B8%C3%94%C2%9A%C3%A5%C3%ABH%C2%97%3B%C2%A0%3A%C3%A9w%C3%B9%C2%AE%C2%A5*nv%C3%B9%5C2%C3%8D%C2%AB%C2%AB-%C3%AA%C3%8A%C2%89%1E%C2%94%C3%9EVW%C3%96%C3%97%C2%8F%7Ch%C2%BE%C2%88U%C3%BF%C2%92%C2%A3%C3%A2%259%1E%C3%87E*%C2%81P%C3%A5p%C3%89%00%C2%AC%25%C3%B3%C3%B4%C3%AF%C3%A2%C3%90%C3%AF%C2%92u%C2%BE%C3%83%C3%B3Xf%C3%B5%C2%96%C3%B7-~%C3%94%02%C3%93ml%01Z%23s%C2%83O%C2%AD%17%C2%A8N%1C%17P%C2%A5%0CZ%2B%05%3C%05x%15%C2%B9%C2%B8%C2%B7%C2%A34%C3%B2%C2%ACy%C2%85%C2%99k%C2%845oe%C3%9F%3F%C3%B1%C2%BE%C3%9F%12%C2%94Iq%C3%B09%C3%8EKb%C2%B3*%1A%C2%BDG%C3%8Dk%C3%B0%C2%AC%C2%B2%C2%80%C2%B0%C2%81q%C3%A3%7C%C2%A3%C3%9F%C2%AD%5D%C3%B1%C3%95%C2%96%C3%BB-%C2%BBN%16Z%0Bh%C2%81ZK%C2%BF8n%C2%A1R%C2%AE!%5D%C3%8FER%C2%B1%C3%BC%5CL%C2%B2)I%C3%82*%C3%8A%5B%C3%92%0BG%C3%B2%C2%9F%C2%8EW%C3%99%0DG%C3%A7%07U4%C3%83%7C%C2%80%C3%87%25%C3%91%C2%9E%7F%C3%88%C3%9BP%C2%BD%C3%B8%C2%BA%C3%84%3BW%5E%C2%A6Q%C2%8A%C2%B28u3%C3%BB%10P%C2%B3u%16%C2%A0%C2%8D%C3%B4%C2%8B%C3%A3%16%C2%8A%04%C2%8B%C2%8B%C2%8DQ%C2%8D%C2%94%C3%B5%C2%BF%C2%80T%C3%9D%C2%B2%01%2CP%C3%A4%3B5yVk%2C%C2%89%20%C2%A9F%19%C2%8E%C3%B2%C3%8ALq.%1An%C2%A1%14%C2%88%C2%89%C3%96a%C2%AE%C3%B94J%C2%A8%C3%91%0ES%C2%89U%C3%8D%C2%BB%C2%AD%C2%AD%0A%C2%94%C3%A9%00%C3%AAB%013kq%C3%9C%C2%B1%14_%5C%C2%99R%C3%BB%C2%93%2F%C3%8F%0D%09%05%C2%B4%3AP%C3%BFc%C3%93c%C2%A5%C2%82U%C3%85%C2%A8%C2%9D%2B%C3%A4%C3%A9%5C!%C2%97%C2%82%C2%B4%1C%C2%AC%C3%B6%5C%C2%8C%22%C2%83%17C%C3%A1%C2%B9B%0E%C2%A5%18U%C2%85lK1%C3%8A%C2%BD%C2%96%0D%C3%94%12%C3%89%3B%C2%9E%C2%91%C2%B5%C2%BA%3B%C2%96%C3%82%C3%AB%1B%C3%9E%C3%AE%C2%BA%C2%B4id%25%C3%96%C2%96Y%C3%81%C2%AC%C3%B6%C2%A5%C3%94%C2%B6%3D%C3%96%C3%AA%C3%A3%0C6%C2%962_%3BU%C2%85%C3%A4%C3%92K8A%C2%9D%C3%8F%C3%91%C2%A5B%C3%96%C3%8B%C2%95%C2%88%5D%1A%1B%C2%B6)%C2%B3%C2%99%C3%81%C3%BC%C3%9C%C3%A0%C3%90%C3%9C%C3%B1%C3%BCZ%1Cg%C2%A8%C3%9Df%C3%8D%C3%99g%C3%96%C2%AC%C2%9BB%C2%BD6P%C3%8D%C3%92%C3%95jFP4%1EcipX2%C3%90%3C%C2%90%C2%88%C2%8D%C3%AA%C2%BE%14%0B%C2%91%C2%BE%C3%A6%C2%8B%3C%C3%A8t%C3%88%C3%9B%C2%B3O%16%C2%8BU%02s%C3%AA'X59%C3%A6%16%10%C3%97%2B%C3%AE%150%C2%80%C3%94%C3%A4h%C3%A0%C2%90%07%3C(PjX%0D%C2%AC%7C%3D%0C%C2%AB%02fL%C2%9D%C3%94%C2%B6%C2%B1%C2%A6t%5C%C3%98%C2%81%C3%A4%C3%8F*%C2%B5%0B%C2%98%C2%BA-%C2%A4%C2%AE%02%C3%8A%C3%A7x%C2%96%C3%AF6%C3%8C%C3%94%C2%9B*M%C2%B2%19%C3%8A%C3%8E%C3%BD%C2%A9%C3%92%C2%A32%C2%A5%C3%B3%C3%A2%C3%A6%1E%C3%95%C3%AA%C3%94%C2%A3R%7FJ%1CE%C3%80%7F%C3%AA%C3%A4-%5D%C2%BCx%C3%AA%C3%A2-sJK7o%C3%BE%C3%9E%C2%9E%60%C2%B2%C2%B9h%05%C2%9D%C2%BBx%C2%A5%25T%3Ay%C2%9A%C3%A5%C2%A7~n%11%C2%95.%C3%9E%C2%A9%C2%9B'p%C3%BBz'%C3%8F%5E%C3%B4%3C%7F%C3%85%C3%B8%C3%A9w%C3%94%C3%AB%14%C3%8C%1FN%3D%C3%8F%7F%0B0%00%00%C2%91%C2%A2%01%C2%BE%C3%9C%C2%969%00%00%00%00IEND%C2%AEB%60%C2%82";
var image25 = group62.add("image", undefined, File.decode(image25_imgString), {name: "image25"});

var VignetteButton = group62.add("button", undefined, undefined, {name: "VignetteButton"});
    VignetteButton.text = "Vignette";
    VignetteButton.preferredSize.width = 210;

// BUTTONGROUP11
// =============
var divider25 = ButtonGroup11.add("panel", undefined, undefined, {name: "divider25"});
    divider25.alignment = "fill";

// TAB4
// ====
var tab4 = tpanel1.add("tab", undefined, undefined, {name: "tab4"});
    tab4.text = "About";
    tab4.orientation = "column";
    tab4.alignChildren = ["left","top"];
    tab4.spacing = 10;
    tab4.margins = 10;

// TPANEL1
// =======
tpanel1.selection = tab1;

var image26_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%01%14%00%00%00r%08%06%00%00%00%C2%92%C2%AA.%C2%8A%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%0A%C2%AEIDATx%C3%9A%C3%AC%C2%9D%3Dl%1C%C3%87%19%C2%86%C3%A7%14%26%15%0FHi%02%16%10%04%C3%A15)%121E%3A%C3%92%C2%85%0D%24d%10%C2%84%15%C3%99%C2%84%C2%8D%C3%A9%C2%86D%02%C2%BA%C2%91%00%C2%83L%11%0A%08%C3%A4%C3%86J!6%C2%96%1B%C2%A6!%1B%0B%08%40!H%13%C3%9C5R%0A%C2%9F%C2%90%C2%964%10W%C2%A1z%C2%AA0%12%25%C2%97%7DW%1Czonvo%7Fn%C3%B7~%C3%B6y%C2%80%C2%83%C2%A4%C3%93%C3%B2noy%C3%B3%C3%AC7%C3%9F%7C3%C3%93x%C3%BB%C3%B6%C3%AD%1F%1Bc%C2%BEk%00%00%0A2%17%3C%3E%09%1E%C3%AFp)%00%C2%A0(%C2%B7%C2%B8%04%00%C2%80P%00%00%C2%A1%00%00B%01%00%40(%00%C2%80P%00%00%C2%A1%00%00B%01%00%40(%00%C2%80P%00%00%C2%A1%00%00%20%14%00%40(%00%C2%80P%00%00%C2%A1%00%00%20%14%00%40(%00%C2%80P%00%00%10%0A%00%20%14%00%40(%00%C2%80P%00%00%10%0A%00%C2%8C%C2%9F%C2%B9%C2%B2%C3%9F%60mm%C3%8D%2C%2C%2C%C3%94%C3%BEB%C2%9F%C2%9D%C2%9D%C2%99%C3%8B%C3%8BK%C2%BEq%C2%80P%0A%09eu%C3%95%2C--%C3%95%C3%BEBw%C2%BB%5D%C2%84%02ty%00%00%26%26B%C2%89%C3%B2%C3%AA%C3%95%2Bs~~%5E%C2%8B%0B%C3%9Bl6%C3%8D%C3%A2%C3%A2%22%C3%9F0%40(e!%C2%99%C3%AC%C3%AC%C3%AE%C3%96%C3%A2%C3%82%C2%AA%C2%9Bw%C3%B4%C3%A8%11%C3%9F0%C2%A0%C3%8B%03%000%C3%B1%11J%16Z%C2%81%C3%AB%C3%A6S%1C%C3%975%C3%BF%C2%8B%C2%8D%10%7C(1%C3%AAK%C2%8Ej%24*n4J%09U%C3%AF%7Bx%7C%1Cw%3E%00%08eL%C2%AC%C2%99o%C2%99%C3%9F5%C2%BE%3D%C3%B4%C2%B83%C3%B3_%C3%93%C3%AD%0D6%C3%A0%C2%83%C3%BD%C3%BDp%C2%B8%C3%9AE9%C2%9C%C2%9D%C2%9D%1D%C3%A3%C3%AA%C2%A4%C2%B5%C2%B8h%C2%8E%C2%8E%C2%8E%C3%8C%C3%BC%C3%BC%C2%A0%C3%824%C3%9C%C3%AB%13%C2%8A%C3%8EO%C3%A7%C3%A9%C3%B2%C3%93%C3%9E%C3%97%7C%C2%AB%C2%80.%C3%8F4%C3%8A%C3%A4%C3%B7%C2%BD%C3%BFd%C2%96%C3%89%C3%B9%C3%85E%26%C2%99%1C%C3%9E%C2%BF%C2%9FZ%26%00%08%05%C2%99%20%13%C2%80Y%13%0A2%01%40(%C3%88%04%00%26G(%C3%88%04%00%C2%A1T*%13%C3%B1E%C2%8E%C3%91%1Cd%02P-c%1B6%5E%C3%89%20%13%C3%9B%C2%B0M%C3%AFM%C2%A4RW%C2%99%C2%A8%C3%B2%C3%96%C2%AD%C2%AF%C3%91%C3%A7%5D__7W%C3%81%C2%9F%3E%C2%9E%3F%7B6%C3%B0%C3%9C%C2%BD%7B%C3%B7L%C2%BB%C3%93%C3%A9%7Bn%7B%7B%C3%9Bl%C2%BF%C3%BF~%C3%9Fs%1A.We%C2%B3%C3%AF5%C3%92%C2%90%C3%B4%C3%B3z%3E%C2%AE%C2%BE%07%C2%88P2%C3%93j42%C3%BF%C2%8Cm%C3%A0u%C2%94%C2%89%C2%8A%C3%AE%7C%C3%85z%C3%BAL%C3%8B%2B%2B%C2%99%5E%C3%AB%C3%A0%C3%A0%20%C2%BC%26%003%C2%97C%C3%89%C3%8A%C3%81A%3D%C2%BB9%C2%9B%1B%1B%C2%B9%C3%BE%C3%8F%C2%87%C2%AE%C3%85%C2%83%07%0FLs~%C2%9E%16%00%C3%B5%15Jo%C3%BF%C2%9E1%C2%AB%3F%C2%AB%C2%9DL%C3%94%C3%B0%7D%12%C2%B5hVs%C3%965g%14%C3%B1H*%003%C2%91CIBy%12%C2%B7QO%C2%8AL%C2%AE%C3%8C%C2%9B%C3%B9%3A%2B%15%C2%BAX%5D%C2%9A%C3%B9!%C3%91%C2%84%16%C2%B2%C3%8A%C2%9A%C2%93%C2%90%C2%84%3E%C3%9C%C3%9B3%C2%9F%3C%7C%C2%98x%C3%9C%C3%A3%C3%8F%3E%C3%AB%C2%97%C3%91%5Boy%05%C3%A7%1E%C3%87%C2%82R%08e%22%08%C2%87%C2%87%1B%C3%A6%C2%A6q%C3%87%C3%89%24%C2%B0%C2%899%C3%99%C3%BDM%C2%A52%C3%99%C3%A9%C3%BD%C3%9B%C2%AC4nU*%147Y%C3%AA%15J%C3%90%C3%80%C3%95%C2%A0%C2%B36%C3%A2%C2%8D%C2%A0%C2%BB%C3%A4%5E%C2%BF%01Q%3C~%3C%20%22%C2%AFP%C2%9C%C3%A3%00%C2%A1L%C2%9CTV%C3%B7%3F%C2%8A%C2%95Ic%C3%B7C%C3%B3%C3%81%C3%85W%C3%A62%10%C2%81%1D%C3%BD)%5B%26%C3%A7%15G'j%C2%BC%C3%AE%2Ch%3Bc%C3%9A%C3%AD%C3%A6%C2%84R%C3%89%C3%91%C2%A8%15%C2%A5%C2%8Cc%C3%84E%C2%9F%2B%C2%A9%2B%C2%A7%C3%8F%C2%A8%C3%9F%19%20%C2%94%C2%91Ie5A%26%C3%A6%C3%A2%C3%8B%1B!hH%C3%B9b%C3%B1%C3%BB%C2%A5%C3%8B%C2%A4j%7C%09%C3%97N%C2%A7%13F%15%C2%AEPtl%1E%C2%A1%C2%84%23E%C3%8B%C3%8Bc%11JR%C3%B4%25%C3%89!%C2%94%C3%A9b%C3%BA%16Xrd%12%15%C3%83%C3%91%C3%9A%2FgJ%26jp%C2%BE%C2%86~rzj%3A%C3%ADv%C2%98%3Fr%C3%85%C2%90t%C3%87%C3%BF%C3%A6%12%C2%BE%C3%A2%C2%9B%0F%08%25N%26%C2%96%C3%A6%1F%1F%19%C3%B3%C3%B4%2F3!%C2%93%C2%B8%C3%A8D%C3%9D%00%C2%89f%C2%B1%C3%95%C3%B2%C2%AE%C3%8F%C2%9Bf%08%C3%B9%C3%B0%C3%B0%C2%90%C2%84)%C3%94%C2%AF%C3%8B%C3%A3%C3%9EU%C2%BB%C2%BB%C2%BF5%2B%17%C3%BFL%3C%C2%AEq%C3%BF%C2%81z%3Fa%C3%9Ee%C2%9Ae%127T%2C%C2%99%24%C2%ADUk%C2%87%C2%90%C2%93r%22%C2%AA%C2%AAU%C2%B5l%5C%C3%B7%C2%B0%C2%B2%C3%9F%C3%A9%C3%95U%C3%A2y%5E%0CI%16%03B%C3%89-%13%3B4%C2%9CF%06%C2%92%C3%8A%17%C3%9D%17%C3%A6%C3%B0%C3%AC%C3%8FS)%13%C2%91f%C2%A88%C2%8E4C%C3%88%C2%BA%C2%96%1A.V%C3%95%C3%B1%C2%B8%C3%909%C3%94e%C3%91r%C2%BA%3C%13(%13%C2%A1D%C2%AD%1D%C3%91I%C3%A2'O%C3%BF%3A%20%C2%8Ei%C2%91%C2%89H3T%1C%2B%C2%94%C2%94%C2%BB5*%C2%82%3B%3D%3D%C2%A5%15%40%7D%22%C2%94_om%0D%C3%B4%C3%B7O~%C3%B0%3D%C2%B3%C3%96%C3%BA%C3%A1%40%C2%BE%C3%84%17%C2%8D%C3%98%09%C2%85Ed%C3%92%C2%BA%C3%AEF%C2%9CT%C3%94%C3%B8%7CC%C3%85V%00%C2%97%2F_%C2%A6%C2%92O%C3%9A!dE)y*m%01%C2%A6R(%C2%AELl%C2%9DI%2F%C3%A8%0E%C2%84%C3%93%0BSH%C3%A5%17%C2%81H%C2%96%C2%86%04cI2%C3%91%C3%BB%C2%9DTx'W%C2%97%C3%85%17%C2%A9%C3%B9%C3%B2Abeyy%60S1%C2%BDF%C3%9A!d%C2%9BOac2%C2%A8E%0E%C3%85m%C3%9C6%C2%B7%C2%A0%0A%C3%9A4R)*%C2%93*%13%C2%97J%C3%86*%3Aqs%20%1Dg%C2%B9%C2%81(%12%C3%87%C2%86gt'.9%C2%ABdh%C3%9F%C3%A7%C2%97%C2%AC%0E%0F%C3%8D%C3%9E%C3%9E%5E%C3%9F%C3%B3qI%C3%91a%C3%89T%C2%974%C3%A7%00%08e%C2%AC2%C2%B1H*%2F5%C2%94%C3%BA%C3%A2%1F%C2%B9%5Ew%C2%92db%1Bw%C3%96D%C2%A5%C3%966i%C3%87%08g'e%C3%83%C3%8F%C2%92%20%C3%8D%C2%9AL%25%C3%B1Z%1FnM%C2%B3Ll%5E%C3%A1W%C3%9D%C2%BF%C2%A7J%C3%94N%C2%BAL%00%10%C3%8A%C2%98eb%C3%B3%0AiG%7F%C2%90%09%40%C2%8D%C2%85%C2%92en%C2%8E%C2%A4r%C3%B9%C2%A6%C2%ACm(%C2%A7%C3%A6u%26%C2%99%C3%90%C3%A7%07%C2%98%01%C2%A1d%C2%9D%C2%9B%C2%B3%60%C3%92--%C2%B9m%C3%A6%C3%BA%C2%86%C2%91%C2%87EB'%C3%94k%00%0Cen%C3%9ANx%C2%94%2B%C2%AD%15%C2%99%C2%A5%0C%00S.%C2%942%C2%96m%C3%94%C3%8F%5Ee%C2%9C%C2%A5%0C%00S.%C2%942%C3%97%C2%80%C3%95%2C%C3%A5%5Es%C2%BEo!%C2%A7I%C2%91%C2%89%C2%BAb%C2%AAzUM%C2%89-%3CS%C2%91%C2%9Bf%1A%C2%ABND5%1Ev%C3%88X%C3%87%C2%BA%C2%B5%24%C2%A9%C2%AF%C3%AF%C3%93%C2%A7%7Dk%C2%8F%C2%A8%16%C3%867%C3%8FG%C2%A5%C3%BA%C3%AE%10u%C3%92d%C3%85%24.%C2%AE%C3%A7%13%C3%B9~%C3%BEa%C3%B0%C2%BCo%25%C2%B9p%C2%B5%C2%B8%C3%95U%C3%93j%C2%B5n%C2%AE%C2%87%C2%8A%1F%C3%83%C2%B5S%C2%82%C3%8F%C3%80%C3%96%1C%08%C2%A5T%C2%99%C2%A4%5D%036%C3%8D%2C%C3%A5%C2%AA%C3%91Jj%C2%BE%C2%825ESjXz%C3%A8%C3%BF%C3%95%C2%A0%C3%94%00U%C3%83%C2%92%C2%B7%C2%84%C2%BE%C3%BB%C3%A2E%C3%9F%C2%BF%C2%B5%0C%C2%82%C3%AF%C2%B5%C2%9A%C3%8D%C3%A6%C2%80P%C2%8A%C2%96%C3%AD%7B%C2%B7%07%09%C3%9E'%C2%8A%15%C2%9C%C3%AFX%C2%BB%C3%B2%C2%9B%1E%12%C2%8A*%7F%C2%AFX%C3%B3e%2CL%7CRVw%C3%84%C2%A2K%10%C3%9C%0D%1Ei%C2%86%C2%94%25%C2%95%C3%AE%C3%BD%3Fx%C3%9F%C2%AF%C3%AA%7Dl%C3%A2d%C3%A2%23ll%07%07%C2%A9%26%04%C2%A6%25n%C2%A1%26E%05U_%0B%C2%BD%C3%9F%C2%9F%C2%8E%C2%8FS%C2%89K%C3%87%3Cy%C3%B2%C2%84-B%10%C2%8A%1F%C3%9F%C2%8A%C3%ACy%26%C3%BA%15%C2%99%C2%A5%C2%AC%3Bc%C3%96%C3%8D%C2%B4%C2%8A%201ld%C3%9CkG%C3%97iT%C2%8B%26I%26Iu8Y%C3%8F%C2%ADPw48%C2%8F%C2%ACuAv%C3%9F!%C2%A0%C3%8B3%C2%94%22%C2%B3%C2%86%C3%B3%C3%8CR%C2%B6%C2%BB%14%C2%BA%5BD%C2%94I%C3%9C%C2%9D%C3%98%C2%86%C3%B2%C3%A1.%C2%82w%C3%AE%C3%9CD%11%C3%AA%C2%A2%C3%A9%C2%A1%3B%C2%B9%C2%9BC%C3%90%C2%B1n%C3%A4bs0Q%C2%A22%1A%C2%B6%C3%AA%C2%9B%C3%9E%C3%97v%C2%B1%C3%82%C3%AE%C2%92%C3%B3%C2%9E%C3%AA%16%C3%B9%26%1A%C2%BA%C3%87%C2%A5Y%40I%5B%C2%A4%C3%86%C3%89%C3%84%C2%BE%C2%9Eo%7BVu%C3%A1%24%23%C2%BA%3E%08%C2%A5%14%C2%99%C3%A4%C2%99%C2%A5%C2%BC%C2%B6%C3%BF%C2%91Y%C3%B2%C3%8C%C3%BC%C2%AD%22B%C3%B1v7Z%C2%AD%C2%9B%C2%85%C2%9B%C3%B5P%C2%A3V%C2%83%C2%B3%C2%B3%C2%8A%7Dsl%7C%7B%16K%26q%C3%B3k%C2%A2%C3%89%C3%9F%24667o%C3%9E%C3%97%7D-%C2%BD%C2%86%2F%C3%91%C2%9AuN%C2%8F%C2%84%C3%A0%C2%8B%C2%86%C3%9C5r%C2%A25D%C2%BA.y%C2%B6%13%C2%81%C2%9A%09e%142%C3%892KY%C3%87%2C%C3%B9V%C3%9C%C2%AF%C2%80%C3%B0%C3%8E%C3%ABY%C3%A3%24%14%C3%83%C3%B5%C3%B3v%C2%84G%0Dh%C2%94wa%C3%9F%C3%92%09z%C2%AF%22%C3%8B%23%C3%A4E%02%C3%B5%C2%A1%C2%99%C3%91%C3%91%11%C2%A0P%C2%A4%C2%81%60%C2%94%C3%88e%C2%94%C2%87%1CJ%C2%A52%C2%89%0A%C3%A3%C3%B2%C3%8E%C2%8Fbeb%C3%86%24%13%2B%C2%94a%C3%9D%015p%C3%9D%C2%BD%C2%8F%C2%8F%C2%8F%C3%83h%60%14I%C3%88%C2%B8%7Dr%C3%AE%06%5D-w%C2%A5%C3%BCa%7B%C3%AA%C2%94%C3%99%C3%B5%C3%B3%C3%8D%C2%AC%3E%C2%BF%16%2C%20%C2%94%C3%8Aeb%C3%B3%0E%C2%BEY%C3%8Aq2iV%C3%BC%C2%B9u%C3%87M%C3%9B%40%C3%94%C3%B0%24%C2%96%C2%A2R%C3%B1%09B%C3%A7%C2%A0%C3%AEC%C2%BB%C3%9DN%15%C3%8D%00B%C2%A9%C2%A5L%7C%C2%B3%C2%94%C2%93%C2%B6%3C%C3%9D%C3%AC%3C%C2%AFt%13u%C2%BB.%C2%8A%1E%3A%C3%9Fa%7B%C3%A9%C2%8C%22b%C3%B0%25cU%2C%26%7Ck%C3%8FJde%0E!_x%C2%B6%09%C2%B1%C2%BF%5B%C3%9F%C3%A7%1F%C3%A5%C2%B09%C3%8C%C2%98P%C2%AA%C2%90%C2%89ER%C3%B9%C3%97%C3%BE%C3%9D%C3%84-O%C2%B5%17%C3%90(%C2%AAr%C2%B3%C2%A0%C2%84%C2%AAf9%C3%AB%7C%C3%9F%7D%C3%AF%3D%C2%B3%C2%B5%C2%B5%15%C3%BE%3Dn7%C2%BD%22%C2%BB%C3%BF%C3%85%0D%15k%C2%94%C3%AB%C3%B9%C2%B3ga%04%C3%A4%C2%A3%C3%8C!%C3%A4%C2%B8%3D%C2%97%C3%9Dj%60Ef%3A%C3%8F'%C2%9F%7F%1E%5E%C2%B3h%C2%A4f%0B%00%C2%A3%0FjT%C3%8Ac%C2%AE%C3%AE2%C2%B1%C2%8Dfa%C3%B5%C3%A7%C2%892%C2%89%C2%9E%C3%9By%C3%8A%25%12%C2%8A%60%C2%87%C2%AB%C2%95%C2%88%C3%95%C3%B2%C2%8F%3Aw5%C2%B0%C2%9B!%C3%A2H%C3%A9%C3%B97%C2%A7%C2%9B%3F9%C2%BB%C2%99S%0C%C3%AE%10%C3%B2(%C2%B1%25%C3%B5n.%25%2C%5E%0B%C3%A4a%C2%A3'u%C2%BDlt%C2%A2%C3%AB%C2%A5%C3%8F%C2%A2%C3%99%C3%A1J%1A%C3%87%C2%8D6%C2%91o%C2%A9%C2%91P%C2%AA%C2%96%C2%89%C2%B7%C2%AB%C2%90%C2%B0Ka%2B%C3%A5%12%09E%C2%A2%C2%85%C3%A89)%C3%B2H%13%7D%C3%A4m%24i%C2%87%C2%8A%C3%A3%C2%88%0E!%C2%8F%1A%C3%89%C3%8A%17%1D%25%C3%AD%C2%8B%C2%AC%C3%9F%C2%BF%C2%A4rzrB%0B%C2%A7%C3%8Bc%26Z%26e%137)o%18%C2%8AN%C3%B2n%2C%1E%C2%B7%C3%8A%C2%BE%04%C3%A5%3E%7C%C3%B5%1De%26g%15%C2%95e%C2%9DWe%C3%ABT(j%23B%19%C2%BBL%C3%AC%C2%97q%C3%B3%C3%8B%C2%AF*%C3%8D%C2%97D%C3%83%7C%C3%A5J%C2%94'H%3B%C3%A9%C2%AEH%03%C2%8A%C3%9B%C3%B2T%C3%97%C3%8D7%C3%ADA%C3%87%C2%BA%C3%82%C2%93%04%C2%B5%C2%95G%3Bae%C3%BE%22XQj~%C3%93%C2%B0%12%7C%C2%B7%C3%A8%0D%C2%88P%C3%86.%13%7D%19%C2%B3%C2%AEQ%1B%C3%9EMG%C2%94%5B%C2%B1%15%C2%AFv%C2%84'%C2%AE%C3%AAS%C3%8F%C2%AB*t%7D%7D%3Dw%03Rw%C3%85G%C3%9C%0Au%C2%9Dv%C3%9B%C2%9B%C2%AB)%7B~%C2%8F%C2%AE%C2%836%7D%C2%8B%C2%BB%1E%C2%A3%C2%B8%16P%C2%9C%C3%86%C3%9B%C2%B7o%C3%BF-%C3%B8%C3%B3%C2%9D%C2%B2%C3%9E%40I1%7B%C2%A7U%C3%88l%C3%8B%C2%AF%3Fh%C3%8C%C2%85%C3%8B0N%C2%A2L%C2%A2%7C%C3%9C%C3%B8%C3%8E%C3%90%C2%A5%0F%C2%ACLt%C2%8EW%C3%97Rq%C3%8B%C3%8FG%C2%91%08%C2%8CF%2C%1AR%C2%ADsH%1F%1D%26%C2%AE%C3%BB%C2%B5%C2%A0%C3%8B3%C3%81%C2%91I%C3%9F%7B%04%22Y%C3%8A!%C2%93%C2%B2%60d%C2%A2%3F%22a%C2%BE%0E%5D%C2%9E%C2%A9%C2%92%C3%89Q%10%C2%9D4'D%26%00%08%05%C2%99%00%20%14d%C2%82L%00fB(%C3%88%04%00%C2%A1%20%13%00%18%C3%9F(%C3%8F%C2%A7%C2%BD%C3%97%C3%A6S%C3%B3%3A%C3%95%C2%B1j%C3%BC%C2%9A%1C%C2%97%05I%26K%C2%85%C2%A5%24%C3%B6n%C3%AFk%C2%BE%11%00%C2%B3%C3%94%C3%A5%01%00%C2%84%02%00Pm%C2%97G%C2%95%C2%9EZ%5B%03%00%C2%88P%00%00%10%0A%00%C3%8CH%C2%97G%0B%C3%A4%C2%B8%C3%BB%C3%94%C3%96%C2%91%C2%B8%C3%B5Q%01%10J%06%C2%98J%0E%40%C2%97%07%00%00%C2%A1%00%00B%01%00%C2%84%02%00%C2%80P%00%00%C2%A1%00%00B%01%00%C2%84%02%00%C2%80P%00%00%C2%A1%00%00B%01%00%40(%00%C2%80P%00%00%C2%A1%00%00B%01%00%40(%00%C2%80P%00%00%C2%A1%00%00%20%14%00%40(%00%C2%80P%00%60%C2%86%C3%B9%C2%BF%00%03%00%1D%26S%C2%87%C2%A7Z%C3%94%C2%9B%00%00%00%00IEND%C2%AEB%60%C2%82";
var image26 = tab4.add("image", undefined, File.decode(image26_imgString), {name: "image26"});

var YouTubeButton = tab4.add("button", undefined, undefined, {name: "YouTubeButton"});
    YouTubeButton.text = "www.youtube.com/@Anti-StaticTV";

var statictext29 = tab4.add("statictext", undefined, undefined, {name: "statictext29", multiline: true});
    statictext29.text = "This work is provided \u0022as is,\u0022 without warranty of any kind, expressed or implied. In no event shall the author be held liable for any damages arising in any way from the use of this script.";
    statictext29.preferredSize.width = 280;

var image27_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00X%00%00%00%1F%08%06%00%00%00c%C3%88%0A%C3%A0%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%0C%0CIDATx%C3%9A%C3%ACZ%09TTW%12%C2%ADn%1A1%C2%82%C3%8A%C3%A6%C2%92%C3%91%11%1DQAQP%C2%8C%C3%8Ab%04%C2%97%C2%A8%C3%A7hD%C3%B1DQ%C2%A3%C2%A2%C2%93%C3%91%0C%C2%A0f%C3%82%C2%B8%C2%84%18%C3%B4%C2%A8%07%C3%97%C2%A8q%143%C3%AE%11u%C3%86%13%12%0C%C2%9C%00%11D%05%11%C3%B7%26%C3%AEk%C3%9CW%24%C3%8E%00n%C3%90%C3%BD%C2%A7%C2%AA%C3%BE%C3%82%C3%AFf%C3%ADFs%C3%8E8S%C3%A6%C3%B1%C3%9F%C3%BF%C3%AF%C2%BD%C3%BA%C3%BD%C3%AF%C2%ABw%C2%AB%C3%AA%C2%BDh%00E%10%04%7B%C2%8DF%C2%93%02%C3%BF%C2%97W.%3A%C3%BAS%C2%AF%5E%C2%BD4%C2%BC%04.Y%1E%07%C2%A0%C3%91%C2%82%C2%8DV%C2%83%17-h56%5C%07-%3D%C3%93%02N%02%C2%B7k%C3%B1J%C2%8F%C3%B1FR%23%C2%80Q%C2%A0%C2%8B%11%C2%AF%02M%18%18%C2%8DF%C2%BC5%C2%82%C3%81Hm%06%C2%AC%0BX7%C2%8A%7D%C3%B8%C2%99%C2%91%C3%BB%C3%91%3Fq0%5E%C3%A8Nxs%C3%80%C2%9D%173%C2%AF%1C!%02%C2%B7%C2%8B%C2%8F7%02i%03Z%1B-_ml%C3%8A%C2%8B%C2%96%40%C3%86%C2%ABF%02X%23%15i%05(%C2%85%C2%803%18%08D%03%5E%C2%A5%22%C3%95%C2%8D%06%23%C3%97E%C3%A0%C2%8D%12%C3%88%12%C3%90%0C%C2%BA%C2%A0%C3%A8%7B%13%C3%A4%C3%AC%C2%99s%C3%A5%00%C2%A7f%C3%BC%C2%A8%C2%80%C2%AA%C3%85%C2%A2%C2%93%C2%80%C3%95%C3%99%C3%A8%40%C2%A7%C3%931%C3%A8%C2%87s%C3%B2%40%C2%9F%C2%AF%C2%87%C2%8B%17.BIq%C2%89%C3%9A%C2%80%C3%81%C3%9E%C3%81%1E%3Axt%00%1F%1F%1F%C3%B0%0B%C3%B0C0%0DPf(c%60K%C2%B1%08eex_%0E%C2%B8%08%C2%B2A%C2%B4j%C2%B2%5C%C2%83h%C3%8D%C3%B2%0A%C2%A8L._%C2%B8%0C9%07s%C3%A0%C3%86%C2%8D%C2%9B%26%C3%8F%C3%9D%C3%9CZA%C3%A0%C2%BB%C2%81%C3%90%C3%8E%C2%A3%5D%C2%9D%00y%1D%C3%BA%15%C2%88%C3%92%C3%B7%C2%A51%C2%982%C2%B8%04%C2%AA-%16%1B%C2%9D-%C3%BC%C2%AC%C3%8F%C2%87%5D%3B%C3%BF%C3%81%C3%80%3Ey%C3%B2%04%C2%8A%C2%8A%C2%8A%C2%A0%0C%013%C3%A1%1A%C3%AC%C3%9B%C2%B0aCptr%C2%84%0E%1D%3A%40%C3%98%C3%980%C3%A8%C3%A2%C3%9D%05%0C%0Cl%19%C3%B77H%20%C3%93%3DQ%08%5B%C2%B5%C3%9A%C2%92%C2%AB%C2%B0%C3%A2%C3%82%C3%87%C2%BFBRb%12Z%C3%84Y(xT%C3%80%C3%BA%C3%9B%C2%BA%C2%BBs%C3%9B%C3%95%2BW%C3%A0%C3%A2%C3%85%C2%8B%C3%A0%C3%9A%C3%84%15%3Ayu%C2%82%C2%90%C3%90%10pvq%C2%B2%08%C2%84%C3%97%C2%A9_'W%C2%88c%C3%89J%C3%8B%C3%81%C2%B5%05%C2%9D%C2%AD-l%C3%9D%C2%B2%0DR~H%C2%86%5B7o%C3%81%C2%8B%17%2F%18%C3%84%C3%BE%C3%BD%C3%BBC%C3%B3%C3%A6%C3%8D%C3%81%C3%87%C3%9B%C2%9B%C3%87%C3%AA%C3%B3%C3%B3%C3%A1%C3%BE%C3%BD%C3%BBp%C3%A8%C3%90!%C3%B8%C3%A5%C3%9A%2Fp%C3%B7%C3%8E%5D%C2%B8%C2%82%3Fl%C3%88%C3%BBC%C3%A1%C2%83%0FF%C2%82%C2%9D%5D%3D%C3%99%C3%90A%C2%8B%7Fm%04%C2%9Br%10%C2%99%C2%875%C3%8A%5C%13%C2%B7%1BU%C3%A0%3E%2By%06%C3%B1k%C3%96%C3%83%25%C3%BCH%C3%9Fn%C3%9D%60%C3%A9%C2%92%25%C3%A0%C3%A1%C3%A1%C2%89%2B%C3%86%C2%81%C3%9BK%C2%8A%C2%8B%C3%A1%C3%82%C2%85%C3%B3%C2%B0%C3%B6ok%C3%A1%40%C3%96%01%C2%B8w%C3%B7%3E%7C%1C5%C2%B5%C3%96%20%C2%BCn%C3%BD%C2%8A%05%C3%AF%C3%8B%C3%8ET%C3%A8%C2%A0%C2%9E-%C2%81%5B%C2%8F%C3%81M%C3%B8f%3B%C3%8F*%01%1B%1A%1A%0A%C2%A3G%C2%8F%C3%86%25%C3%A3%06%C3%B5%C3%AB%C3%97%07GGG%1ELV%C3%BD%C3%BC%C3%B9sx%C3%BC%C3%B81%24''%C3%83%C2%BAu%C3%AB%C3%98%C3%8Ai%C3%96%03%02%03%60%C3%B6%C2%9C%C2%99%60%C2%8B%C3%BAJ%C3%8BJ%C2%B9%C2%B05%1Bd%5E60g%1B%C3%88%11%C2%AA%C2%ACX%C2%B6%C3%A0%0D%C3%AB6%C3%82%C2%BE%C3%8C%7D%3C%C2%A9%C3%8B%C2%97-c%C3%8B%C2%A2w%07%07%07s%7BVV%16%C2%BF%C2%9B%2Cm%7BB%02%C2%ACX%C2%B1%02%C3%BA%04%C3%B7%C2%81%C2%A9%C2%91Sj%05%40e%C3%BA%C3%A9%C2%B7%17%3Cz%C3%84%C3%AD%C2%AEM%C2%9A%C3%B0%C2%B7%5B%C2%AB_e%C3%81%C3%A5%C2%9CK%C2%B4%C2%A0%06%C3%97%C3%9D%C2%BD-%2C%5E%C2%BC%04%7C%7D%7D%C2%A1e%C3%8B%C2%96%3C%09j%C2%91%C2%81%26i%C3%9B%C2%B6-%7F%7Cdd%04Z%C3%B1U%C3%98%C2%9B%C2%BE%17Z%C2%B5r%C2%83I%7F%0Cg*%C3%A0%C3%A8B%2B9E%C2%A2%07v%C2%968%C3%93%02%C3%BE%C3%81%C3%82Q%05%C3%8D%3C%3E%C2%BCt%C3%BE%12%C3%A4d%C3%A7%C2%80_%C2%AF%5E%C3%B0%C3%89'3p%C2%89z)%C3%AF%C3%99%C2%BF%7F%C2%BFR'%C3%80%C2%A9m%C3%86%C2%8C%19%C2%90%C2%8B%C2%AB%C3%A8%C3%B0%C2%A1%C3%83%C3%90%C2%AF%7F%C3%9F%1A9%C2%939%C3%97L%C3%BF%C3%9E%C3%B4tX%C2%BF~%3D%C2%BC%C3%84%C3%95%C3%8A%11%C2%96%C2%9D%1D%C3%8C%C2%89%C2%89%C2%81%C3%AE%C3%9D%C2%BB%5B%C2%AC%C2%9Fq%C2%95%23%C2%8A%C3%89%1FM%12%C2%A9%01%C2%AD%C3%B7t%C3%BEiX%C2%BEt%C2%99%02%C3%AE%C3%86%0D%1B!%C2%B8o_puu%C3%A5h%C2%A2%3Aq%C3%80%C2%A5%C3%95%C2%BAuk%C3%A8%C2%8A%C3%8E.%C3%A7P%0E%3Cx%C3%B0%10%C2%AE%5D%C2%BB%C3%8A%C3%8E%C3%AF%C3%AD%C3%A6o%C2%B3%C2%95%C2%82%14%C2%9E)%C3%91%07%C2%91%04%C2%81%C2%AB12%C2%8F%C3%88%20'l%C3%9B%C2%81%C2%96s%156o%C3%9E%04%01%01%C2%81%C3%BC%C3%9Bd%09%0A%0A%C2%82%C2%89%13'%C3%B2%C2%BB%C3%94%C3%AFn%C2%85%0Ei%C3%93%C2%A6%C3%8D%C3%B0%C3%B2e)%C3%B4%C3%B4%C3%AFY%C3%ADo%C3%9D%C2%B1m%C2%A7%C2%89%C3%BE%2B%C2%97%2F%C3%83gs%C3%A6%40%C3%A1%C3%83%02prv%01%17gg%C3%88%C3%8B%C3%8B%C2%83%C2%9F%C2%91%02%1B%C2%BC%C3%B5%16%C2%BC%C3%93%C2%A3%C2%87E%C3%BA%C2%99%C3%B2%C2%94%0A%C2%87b%C2%A2%15%C3%87%C2%AF%C2%8DWha%C3%81%C2%82%C2%85%C2%B8%C3%8C%03%C3%99JjM%C3%AC8Q4%C2%86%26%C2%86t%C2%90.%C3%92%C2%A9%C2%84%7CT4Z1%C3%A4%23%C3%AE%076a%C2%91%C2%B1%C2%B4%C3%80a%20%C3%89%C2%89%C3%A3'%C2%A0k%C3%97%C2%AE%C3%BC%C3%B1%0D%1A4P%C3%B4%2FA%C2%9E%C2%9C%3F%7F%3E%17%C2%AA%C2%AB%C2%85%C3%BA%C3%92%18%1A%5B%C2%93%C2%A8%C3%B5%C2%93%C2%9C%3E%C2%A1%C2%87%C3%AB%C3%97%C2%AFC%C2%BF%C2%BE%C3%BDa%C3%91%C3%A28%C2%88%C3%B9b.%C2%8C%1B%3F%C2%9E%C3%B9y%C3%A3%C2%86%0D%16%C3%AB7%01%C3%98F%C2%8Ass%C3%91%C3%BCO%C2%9D%3A%C3%85%C3%8FF%C2%8D%1A%05C%C2%86%0C%C2%A9%40%09%C2%96%C2%80%3Cm%C3%BAt%C2%BE%3Fu%C3%B2%14%C3%A4%C3%A6%C3%A6%C2%8Aq%C2%B6V%02%C2%96%13%16-%C3%B1%01%C3%88%C3%BF%C3%94%C3%B2%C3%B4%C3%A9S%C3%B0%C3%85%C2%A5i%3E%C2%B9%C2%ABV%C2%ADb%C2%8A%C2%A0Bu%C2%B5P_%1ACck%12%C2%B5~%C3%B2%07%7F%C3%9F%C2%B2%C2%89%C2%9F%1F%3Eq%C2%84C%C3%8E%3F%20%C3%9D%C2%8D%1C9R%C2%8C%26%C2%AE%5E%C2%85'%C2%BF%16Z%C2%A4%C3%9F%C2%84%C2%839C%C3%83%C2%8F%C3%8F%C3%8C%C3%88T%C2%A2%C2%85%19%08%C2%8E%C2%83%C3%A4M%C3%B3%C3%B5zHLL%C2%84%C3%A2%C2%92%12%C2%BE%C3%B7%C3%86%08b%C3%82%C2%84%09%C2%95%C2%B6%C3%B9%C3%BB%C3%BB%C3%B3%0F%23%C2%90%23%23%22%C3%A0%C2%AB%C3%95%C2%AB%C3%99qd%C3%AE%C3%8D%04%3F%7F%3F%C3%90%C2%96I%C2%89%0A%C2%87%0CR%C3%82%C3%82%05%C3%BF3%C2%96%C3%B3%C2%B0%C2%BC%C3%AC%C3%8D%C2%85%22%C2%96%C3%8A%C3%AA%C3%95%C2%8D%C2%A9%C2%8E%C3%92Hh%C2%85%C2%BC%1F%12%02_%7F%C2%BD%1EF%C2%87%C2%85)%C3%ADNH%13%24%C3%A4%C2%98%C2%8B%C2%8AJ0%0Cu%C2%B6H%C2%BF%020%5B%13~0q%0EI%C2%9F%3E%7Dp%16%3D%14%00'%C2%86%C2%87%C3%83%C3%AD%C3%9B%C2%B7%C2%95%C3%B8%C2%97%1C%5B%3Er%C3%93%C2%88%11%C2%A1%10%15%15i%C3%92F%C2%91%04%C3%8D%C3%B8%C2%ACY%C2%B38%C2%9C%23%5D)))%C2%AC%C2%9B%C3%ADTJ%C2%BB%C3%A5LP%23%C2%81%C2%AB%C2%AC)C%C3%B9%0F%24%C3%AFm.%C2%83%06%0D%C2%82%C2%B4%C2%B44%C2%A5n.%C2%95%C2%8D%C2%A9J%C3%A4%C2%BE%C2%B4z%3D%C3%90j%C3%87!%C2%B8%C2%9D%3BwV%C3%9A%2F%C2%9C%3F%C2%AF%C3%94%C2%9B4mb%C2%B1~%15E%C2%88K%C3%B4%C3%BE%3D%C3%91%22z%C3%B6%C3%AC%C2%A9P%C3%83%C3%82E%0BA%C2%8F%20%C3%ABt6%C3%A8a%C3%A3a%5El%2C%C2%86F%C3%8F%C2%A0i%C2%B3f%18%C2%B6%2C%C3%A36G%C3%87%C3%86%C3%9C%C3%B6%C3%A9%C2%A7%C3%91P%5C%5C%C2%84%C2%B1%C2%AF%C2%9D%C3%B2%C2%92~%C3%BD%C3%BA%C2%89%C3%96%C2%86%C2%BA5L%0B%22%C2%B8%C3%84%C2%BD%12%C3%86%5C%C3%97%C2%82%C3%96%2C%C2%83r%C2%83%C3%AC%C3%AClt%C2%94%C2%A6V%C2%BAr%C3%A5%C3%8AJ%C3%AB%24%C3%94%C2%97%C3%86%C3%90%C3%98%C2%9A%C3%84%5C%C3%BF%23%0C%C3%8D222%60%C3%91%C2%82%05%18A%7D%C3%83e%C3%95%C2%97_r%C3%9B%C3%A8%C2%B01L%0F%C2%96%C3%A87%01X%C2%B6%24%C3%99%0A)%0A%C2%90%25--%C2%9D%C2%AF!!%C3%83a%C3%98%C2%B0%10%C2%98%C2%80%C3%9E%C3%BB%C3%BB%C3%AF%C2%93%60%22RD%06R%C2%8AhI%C2%83%C2%B9m%C3%AA%C3%94)%C3%9CF%C3%B1%C2%B2%2C%C2%9E%C3%92J%20%C3%9D%C2%A2%C3%95jT!x%C3%95%C3%B2%C3%9E%C2%A0%C3%B78%C3%86%5E%C2%B1%7C%C2%85%C3%89s%0FI%C2%9Fy%C2%9D%C2%84%C3%BA%C3%92%18%1Ak%C2%A9%C3%BE~%18)u%C3%AC%C3%98%11%C3%8E%C2%9D%3B%07%C3%AB%C3%A3%C3%A3%C2%B9P%16%C3%A7%1F%10%00%C3%A1%C2%93'Y%C2%AC%C3%9F%C2%94%C2%83%C2%AB%C3%A1%C2%B1b%C3%8CfHh%C2%B9%C3%93%2CR%C3%A9%C2%85%C2%B1%C2%A3%C2%BA%C2%8DB8%C2%B9%C2%8D%C3%AA%C3%A6%C2%8E%C3%87%1A%C3%B1%C3%AF%C3%AD%07%C3%A98%C2%B9%5B%C2%B6n%05%17%C3%94I%C2%94S%C2%9D%C2%AC%C3%85%04%C2%87%C3%BAR(Ec%C2%AD%C3%91%1F%C2%8D%C2%85%C3%82%C2%B1%07%0F%1F*V%C3%9E%0D%C3%A3%C3%BF6m%C3%9AX%C2%AC%C2%BF%C2%82%05%C2%AB%C3%B3%C3%BF%C3%8B*%C2%9E%C2%A1XX%C2%B4%C3%A4TN%1D)%0D%0E%0B%1B%0D%C3%9B%C2%B6mS%C3%9Arr%C2%B2%2B%C2%B4%C3%89rO%C3%A5%C2%88%C3%84w%C3%88%C2%A5%06%07%C3%94%C3%90%01%26%7F4%19%C2%9E%3D%7B%C3%8E%C3%91%C3%82%17s%C3%A7*%C3%8B%C2%9928*2-P%C3%9B%C3%A2%C2%B88%C3%AE%3B%C3%A6%C3%831%3C%C3%96%1A%C3%BD%C3%B5%C3%AB%C3%9B%C3%81p%C3%8CX%C3%83%C3%91%C3%A7P%192t(%3A%7C%07%C2%98%3Fo%C2%9E%C3%85%C3%BAM%2CX%0E%C3%B8iW%C2%8Cv%C3%8A%C3%88%C2%81%C3%89%12%11%11%C3%85%C2%99%C2%8E%5E%C2%9F%0F%C2%83%06%0F%C3%A6%C3%94%C3%B4%C3%8C%C2%993%C3%88%C2%BBNJ%5B%5E%C3%9E%C2%91%0Amr%C2%94q%16%C2%97%1C%09%C3%A96O0%C3%A49%C2%95%C3%AE*%C3%BC%C3%80%0E%C2%9E%C3%ADa%C3%86_%C2%A6%C3%83v%C3%8C*%C3%A31%C3%83%C3%9A%C2%8B%1C%C3%A9%C3%A5%C3%95%09'%C2%B6%1D~dC%C3%98%C2%B1%23%01%C3%9Fw%C2%96'%C2%B6%C2%81%7D%03%C2%98%12%C3%B1'%C3%A8%C3%AC%C3%ADU%C3%ABUR%C2%93~%C3%BD%C2%A9%C2%93u%C3%92%C2%AF%00L%1B%C3%A3%3A%C3%BCZZ%1E%C3%BB%C3%B7eAzz%C2%BA%C3%92i%C3%9C%C2%B8%C2%B1%40%C3%81%C2%93%3A%14%23%C2%8E%C2%9D%C2%8Ea%1C%C3%91%01%C3%91%C3%84w%C3%9F%25B%C2%89Y%C2%9B%C3%82%C3%A1%C2%A9%C2%A9%7C%C3%B5%C3%82T%C2%94%C2%80%C2%A5w%C2%89%7B%C3%87%C3%92f%C2%8F%20%02-%C2%88i%C2%9Ci%C2%AA%C2%89%C2%8E%C2%B5%C2%B3%C2%8F%17D%3AGB%C3%BE%C3%89%7C%C3%9EN%C2%A4%09%24%0A%23'L%7C%C3%A8%C3%A2%C3%A2%02%03%07%0F%04%C3%AFn%C3%9E%C3%90%C2%A2%C3%A5%C3%AF%C3%A8%00%C2%A1%C3%96%00%C2%BCn%C3%BD%C3%8AfO%C3%9E%C3%B1%3C%1Ch%07%C3%89%7B~%C2%80%C3%98%C2%B9%C2%B1%C2%AC%7C%C3%97%C2%AE%5DJ%C2%A0M%2F%C2%BAC%C2%A1%C2%98A%C2%8C%C2%A1%1A7n%C2%AC%C2%A4%C2%A9%05%05%05p%C3%A7%C3%8E%1DE%C2%A9%C2%BA-%15%C3%83%C2%A9%11%C3%83%C2%87%C2%B3eG%C3%8F%C2%8C%C2%86%C2%B1%1F%C2%8E%C3%A58%C2%BB%C2%B4%C3%B4%C2%A5%C2%B8%C3%B1S*ng%C3%B2%C3%BE%C2%B1%C2%B1%C3%B2%0D%1F%C3%85%17%14%15sVXb%16%C3%A4%C3%9Bc%0CK%1BK%C2%B5%5D%C2%B6U%C3%89%C3%AB%C3%90%C2%AF%00%C2%9C%7B%C3%B4%10%C3%8FLI%C3%89S%08%1D%16%C3%8A%C2%A0QJ%C2%98%C2%9A%C3%BA%234k%C3%96%C3%9C%C2%AA%1FL%C2%9C%1C%C2%84%C2%9E%C3%B9%C3%B8%C2%B1cl%C3%A9%C2%BB%13wC%C2%A3%C3%86%C2%8DDpKK%C2%B9%18%C3%A4%C2%BDbi%C3%B3%C2%BD%3A%C2%80%C3%BF%1BEqr%C3%A2%06%C2%B8%11%1A7j%04%1FGL%15s%C3%B3%C3%93%C2%A7!%3A%3A%C2%9A%C2%81%C2%B2%06%C3%9CHL%40%C3%B4R%C3%9A%3D!%7C%028%3B%3B%C2%89GIF%C2%A3%C2%B4%C3%91%C2%AE%02%C2%92v%C3%93%24%C2%8A%10%C3%9E%C2%A0%C2%839%C2%85%C2%83%C2%A3%C3%BE%3C%0D%C3%A3%C3%9B%C3%B1%10%C3%98%3B%10%06%0E%1A%08G%C3%B2%C2%8E%C3%82O%C3%A9%3FAR%C3%92%1E%C2%A6%C2%8B%C2%98%C2%98%C3%8F%C2%91%C3%B8%C3%9Dk%C2%A5%C2%94%C2%BC%C3%BA%C3%AC%C3%99%C2%B3%C3%A1%C3%9Bo%13%C3%99%3A%03%C3%9F%C3%AD%0DC%C2%87%0D%C3%A5%C3%BA%C2%B1%23%C3%87%60%C3%A3%C2%86M%26%C3%A7x2%C2%A0%22%07%C2%AB%5C%C3%9D%1Bt%00%C3%8Aq%C2%93%5Bk7!nI%C2%9Cp2%C3%BF%C2%B8%C2%90%C2%9C%C2%9A%22%200%C3%BC%1C%09_%08%0E%0E%16%C2%B6n%C3%9D*%14%17%15%09U%09%C2%B5Q%C2%9F%01%03%06%C3%B0%18%1A%C3%AB%C3%A1%C3%A9!%C3%ACI%C3%99%C3%83%3AW%C2%AFY%25%60%3C%C2%A9%C2%8E%C3%93%C3%9E%C3%B8%C2%A21%C2%B7%C2%95%C2%96%C2%BFo%093g%C3%BE%C2%95%0F%C3%B9n%C3%9E%C2%BA%0D%C3%AB%C3%96%C2%ACeK%26%2B%C2%A6%C3%8DvOOO%C3%9E%5B%C2%A8%C3%AC%C3%88%C3%A8%C3%80%C2%81%03p%1Eswy_%C2%82%2Cw%C3%9A%C3%B4(h%C3%97%C3%8E%C2%9D%C3%8F%C2%BBb%3E%C3%BB%1Cn%5C%C2%BFa%C2%95%05%C3%881%2F%C2%89%C3%BA4C%C2%AEWv%C3%BF%C2%AA%C3%9E%C2%A1%C2%BE%C2%AF%C2%93%05%C3%8B%C2%A55Z%C3%B2WkV%C2%A3%C3%95%C2%9D%40KN%16f%C3%8D%C2%9E)%C2%A0%C2%93%C3%A26%04Z%40p%C2%B1Ok%C3%81%C3%87%C3%87%C2%87%0B%C3%95%C3%A9%19%C2%B5Q%1F%C3%AA%1B5-JHJIb%1D%09%3B%13%C2%84%C3%B6%C3%AD%C3%9B%C3%97%C3%89%12H%C2%82%C2%82%C2%82%C2%B8%C3%A0G%C3%B33u%C2%9D%C2%AEto%C2%AD~y%C2%BC%5C%C3%8C%C2%9F%C3%89%C3%AF%C2%B1%C2%A2T%04X%069ni%C2%9Cp%5C%7F%5C%C3%88%C3%8E%3D(l%C3%9F%C2%B9%C2%9DA%C3%B3%C3%AD%C3%AE%2B%60%C3%82P%C2%A1%3F%3D%C2%A3%C2%B6%C2%A8%C3%A9Q%C3%9Cw%C3%BF%C3%81%2C%1EK%C2%B4PWpe%C2%80%C3%A9%23%C3%8D%C2%81%C2%94%3F%C2%BE.%C3%A0%C2%AA%C3%B5%C2%A8%C2%81T%C2%BFS0MA%C2%AD%C2%A7%08%C2%B5%10%5D%04%C3%B6%0E%C3%80%08%20%1C%C2%9A6u%C2%85%7F%C3%BF%C2%AB%08%1E%17%16r%C2%84%60(3%C2%98%C3%BC%7F%11%14%C2%B0Sp%C3%AE%C3%A2%C3%A2%0C%0D1%12y%C2%84%C2%B9%C3%BC%C3%AE%7F%C3%AE%C2%86%C3%8C%C2%8C%7DV%C3%93%C2%82y%1A%2F%2F%C3%93%C3%98%C3%98X%C2%93%25Km%C3%B2%C3%96g%5D%C2%84%C2%8E%C2%A1%C3%94%C3%BA%C3%95%C3%AF%24%C2%AA%C2%B0%C3%A6%1D%C2%9A%C2%9A%C3%BC5%C3%A5%C3%A1n%C2%984%C3%B4%C3%A8%C3%B9%0E%C3%B4%C3%B2%C3%B3%C3%A3%C2%9D~%07%7B%7Bi%3FW%C3%BE%40%C3%B1%23)%C3%8B%C2%A3%C3%A3%C2%95%C3%83%C2%B9%C2%87%C3%A1(F%0B%C2%B7%C2%91%C3%83)Ay%25%5E%18%C3%B5%C3%8B%07%C2%9DtT%C2%A4%3E%C3%B4%7C%15%00%C2%AB%C3%B9W%C3%96%C2%AF%C3%96k%C3%AD%3Bj%3C%0B*%C3%82%C3%AC%C3%A6%C3%8C%C3%A93%0C%C3%96%C3%BE%C2%AC%03%7C%C3%92Q%C3%95%11%C2%92%C2%B8%C3%AB_%04%C2%85%C2%8F%0B_%19%C2%B0%C3%A6N%C3%87%C3%BCD%C3%B9U8%20%19Ts%C3%BDj%C2%BDuzG%C2%8B%16-%06%C3%BE%2F%C2%85N%C2%BFe%C3%B9%C2%8F%00%03%00%C2%86%C2%8Et%C2%88%15ai%C2%A4%00%00%00%00IEND%C2%AEB%60%C2%82";
var image27 = tab4.add("image", undefined, File.decode(image27_imgString), {name: "image27"});

var statictext30 = tab4.add("statictext", undefined, undefined, {name: "statictext30", multiline: true});
    statictext30.text = "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.";
    statictext30.preferredSize.width = 280;

var statictext31 = tab4.add("statictext", undefined, undefined, {name: "statictext31", multiline: true});
    statictext31.text = "Anti-Static name and logo ©2023 James Zelasko. All rights reserved.";
    statictext31.preferredSize.width = 280;

palette.layout.layout(true);
palette.layout.resize();
palette.onResizing = palette.onResize = function () { this.layout.resize(); }


















































/// --------------------------------------------------------------------------------------------------------------------
/// CONNECTIONS
/// --------------------------------------------------------------------------------------------------------------------




// RandomizeInPoints --------------------------------------------------------------------
RandomizeInPointsSlider.value = 10;
RandomizeInPointsTextbox.text = RandomizeInPointsSlider.value;
RandomizeInPointsSlider.onChanging = function() {
  RandomizeInPointsTextbox.text = Math.round(RandomizeInPointsSlider.value);
}
RandomizeInPointsTextbox.onChange = function() {
  RandomizeInPointsSlider.value = Number(Math.round(RandomizeInPointsTextbox.text));
}
RandomizeInPointsButton.onClick = function() {
  RandomizeInPoints(Number(Math.round(RandomizeInPointsTextbox.text)), RandomizeInPointsRelativeCheck.value);
}

// StaggerInPoints --------------------------------------------------------------------
StaggerInPointsSlider.value = 2;
StaggerInPointsTextbox.text = StaggerInPointsSlider.value;
StaggerInPointsSlider.onChanging = function() {
  StaggerInPointsTextbox.text = Math.round(StaggerInPointsSlider.value);
}
StaggerInPointsTextbox.onChange = function() {
  StaggerInPointsSlider.value = Number(Math.round(StaggerInPointsTextbox.text));
}
StaggerInPointsButton.onClick = function() {
  StaggerInPoints(Number(StaggerInPointsTextbox.text));
}

// FadeInOut --------------------------------------------------------------------
FadeInOutSlider.value = 10;
FadeInOutTextbox.text = FadeInOutSlider.value;
FadeInOutSlider.onChanging = function() {
  FadeInOutTextbox.text = Math.round(FadeInOutSlider.value);
}
FadeInOutTextbox.onChange = function() {
  FadeInOutSlider.value = Number(Math.round(FadeInOutTextbox.text));
}
FadeInOutButton.onClick = function() {
  FadeInOut(Number(Math.round(FadeInOutTextbox.text)));
}

// DuplicateLayer --------------------------------------------------------------------
DuplicateLayersSlider.value = 9;
DuplicateLayersTextbox.text = DuplicateLayersSlider.value;
DuplicateLayersSlider.onChanging = function() {
  DuplicateLayersTextbox.text = Math.round(DuplicateLayersSlider.value);
}
DuplicateLayersTextbox.onChange = function() {
  DuplicateLayersSlider.value = Number(Math.round(DuplicateLayersTextbox.text));
}
DuplicateLayersButton.onClick = function() {
  DuplicateLayer(Number(Math.round(DuplicateLayersTextbox.text)));
}

// RandomizeLayerOrder --------------------------------------------------------------------
RandomizeLayerOrderButton.onClick = function() {
  RandomizeLayerOrder();
}

// ProximityReOrder --------------------------------------------------------------------
ProximityReOrderTargetButton.onClick = function() {
  ProximityCreateTargetPoint();
}
ProximityReOrderButton.onClick = function() {
  ProximityReOrder();
}

// ZebraSelect --------------------------------------------------------------------
ZebraSelectButton.onClick = function() {
  ZebraSelect(ZebraSelectTextbox.text);
}

// LabelMate --------------------------------------------------------------------
LabelMateButton.onClick = function(){
  LabelMate(LabelMateFromDropdown.selection, LabelMateToDropdown.selection, LabelMateRepositionCheck.value);
}

// LoopKeyframes --------------------------------------------------------------------
LoopKeyframesButton.onClick = function() {
  LoopKeyframes(LoopKeyframesDropdown.selection.text);
}

// LoopCompositions --------------------------------------------------------------------
LoopCompositionButton.onClick = function() {
  LoopCompositions();
}


//RandomizePositions --------------------------------------------------------------------
GetCompSizeButton.onClick = function() {
  RandomizePositionsXTextbox.text = app.project.activeItem.width;
  RandomizePositionsYTextbox.text = app.project.activeItem.height;
}
RandomizePositionsButton.onClick = function() {
  RandomizePositions(RandomizePositionsXTextbox.text, RandomizePositionsYTextbox.text, RandomizePositionsZTextbox.text);
}

// CenterPositions --------------------------------------------------------------------
CenterPositionsButton.onClick = function() {
  var x = CenterPositionsXCheck.value;
  var y = CenterPositionsYCheck.value;
  var z = CenterPositionsZCheck.value;
  CenterPositions(x, y, z);
}


// StaggerPositions --------------------------------------------------------------------
StaggerPositionsXCheck.onClick = function() {
  if (!StaggerPositionsXCheck.value) {
    StaggerPositionsXSlider.enabled = false;
    StaggerPositionsXTextbox.enabled = false;
  } else {
    StaggerPositionsXSlider.enabled = true;
    StaggerPositionsXTextbox.enabled = true;
  }
}
StaggerPositionsYCheck.onClick = function() {
  if (!StaggerPositionsYCheck.value) {
    StaggerPositionsYSlider.enabled = false;
    StaggerPositionsYTextbox.enabled = false;
  } else {
    StaggerPositionsYSlider.enabled = true;
    StaggerPositionsYTextbox.enabled = true;
  }
}
StaggerPositionsZCheck.onClick = function() {
  if (!StaggerPositionsZCheck.value) {
    StaggerPositionsZSlider.enabled = false;
    StaggerPositionsZTextbox.enabled = false;
  } else {
    StaggerPositionsZSlider.enabled = true;
    StaggerPositionsZTextbox.enabled = true;
  }
}
StaggerPositionsXSlider.maxvalue = 500;
StaggerPositionsXSlider.value = 100;
StaggerPositionsXTextbox.text = StaggerPositionsXSlider.value;
StaggerPositionsXSlider.onChanging = function() {
  StaggerPositionsXTextbox.text = Math.round(StaggerPositionsXSlider.value);
}
StaggerPositionsXTextbox.onChange = function() {
  StaggerPositionsXSlider.value = Number(Math.round(StaggerPositionsXTextbox.text));
}
StaggerPositionsYSlider.maxvalue = 500;
StaggerPositionsYSlider.value = 100;
StaggerPositionsYTextbox.text = StaggerPositionsYSlider.value;
StaggerPositionsYSlider.onChanging = function() {
  StaggerPositionsYTextbox.text = Math.round(StaggerPositionsYSlider.value);
}
StaggerPositionsYTextbox.onChange = function() {
  StaggerPositionsYSlider.value = Number(Math.round(StaggerPositionsYTextbox.text));
}
StaggerPositionsZSlider.maxvalue = 500;
StaggerPositionsZSlider.value = 100;
StaggerPositionsZTextbox.text = StaggerPositionsZSlider.value;
StaggerPositionsZSlider.onChanging = function() {
  StaggerPositionsZTextbox.text = Math.round(StaggerPositionsZSlider.value);
}
StaggerPositionsZTextbox.onChange = function() {
  StaggerPositionsZSlider.value = Number(Math.round(StaggerPositionsZTextbox.text));
}
StaggerPositionsButton.onClick = function() {
  var xp, yp, zp = null;
  if (StaggerPositionsXTextbox.enabled) {
    xp = Number(StaggerPositionsXTextbox.text);
  }
  if (StaggerPositionsYTextbox.enabled) {
    yp = Number(StaggerPositionsYTextbox.text);
  }
  if (StaggerPositionsZTextbox.enabled) {
    zp = Number(StaggerPositionsZTextbox.text);
  }
  StaggerPositions(xp, yp, zp);
}


//RadialPosition --------------------------------------------------------------------
RadialPositionSlider.maxvalue = 1000;
RadialPositionSlider.value = 500;
RadialPositionRadiusTextbox.text = RadialPositionSlider.value;
RadialPositionSlider.onChanging = function() {
  RadialPositionRadiusTextbox.text = Math.round(RadialPositionSlider.value);
}
RadialPositionRadiusTextbox.onChange = function() {
  RadialPositionSlider.value = Number(Math.round(RadialPositionRadiusTextbox.text));
}
RadialPositionDuplicateCheck.onClick = function() {
  if (!RadialPositionDuplicateCheck.value) {
    RadialPositionDuplicateTextbox.enabled = false;
  } else {
    RadialPositionDuplicateTextbox.enabled = true;
  }
}
RadialPositionButton.onClick = function() {
  RadialPosition(Number(RadialPositionRadiusTextbox.text), Number(RadialPositionDuplicateTextbox.text), RadialPositionDuplicateCheck.value, RadialPositionRotateCheck.value);
}

//GridPositions --------------------------------------------------------------------
GridPositionsDuplicateCheck.onClick = function() {
  if (GridPositionsDuplicateCheck.value) {
    calculateGridDuplicates();
  } else {
    GridPositionsDuplicateCheck.text = "Duplicate (x)";
  }
}
GridPositions3DCheck.onClick = function() {
  if (GridPositions3DCheck.value) {
    if (UnifyGridCountCheck.value) {
      GridStepGroup.enabled = false;
    } else {
      GridStepGroup.enabled = true;
    }
    if (UnifyGapCheck.value) {
      GapStepGroup.enabled = false;
    } else {
      GapStepGroup.enabled = true;
    }
  } else {
    GridStepGroup.enabled = false;
    GapStepGroup.enabled = false;
  }
  calculateGridDuplicates();
}
UnifyGridCountCheck.onClick = function() {
  if (!UnifyGridCountCheck.value) {
    GridRowGroup.enabled = true;
    if (GridPositions3DCheck.value) {
      GridStepGroup.enabled = true;
    }
  } else {
    GridCountRowTextbox.text = GridCountColTextbox.text;
    GridCountStepTextbox.text = GridCountColTextbox.text;
    GridRowGroup.enabled = false;
    GridStepGroup.enabled = false;
  }
  calculateGridDuplicates();
}
UnifyGapCheck.onClick = function() {
  if (!UnifyGapCheck.value) {
    GapRowGroup.enabled = true;
    if (GridPositions3DCheck.value) {
      GapStepGroup.enabled = true;
    }
  } else {
    GapRowTextbox.text = GapColTextbox.text;
    GapStepTextbox.text = GapColTextbox.text;
    GapRowGroup.enabled = false;
    GapStepGroup.enabled = false;
  }
}
GridCountColTextbox.onChange = function() {
  if (UnifyGridCountCheck.value) {
    GridCountRowTextbox.text = GridCountColTextbox.text;
    GridCountStepTextbox.text = GridCountColTextbox.text;
  }
  calculateGridDuplicates();
}
GridCountRowTextbox.onChange = function() {
  calculateGridDuplicates();
}
GridCountStepTextbox.onChange = function() {
  calculateGridDuplicates();
}
GapColTextbox.onChange = function() {
  if (UnifyGapCheck.value) {
    GapRowTextbox.text = GapColTextbox.text;
    GapStepTextbox.text = GapColTextbox.text;
  }
}
GridPositionsButton.onClick = function() {
  GridPositions(GridCountRowTextbox.text, GridCountColTextbox.text, GridCountStepTextbox.text, UnifyGridCountCheck.value, GapRowTextbox.text, GapColTextbox.text, GapStepTextbox.text, UnifyGapCheck.value, GridPositionsDuplicateCheck.value, GridPositions3DCheck.value);
}

//Randomizer --------------------------------------------------------------------
RandomizerScaleCheck.onClick = function() {
  if (!RandomizerScaleCheck.value) {
    RandomScaleGroup.enabled = false;
  } else {
    RandomScaleGroup.enabled = true;
  }
}
RandomizerRotationCheck.onClick = function() {
  if (!RandomizerRotationCheck.value) {
    RandomRotationGroup.enabled = false;
  } else {
    RandomRotationGroup.enabled = true;
  }
}
RandomizerOpacityCheck.onClick = function() {
  if (!RandomizerOpacityCheck.value) {
    RandomOpacityGroup.enabled = false;
  } else {
    RandomOpacityGroup.enabled = true;
  }
}
RandomizerButton.onClick = function() {
  Randomizer();
}


// WiggleManager --------------------------------------------------------------------
WiggleManagerButton.onClick = function() {
  WiggleManager();
}

// PropertyManager --------------------------------------------------------------------
PropertyManagerButton.onClick = function(){
  PropertyManager();
}

// PaletteManager --------------------------------------------------------------------
PaletteManagerButton.onClick = function() {
  PaletteManager();
}

// Vignette --------------------------------------------------------------------
VignetteButton.onClick = function() {
  Vignette();
}

// GlitchMatte --------------------------------------------------------------------
GlitchMatteButton.onClick = function() {
  GlitchMatte();
}

// Stringer --------------------------------------------------------------------
StringExistingPointsCheckbox.onClick = function(){
  if (!StringExistingPointsCheckbox.value) {
    StringerPointsGroup.enabled = true;
  }else{
    StringerPointsGroup.enabled = false;
  }
}
StringerButton.onClick = function() {
  Stringer(StringerNumberTextbox.text, StringerBezierCheck.value, StringerClosedCheck.value, StringExistingPointsCheckbox.value);
}


// GridMove --------------------------------------------------------------------
GridMoveButton.onClick = function() {
  GridMove(GridMoveDirection2V.value, GridMoveDirection2H.value, GridMoveDirection4.value, GridMoveDirection8.value, GridMoveDistanceTextbox.text, GridMoveMultiplierTextbox.text, GridMoveAllowStatisCheck.value);
}


// TextGreebler --------------------------------------------------------------------
TextGreeblerUpperButton.onClick = function() {
  TextGreeblerInputTextbox.text += "<<UC>>";
}
TextGreeblerLowerButton.onClick = function() {
  TextGreeblerInputTextbox.text += "<<LC>>";
}
TextGreeblerNumberButton.onClick = function() {
  TextGreeblerInputTextbox.text += "<<N>>";
}
TextGreeblerButton.onClick = function() {
  TextGreebler(TextGreeblerInputTextbox.text, Number(TextGreeblerInstancesTextbox.text));
}


// Effector --------------------------------------------------------------------
EffectorButton.onClick = function() {
  Effector(EffectorPositionCheck.value, EffectorScaleCheck.value, EffectorRotationCheck.value, EffectorOpacityCheck.value);
}





YouTubeButton.onClick = function(){
  openURL('https://www.youtube.com/@Anti-StaticTV');
}
//channel/UChNVUAJiUNNHDhrnN_jJSbA














// ------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------



function RandomizeInPoints(num, rel) {
  app.beginUndoGroup("AS : Randomize In-Points");
  var myComp = app.project.activeItem;
  var frames = num;
  var selectedLayers = myComp.selectedLayers;
  var t = myComp.time;
  for (var k = 0; k < selectedLayers.length; k++) {
    var r = Math.round(Math.random() * frames);
    var layer = selectedLayers[k];
    if(rel){
      t = layer.inPoint;
    }
    var f = (myComp.frameDuration) * r;
    var cst = layer.startTime;
    var diff = cst - layer.inPoint;
    layer.startTime = ((t + f) + diff);
  }
  app.endUndoGroup();
}


function StaggerInPoints(num) {
  app.beginUndoGroup("AS : Stagger In-Points");
  var frames = num;
  var selectedLayers = app.project.activeItem.selectedLayers;
  var t = app.project.activeItem.time;
  for (var k = 0; k < selectedLayers.length; k++) {
    var layer = selectedLayers[k];
    var f = (num * k) * app.project.activeItem.frameDuration;
    var cst = layer.startTime;
    var diff = cst - layer.inPoint;
    layer.startTime = (t + f) + diff;
  }
  app.endUndoGroup();
}


function FadeInOut(num) {
  app.beginUndoGroup("AS : Fade in/Fade out");
  var selectedArray = app.project.activeItem.selectedLayers;
  var totalItems = selectedArray.length;
  if (totalItems == 0) {
    alert("Select some layers.");
  } else {
    var fadeTime = num;
    var fr = app.project.activeItem.frameRate;
    var f = fadeTime / fr;
    var errorArray = "";
    var sNum = 0;
    for (var x = 0; x < totalItems; x++) {
      var item = selectedArray[x];
      var d = item.outPoint - item.inPoint;
      if (d > f * 2) {
        var myProperty = item.property("Transform").property("Opacity");
        if (myProperty.numKeys > 0) {
          sNum++;
          errorArray += "Layer " + item.index + " already has opacity keyframes.\n";
        } else {
          myProperty.setValueAtTime(item.startTime, 0);
          myProperty.setValueAtTime(item.startTime + f, 100);
          var endTime = item.outPoint;
          myProperty.setValueAtTime(endTime, 0);
          myProperty.setValueAtTime(endTime - f, 100);
        }
      } else {
        sNum++;
        errorArray += "Layer " + item.index + " is not long enough.\n";
      }
    }
  }
  if (sNum > 0) {
    var s = totalItems - sNum;
    var eStr = s + "/" + totalItems + " successful:\n" + errorArray;
    alert(eStr);
  }
  app.endUndoGroup();
}


function LoopKeyframes(loopType) {
  app.beginUndoGroup("AS : Loop Keyframes");
  var selectedArray = app.project.activeItem.selectedLayers;
  var myProps = app.project.activeItem.selectedProperties;
  if (myProps.length > 0) {
    for (var i = 0; i < myProps.length; i++) {
      if (myProps[i].canVaryOverTime) {
        var k = myProps[i];
        k.expression = 'loopOut("' + loopType + '");';
      }
    }
  } else {
    alert("Select some keyframes");
  }
  app.endUndoGroup();
}


function LoopCompositions() {
  app.beginUndoGroup("AS : Loop Compositions");
  var selectedArray = app.project.activeItem.selectedLayers;
  var totalItems = selectedArray.length;
  if (totalItems == 0) {
    alert("Select some precomps in your timeline.");
  } else {
    for (var x = 0; x < totalItems; x++) {
      var item = selectedArray[x];
      if (item.source instanceof CompItem) {
        if (item.timeRemapEnabled) {
          alert("One or more compositions already has time-remapping enabled.");
        } else {
          var t = item.source.duration;
          var fr = app.project.activeItem.frameRate;
          var f = Math.round(t * fr) - 1;
          var nt = Number(f / fr);
          item.timeRemapEnabled = true;
          var myProperty = item.property("Time Remap");
          myProperty.setValueAtTime(nt, nt);
          myProperty.removeKey(3);
          myProperty.expression = ("loopOut();");
        }
      } else {
        alert("Select some precomps in your timeline.");
      }
    }
  }
  app.endUndoGroup();
}


function DuplicateLayer(num) {
  app.beginUndoGroup("AS : Duplicate Layer");
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select layers to duplicate.");
  } else {
    var prevLayer = selectedLayers[selectedLayers.length-1];
    for (var j = 0; j < num; j++) {
      for (var k = 0; k < selectedLayers.length; k++) {
        var l = selectedLayers[k].duplicate();
        l.moveAfter(prevLayer);
        prevLayer = l;
      }
    }
  }
  app.endUndoGroup();
}


function RandomizeLayerOrder() {
  app.beginUndoGroup("AS : Randomize Layer Order");
  var myComp = app.project.activeItem;
  var selectedLayers = myComp.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select some layers.");
    return false;
  }
  var prevLayer = selectedLayers[0];
  var newLayers = shuffle(selectedLayers);

  for (var k = 0; k < newLayers.length; k++) {
    var l = newLayers[k];
    if(l!=prevLayer){
      l.moveAfter(prevLayer);
    }
    l.selected=false;
    prevLayer=l;
  }
  app.endUndoGroup();
}

function ProximityCreateTargetPoint(){
  var found = false;
  for (var e = 1; e < app.project.activeItem.layers.length; e++) {
    if (app.project.activeItem.layers[e].name == "KT : Target Null") {
      found = true;
      alert("Re-order Target already exists!");
      break;
    }
  }
  if (!found) {
    var targetNull = app.project.activeItem.layers.addNull();
    targetNull.name = "AS : Proximity Re-order Target";
  }
}

function ProximityReOrder() {
  app.beginUndoGroup("AS : Reorder Based On Proximity");
  var myComp = app.project.activeItem;
  var selectedLayers = myComp.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select some layers.");
    return false;
  }
  var layersMoved = 1;
  var firstIndex = selectedLayers[0].index;

  var centerPos = [myComp.width / 2, myComp.height / 2];
  for (var e = 1; e < myComp.layers.length; e++) {
    if (myComp.layers[e].name == "AS : Proximity Re-order Target") {
      centerPos = myComp.layers[e].property("Position").value;
      break;
    }
  }
  for (var k = 1; k <= selectedLayers.length; k++) {
    var layer = selectedLayers[k-1];
    layer.selected=false;
    for (var g = 1; g <= layersMoved; g++) {
      var layerToCheck = myComp.layers[g];
      var lx = myComp.layers[layersMoved];
      var isCloser = getDistance(centerPos, layer.property("Position").value) < getDistance(centerPos, layerToCheck.property("Position").value);

      if (isCloser) {
        if(layer!=layerToCheck){
          layer.moveBefore(layerToCheck);
        }
        layersMoved++;
        break;
      } else {
        if (g == layersMoved) {
          if(layer!=lx){
            layer.moveAfter(lx);
          }
          layersMoved++;
          break;
        }
      }
    }
  }
  app.endUndoGroup();
}

function LabelMate(label1, label2, move) {
  app.beginUndoGroup("AS : Lable Mate");
  var activeComp = app.project.activeItem;
  var selectedLayers = activeComp.selectedLayers;
  var selectedProps = activeComp.selectedProperties;
  if (selectedLayers.length == 0) {
    alert("Select some layers with two distinct label colors.");
    return false;
  }

  var label1Array = [];
  var label2Array = [];
  var errorArray = "";
  for (var i = 0; i < selectedLayers.length; i++) {
    var l = selectedLayers[i];
    if (l.label == label1.index) {
      label1Array.push(l);
    } else if (l.label == label2.index) {
      label2Array.push(l);
    }
  }
  if (label1Array.length == 0 || label2Array.length == 0 || label1Array.length != label2Array.length) {
    errorArray += "Labels must have the same count.\n";
    errorArray += "You selected "+String(label1Array.length)+ " of "+String(label1)+"\n";
    errorArray += "You selected "+String(label2Array.length)+ " of "+String(label2)+"\n";
    alert(errorArray);
    return false;
  } else {
    for (var k = 0; k < label1Array.length; k++) {
      var l1 = label1Array[k];
      var l2 = label2Array[k];
      l1.parent = l2;
      if (move) {
        l1.property("position").setValue([0, 0]);
      }
    }
  }
  app.endUndoGroup();
}

function ZebraSelect(num) {
  num++;
  app.beginUndoGroup("AS : Zebra Deselect");
  var selectedLayers = app.project.activeItem.selectedLayers;
  var count = 1;
  if (selectedLayers.length == 0) {
    selectAllLayers();
  }
  selectedLayers = app.project.activeItem.selectedLayers;
  for (var k = 0; k < selectedLayers.length; k++) {
    var l = selectedLayers[k];
    if (count == 1) {
      l.selected = true;
    } else {
      l.selected = false;
    }

    if (count == num) {
      count = 1;
    } else {
      count++;
    }
  }
  app.endUndoGroup();
}


function RandomizePositions(x, y, z) {
  app.beginUndoGroup("AS : Randomize Positions");
  var comp = app.project.activeItem;
  var selectedLayers = comp.selectedLayers;
  for (var k = 0; k < selectedLayers.length; k++) {
    var currentLayer = selectedLayers[k];
    var currentPos = [comp.width, comp.height];
    if (currentLayer.property("Position").dimensionsSeparated){
      if(currentLayer.threeDLayer){
        currentPos = [currentLayer.property("Transform").property("X Position").value, currentLayer.property("Transform").property("Y Position").value, currentLayer.property("Transform").property("Z Position").value];
      }else{
        currentPos = [currentLayer.property("Transform").property("X Position").value, currentLayer.property("Transform").property("Y Position").value];
      }
    }else{
      currentPos = currentLayer.property("Position").value;
    }
    nX = currentPos[0];
    nY = currentPos[1];
    nZ = currentPos[2];

    if (x != null) {
      var xt = x / 2;
      nX += (Math.random() * (xt * 2)) - xt;
    }
    if (y != null) {
      var yt = y / 2;
      nY += (Math.random() * (yt * 2)) - yt;
    }
    if (z != null) {
      var zt = z / 2;
      nZ += (Math.random() * (zt * 2)) - zt;
    }

    if (currentLayer.property("Position").dimensionsSeparated){
      if (currentLayer.property("Transform").property("X Position").numKeys == 0) {
        currentLayer.property("Transform").property("X Position").setValue(nX);
      }else{
        currentLayer.property("Transform").property("X Position").setValueAtTime(comp.time, nX);
      }
      if (currentLayer.property("Transform").property("Y Position").numKeys == 0) {
        currentLayer.property("Transform").property("Y Position").setValue(nY);
      }else{
        currentLayer.property("Transform").property("Y Position").setValueAtTime(comp.time, nY);
      }
      if(currentLayer.threeDLayer){
        if (currentLayer.property("Transform").property("Z Position").numKeys == 0) {
          currentLayer.property("Transform").property("Z Position").setValue(nZ);
        }else{
          currentLayer.property("Transform").property("Z Position").setValueAtTime(comp.time, nZ);
        }
      }
    }else{
      if (currentLayer.property("Position").numKeys == 0) {
        currentLayer.property("Position").setValue([nX, nY, nZ]);
      } else {
        currentLayer.property("Position").setValueAtTime(comp.time, [nX, nY, nZ]);
      }
    }
  }
  app.endUndoGroup();
}


function StaggerPositions(x, y, z) {
  app.beginUndoGroup("AS : Stagger Positions");
  var comp = app.project.activeItem;
  var beginPos = [0, 0, 0];
  var selectedLayers = app.project.activeItem.selectedLayers;
  for (var k = 0; k < selectedLayers.length; k++) {
    var currentLayer = selectedLayers[k];
    var currentPos = [comp.width, comp.height];
    if (currentLayer.property("Position").dimensionsSeparated){
      if(currentLayer.threeDLayer){
        currentPos = [currentLayer.property("Transform").property("X Position").value, currentLayer.property("Transform").property("Y Position").value, currentLayer.property("Transform").property("Z Position").value];
      }else{
        currentPos = [currentLayer.property("Transform").property("X Position").value, currentLayer.property("Transform").property("Y Position").value];
      }
    }else{
      currentPos = currentLayer.property("Position").value;
    }
    var nX = currentPos[0];
    var nY = currentPos[1];
    var nZ = currentPos[2];
    if (k == 0) {
      beginPos = currentPos;
    } else {
      if (x != null) {
        var xt = x * k;
        nX = beginPos[0] + xt;
      }
      if (y != null) {
        var yt = y * k;
        nY = beginPos[1] + yt;
      }
      if (z != null) {
        var zt = z * k;
        nZ = beginPos[2] + zt;
      }
    }
    if (currentLayer.property("Position").dimensionsSeparated){
      if (currentLayer.property("Transform").property("X Position").numKeys == 0) {
        currentLayer.property("Transform").property("X Position").setValue(nX);
      }else{
        currentLayer.property("Transform").property("X Position").setValueAtTime(comp.time, nX);
      }
      if (currentLayer.property("Transform").property("Y Position").numKeys == 0) {
        currentLayer.property("Transform").property("Y Position").setValue(nY);
      }else{
        currentLayer.property("Transform").property("Y Position").setValueAtTime(comp.time, nY);
      }
      if (currentLayer.threeDLayer){
        if (currentLayer.property("Transform").property("Z Position").numKeys == 0) {
          currentLayer.property("Transform").property("Z Position").setValue(nZ);
        }else{
          currentLayer.property("Transform").property("Z Position").setValueAtTime(comp.time, nZ);
        }
      }
    }else{
      if (currentLayer.property("Position").numKeys == 0) {
        currentLayer.property("Position").setValue([nX, nY, nZ]);
      } else {
        currentLayer.property("Position").setValueAtTime(app.project.activeItem.time, [nX, nY, nZ]);
      }
    }
  }
  app.endUndoGroup();
}


function CenterPositions(x, y, z) {
  app.beginUndoGroup("AS : Center Positions");
  var comp = app.project.activeItem;
  var selectedLayers = app.project.activeItem.selectedLayers;
  for (var k = 0; k < selectedLayers.length; k++) {
    var currentLayer = selectedLayers[k];
    var currentPos = [comp.width, comp.height];
    if (currentLayer.property("Position").dimensionsSeparated){
      if(currentLayer.threeDLayer){
        currentPos = [currentLayer.property("Transform").property("X Position").value, currentLayer.property("Transform").property("Y Position").value, currentLayer.property("Transform").property("Z Position").value];
      }else{
        currentPos = [currentLayer.property("Transform").property("X Position").value, currentLayer.property("Transform").property("Y Position").value];
      }
    }else{
      currentPos = currentLayer.property("Position").value;
    }
    var nX = currentPos[0];
    var nY = currentPos[1];
    var nZ = currentPos[2];
    if (x) {
      nX = app.project.activeItem.width / 2;
    }
    if (y) {
      nY = app.project.activeItem.height / 2;
    }
    if (z) {
      nZ = 0;
    }
    if (currentLayer.property("Position").dimensionsSeparated){
      if (currentLayer.property("Transform").property("X Position").numKeys == 0) {
        currentLayer.property("Transform").property("X Position").setValue(nX);
      }else{
        currentLayer.property("Transform").property("X Position").setValueAtTime(comp.time, nX);
      }
      if (currentLayer.property("Transform").property("Y Position").numKeys == 0) {
        currentLayer.property("Transform").property("Y Position").setValue(nY);
      }else{
        currentLayer.property("Transform").property("Y Position").setValueAtTime(comp.time, nY);
      }
      if (currentLayer.threeDLayer){
        if (currentLayer.property("Transform").property("Z Position").numKeys == 0) {
          currentLayer.property("Transform").property("Z Position").setValue(nZ);
        }else{
          currentLayer.property("Transform").property("Z Position").setValueAtTime(comp.time, nZ);
        }
      }
    }else{
      if (currentLayer.property("Position").numKeys == 0) {
        currentLayer.property("Position").setValue([nX, nY, nZ]);
      } else {
        currentLayer.property("Position").setValueAtTime(app.project.activeItem.time, [nX, nY, nZ]);
      }
    }
  }
  app.endUndoGroup();
}


function RadialPosition(rad, num, duplicate, rotate) {
  app.beginUndoGroup("AS :  Radial Position");
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    if (duplicate) {
      alert("Select one layer to duplicate.");
    } else {
      alert("Select some layers to position.");
    }
    return false;
  } else if (selectedLayers.length > 1) {
    if (duplicate) {
      alert("Select one layer to duplicate.");
      return false;
    }
  }

  var prevLayer;
  var totalSlices = 0;

  if (duplicate) {
    totalSlices = num;
    prevLayer = selectedLayers[0];
  } else {
    totalSlices = selectedLayers.length;
  }
  var sliceAngle = 360 / totalSlices;

  for (var k = 0; k < totalSlices; k++) {
    var a = (degreesToRadians((sliceAngle * k) - 90));
    var x_offset = Math.cos(a);
    var y_offset = Math.sin(a);
    var cen = [app.project.activeItem.width / 2, app.project.activeItem.height / 2];
    var pos = (cen + [x_offset, y_offset] * rad);
    var l = null;
    if (duplicate) {
      if (k == 0) {
        l = selectedLayers[0];
      } else {
        l = selectedLayers[0].duplicate();
        l.moveAfter(prevLayer);
        prevLayer = l;
      }
    } else {
      l = selectedLayers[k];
    }
    if (l.property("Transform").property("Position").dimensionsSeparated) {
      if (l.property("Transform").property("X Position").numKeys == 0) {
        l.property("Transform").property("X Position").setValue(pos[0]);
      } else {
        l.property("Transform").property("X Position").setValueAtTime(app.project.activeItem.time, pos[0]);
      }
      if (l.property("Transform").property("Y Position").numKeys == 0) {
        l.property("Transform").property("Y Position").setValue(pos[1]);
      } else {
        l.property("Transform").property("Y Position").setValueAtTime(app.project.activeItem.time, pos[1]);
      }
    } else {
      if (l.property("Position").numKeys == 0) {
        l.property("Position").setValue(pos);
      } else {
        l.property("Position").setValueAtTime(app.project.activeItem.time, pos);
      }
    }

    if (rotate) {
      if (l.property("Rotation").numKeys == 0) {
        l.property("Rotation").setValue(sliceAngle * k);
      } else {
        l.property("Rotation").setValueAtTime(app.project.activeItem.time, sliceAngle * k);
      }
    }
  }
  app.endUndoGroup();
}


function GridPositions(r, c, s, check1, rg, cg, sg, check2, duplicate, grid3D) {
  app.beginUndoGroup("AS : Grid Positions");
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    if (duplicate) {
      alert("Select one layer to duplicate.");
    } else {
      alert("Select some layers to position.");
    }
    return false;
  }else if (selectedLayers.length > 1) {
    if (duplicate) {
      alert("Select one layer to duplicate.");
      return false;
    }
  }

  var rows = c;
  var cols = r;
  var steps = s;
  if (check1) {
    cols = rows;
  }
  if (!grid3D) {
    steps = 1;
  }
  var rowGap = cg;
  var colGap = rg;
  var stepGap = sg;
  if (check2) {
    colGap = rowGap;
  }
  var selectedLayers = app.project.activeItem.selectedLayers;
  var currentLayerNum = 0;
  var prevLayer;
  if (duplicate) {
    if (selectedLayers.length != 1) {
      alert("Select one layer to duplicate.");
      return false;
    } else {
      prevLayer = selectedLayers[0];
    }
  }
  if(duplicate && steps*cols*rows>300){
    if (!confirm("You are about to create "+steps*cols*rows+" duplicates.\nAre you sure you want to continue?", true, "Warning")){
      return false;
    }
  }
  for (var z = 1; z <= steps; z++) {
    for (var y = 1; y <= cols; y++) {
      for (var x = 1; x <= rows; x++) {
        var currentLayer = null;
        if (duplicate) {
          if (selectedLayers.length == 1) {
            if (z == 1 && y == 1 && x == 1) {
              currentLayer = selectedLayers[0];
            } else {
              currentLayer = selectedLayers[0].duplicate();
              currentLayer.moveAfter(prevLayer);
              prevLayer = currentLayer;
            }
          }
        } else {
          currentLayer = selectedLayers[currentLayerNum];
        }
        if (currentLayer != null) {
          if(grid3D && !currentLayer.threeDLayer){
            currentLayer.threeDLayer=true;
          }
          var curPosition = [((x - 1) * rowGap), ((y - 1) * colGap), ((z - 1) * stepGap)];
          var centerX = app.project.activeItem.width / 2;
          var centerY = app.project.activeItem.height / 2;
          var centerZ = 0;
          var centerPosition = [centerX, centerY, centerZ];
          var offsetPosition = [(rowGap * (rows - 1)) / 2, (colGap * (cols - 1)) / 2, (stepGap * (steps - 1)) / 2];

          if(currentLayer.property("Transform").property("Position").dimensionsSeparated){

            if (currentLayer.property("Transform").property("X Position").numKeys == 0) {
              currentLayer.property("Transform").property("X Position").setValue(curPosition[0] + centerPosition[0] - offsetPosition[0]);
            }else{
              currentLayer.property("Transform").property("X Position").setValueAtTime(app.project.activeItem.time, curPosition[0] + centerPosition[0] - offsetPosition[0]);
            }
            if (currentLayer.property("Transform").property("Y Position").numKeys == 0) {
              currentLayer.property("Transform").property("Y Position").setValue(curPosition[1] + centerPosition[1] - offsetPosition[1]);
            }else{
              currentLayer.property("Transform").property("Y Position").setValueAtTime(app.project.activeItem.time, curPosition[1] + centerPosition[1] - offsetPosition[1]);
            }
            if(currentLayer.threeDLayer){
              if (currentLayer.property("Transform").property("Z Position").numKeys == 0) {
                currentLayer.property("Transform").property("Z Position").setValue(curPosition[2] + centerPosition[2] - offsetPosition[2]);
              }else{
                currentLayer.property("Transform").property("Z Position").setValueAtTime(app.project.activeItem.time, curPosition[2] + centerPosition[2] - offsetPosition[2]);
              }
            }
          }else{
            if (currentLayer.property("Transform").property("Position").numKeys == 0) {
              currentLayer.property("Transform").property("Position").setValue(curPosition + centerPosition - offsetPosition);
            } else {
              currentLayer.property("Transform").property("Position").setValueAtTime(app.project.activeItem.time, curPosition + centerPosition - offsetPosition);
            }
          }
          currentLayerNum++;
        } else {
          break;
        }
      }
    }
  }
  app.endUndoGroup();
}


function GridMove(r1, r2, r3, r4, am, mult, check) {
  app.beginUndoGroup("AS : Grid Move");
  var selectedLayers = app.project.activeItem.selectedLayers;
  var slices = 2;
  if (r3) {
    slices = 4;
  }
  if (r4) {
    slices = 8;
  }
  var selectedLayers = app.project.activeItem.selectedLayers;
  var initAm = am;
  for (var k = 0; k < selectedLayers.length; k++) {
    var currentLayer = selectedLayers[k];
    var ran = Math.floor(Math.random() * slices);
    var ran2 = Math.round(Math.random() * mult);

    if (r1) {
      ran = Math.floor(Math.random() * 2); //0,1
    } else if (r2) {
      ran = (Math.floor(Math.random() * 2) + 2); //2,3
    }

    if (!check) {
      while (ran2 <= 0) {
        ran2 = Math.round(Math.random() * mult);
      }
    }
    var addAmount = [0, 0, 0];
    var am2 = am * ran2;

    if (ran == 0) {
      addAmount = [0, am2, 0];
    } else if (ran == 1) {
      addAmount = [0, am2 * -1, 0];
    } else if (ran == 2) {
      addAmount = [am2 * -1, 0, 0];
    } else if (ran == 3) {
      addAmount = [am2, 0, 0];
    } else if (ran == 4) {
      addAmount = [am2, am2, 0];
    } else if (ran == 5) {
      addAmount = [am2, am2 * -1, 0];
    } else if (ran == 6) {
      addAmount = [am2 * -1, am2, 0];
    } else if (ran == 7) {
      addAmount = [am2 * -1, am2 * -1, 0];
    }
    if(currentLayer.property("Transform").property("Position").dimensionsSeparated){
      var posX = currentLayer.property("Transform").property("X Position").value + addAmount[0];
      var posY = currentLayer.property("Transform").property("Y Position").value + addAmount[1];
      if (currentLayer.property("Transform").property("X Position").numKeys == 0) {
        currentLayer.property("Transform").property("X Position").setValue(posX);
      } else {
        currentLayer.property("Transform").property("X Position").setValueAtTime(app.project.activeItem.time, posX);
      }
      if (currentLayer.property("Transform").property("Y Position").numKeys == 0) {
        currentLayer.property("Transform").property("Y Position").setValue(posY);
      } else {
        currentLayer.property("Transform").property("Y Position").setValueAtTime(app.project.activeItem.time, posY);
      }
    }else{
      var pos = currentLayer.property("Position").value + addAmount;
      if (currentLayer.property("Position").numKeys == 0) {
        currentLayer.property("Position").setValue(pos);
      } else {
        currentLayer.property("Position").setValueAtTime(app.project.activeItem.time, pos);
      }
    }
  }
  app.endUndoGroup();
}

function calculateGridDuplicates() {
  var total = Number(GridCountColTextbox.text) * Number(GridCountRowTextbox.text)
  if (GridPositions3DCheck.value) {
    total *= Number(GridCountStepTextbox.text);
  }
  GridPositionsDuplicateCheck.text = "Duplicate (" + total + ")";
}

function Randomizer() {
  app.beginUndoGroup("AS : Randomizer");
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select at least one layer.");
    return false;
  } else {
    for (var k = 0; k < selectedLayers.length; k++) {
      if (RandomizerScaleCheck.value) {
        var r1 = (Math.random() * (Number(RandomizerScaleMaxTextbox.text) - Number(RandomizerScaleMinTextbox.text))) + Number(RandomizerScaleMinTextbox.text);
        var r2 = (Math.random() * (Number(RandomizerScaleMaxTextbox.text) - Number(RandomizerScaleMinTextbox.text))) + Number(RandomizerScaleMinTextbox.text);
        var nX = r1;
        var nY = nX;
        if (!RandomizerScaleLinkCheck.value) {
          nY = r2;
        }
        if (selectedLayers[k].property("Scale").numKeys == 0) {
          selectedLayers[k].property("Scale").setValue([nX, nY]);
        } else {
          selectedLayers[k].property("Scale").setValueAtTime(app.project.activeItem.time, [nX, nY]);
        }
      }

      if (RandomizerRotationCheck.value) {
        var r1 = (Math.random() * (Number(RandomizerRotationMaxTextbox.text) - Number(RandomizerRotationMinTextbox.text))) + Number(RandomizerRotationMinTextbox.text);
        if (selectedLayers[k].property("Rotation").numKeys == 0) {
          selectedLayers[k].property("Rotation").setValue(r1);
        } else {
          selectedLayers[k].property("Rotation").setValueAtTime(app.project.activeItem.time, r1);
        }
      }

      if (RandomizerOpacityCheck.value) {
        var max = Number(RandomizerOpacityMaxTextbox.text);
        var min = Number(RandomizerOpacityMinTextbox.text);
        var r1 = (Math.random() * (max - min));
        var v1 = r1+min;
        if (selectedLayers[k].property("Opacity").numKeys == 0) {
          selectedLayers[k].property("Opacity").setValue(v1);
        } else {
          selectedLayers[k].property("Opacity").setValueAtTime(app.project.activeItem.time, v1);
        }
      }
    }
  }
  app.endUndoGroup();
}


function WiggleManager() {
  app.beginUndoGroup("AS : Wiggle Manager");
  var activeComp = app.project.activeItem;
  var selectedLayers = activeComp.selectedLayers;
  var selectedProps = activeComp.selectedProperties;
  var propPaths = [];

  if (selectedLayers.length == 0) {
    alert("Select some layers.");
    return false;
  }
  if (selectedProps.length == 0) {
    alert("Select some properties.");
    return false;
  }

  for (var i = 0; i < selectedProps.length; i++) {
    var p = selectedProps[i];
    var supported=false;
    if (p.propertyType == PropertyType.PROPERTY) {
        if (p.propertyValueType == PropertyValueType.OneD || p.propertyValueType == PropertyValueType.TwoD || p.propertyValueType == PropertyValueType.TwoD_SPATIAL || p.propertyValueType == PropertyValueType.ThreeD || p.propertyValueType == PropertyValueType.ThreeD_SPATIAL || p.propertyValueType == PropertyValueType.COLOR) {
        supported=true;
      }
      var levelArray = [];
      levelArray.push(p);
      var t = p;
      while (t.parentProperty) {
        t = t.parentProperty;
        if (t.parentProperty != null) {
          levelArray.push(t);
        }
      }
      propPaths.push(levelArray);
    }
  }
  if(!supported){
    alert("Only one, two, or three dimensional numbers and colors are supported.");
    return false;
  }

  for (var l = 0; l < selectedLayers.length; l++) {
    var layer = selectedLayers[l];
    if (l == 0) {
      var controller = activeComp.layers.addNull();
      var controllerNum = checkName("AS : Wiggle Manager_")
      controller.name = "AS : Wiggle Manager_" + controllerNum;
    }
    for (var i = 0; i < propPaths.length; i++) {
      var currentProp = propPaths[i][0];
      if (currentProp.propertyType == PropertyType.PROPERTY) {
        if (l == 0) {
          var pslide1 = controller.effect.addProperty("ADBE Slider Control");
          pslide1.name = currentProp.name+" Wiggles Per Second";
          pslide1.property(1).setValue(2);
          var pslide2 = controller.effect.addProperty("ADBE Slider Control");
          pslide2.name = currentProp.name+" Wiggle Amount";
          if(currentProp.propertyValueType == PropertyValueType.COLOR){
            pslide2.property(1).setValue(1);
          }else{
            pslide2.property(1).setValue(20);
          }
          if(currentProp.propertyValueType == PropertyValueType.TwoD || currentProp.propertyValueType == PropertyValueType.TwoD_SPATIAL || currentProp.propertyValueType == PropertyValueType.ThreeD || currentProp.propertyValueType == PropertyValueType.ThreeD_SPATIAL){
            var pcheck1 = controller.effect.addProperty("ADBE Checkbox Control");
            pcheck1.name = "Link "+currentProp.name;
            if(currentProp.name.indexOf("Position") != (-1)){
              pcheck1.property(1).setValue(false);
            }else{
              pcheck1.property(1).setValue(true);
            }
          }
        }
        var expStr = "// AS : Wiggle Manager\n";
        if (currentProp.propertyValueType == PropertyValueType.OneD || p.propertyValueType == PropertyValueType.COLOR) {
          expStr += "var c = thisComp.layer('" + controller.name + "');\n"
          expStr += 'wiggle(c.effect("'+currentProp.name+' Wiggles Per Second")("Slider"), c.effect("'+currentProp.name+' Wiggle Amount")("Slider"));';
        } else if (currentProp.propertyValueType == PropertyValueType.TwoD || currentProp.propertyValueType == PropertyValueType.TwoD_SPATIAL || currentProp.propertyValueType == PropertyValueType.ThreeD || currentProp.propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
          expStr += "var c = thisComp.layer('" + controller.name + "');\n"
          expStr += 'var w = wiggle(c.effect("'+currentProp.name+' Wiggles Per Second")("Slider"), c.effect("'+currentProp.name+' Wiggle Amount")("Slider"));\n';
          expStr += "if(c.effect('Link " + currentProp.name + "')('Checkbox').value){\n"
          expStr += "\t[w[0], w[0]];\n";
          expStr += "}else{\n";
          expStr += "\t[w[0], w[1]];\n";
          expStr += "}";
        }
      }
      assignDeepProperties(layer, propPaths[i], currentProp, expStr);
    }
  }
  app.endUndoGroup();
}



function PaletteManager() {
  app.beginUndoGroup("AS : Palette Manager");
  var activeComp = app.project.activeItem;
  var selectedLayers = activeComp.selectedLayers;
  var selectedProps = activeComp.selectedProperties;
  var propPaths = [];

  if (selectedLayers.length == 0) {
    alert("Select some layers.");
    return false;
  }
  if (selectedProps.length == 0) {
    alert("Select a color property.");
    return false;
  }

  for (var i = 0; i < selectedProps.length; i++) {
    var p = selectedProps[i];
    var supported = false;
    if (p.propertyType == PropertyType.PROPERTY) {
      if (p.propertyValueType == PropertyValueType.COLOR) {
        supported = true;
      }
      var levelArray = [];
      levelArray.push(p);
      var t = p;
      while (t.parentProperty) {
        t = t.parentProperty;
        if (t.parentProperty != null) {
          levelArray.push(t);
        }
      }
      propPaths.push(levelArray);
    }
  }

  if (!supported) {
    alert("Select a color property");
    return false;
  } else {
    var controlNull = app.project.activeItem.layers.addNull();
    var controllerNum = checkName("AS : Palette Manager_")
    controlNull.name = "AS : Palette Manager_" + controllerNum;

    var countSlider = controlNull.Effects.addProperty("ADBE Slider Control");
    countSlider.name = "Color Count";
    countSlider.property(1).max = 10;
    countSlider.property(1).setValue(3);

    var randomCheck = controlNull.Effects.addProperty("ADBE Checkbox Control");
    randomCheck.name = "Randomize";
    randomCheck.property(1).setValue(true);

    var seedSlider = controlNull.Effects.addProperty("ADBE Slider Control");
    seedSlider.name = "Random Seed";
    seedSlider.property(1).setValue(1);

    var countSlider = app.project.activeItem.layers.add

    var str = '// AS : Palette Manager\n';
    str += 'var con = thisComp.layer("' + controlNull.name + '");\nseedRandom(con.effect("Random Seed")("Slider"), true);\n';
    var str2 = "var options = [";

    for (var x = 0; x < 10; x++) {
      var colorControl = controlNull.Effects.addProperty("ADBE Color Control");
      var num = x + 1;
      colorControl.name = "Color " + num;
      colorControl.property(1).setValue([10, 10, 10, 255] / 255);
      str += 'var c' + num + ' = con.effect("Color ' + num + '")("Color").value;\r';
      str2 += 'c' + num;
      if (x < 9) {
        str2 += ",";
      }
    }
    var expStr = str + str2 + '];\nvar n = con.effect("Color Count")("Slider");';
    expStr += '\nvar rc = con.effect("Randomize")("Checkbox");';
    expStr += '\nvar r = Math.floor(random(n));';
    expStr += '\nif(!rc.value){';
    expStr += '\n\tr=index%n;';
    expStr += '\n}\noptions[r];';



    for (var l = 0; l < selectedLayers.length; l++) {
      var layer = selectedLayers[l];
      for (var i = 0; i < propPaths.length; i++) {
        var currentProp = propPaths[i][0];
        assignDeepProperties(layer, propPaths[i], currentProp, expStr);
      }
    }
  }
  app.endUndoGroup();
}


function Vignette() {
  app.beginUndoGroup("AS : Vignette");
  var activeComp = app.project.activeItem;
  var new_solid = activeComp.layers.addSolid([0, 0, 0], "AS : VIGNETTE", activeComp.width, activeComp.height, activeComp.pixelAspect, activeComp.duration);
  new_solid.label = 5;
  new_solid.moveToBeginning(); //adjLayer.locked=true;

  ratio = .5523;
  h = new_solid.width / 2;
  v = new_solid.height / 2;
  th = h * ratio;
  tv = v * ratio;
  newMask = new_solid.Masks.addProperty("ADBE Mask Atom");
  newMask.maskMode = MaskMode.SUBTRACT;
  newMask.property("maskFeather").setValue([475, 475]);
  newMask.property("maskExpansion").setValue(50);
  myProperty = newMask.property("ADBE Mask Shape");
  myShape = myProperty.value;
  myShape.vertices = [
    [h, 0],
    [0, v],
    [h, 2 * v],
    [2 * h, v]
  ];
  myShape.inTangents = [
    [th, 0],
    [0, -tv],
    [-th, 0],
    [0, tv]
  ];
  myShape.outTangents = [
    [-th, 0],
    [0, tv],
    [th, 0],
    [0, -tv]
  ];
  myShape.closed = true;
  myProperty.setValue(myShape);
  app.endUndoGroup();
}

function GlitchMatte() {
  app.beginUndoGroup("AS : Glitch Matte");
  var comp = app.project.activeItem;
  var adjust = comp.layers.addSolid([0, 0, 0], "AS : GLITCH", comp.width, comp.height, comp.pixelAspect, 1);
  adjust.startTime = comp.time;
  adjust.adjustmentLayer = true;
  adjust.label = 16; // dark green
  var trans = adjust.effect.addProperty("Transform");
  trans.property("Uniform Scale").setValue(0);
  //trans.property("ADBE Geometry2-0004").setValue(120);
  trans.property("Scale Width").setValue(120);
  //alert(trans.property("ADBE Geometry2-0004"));

  var n = comp.layers.addSolid([0, 0, 0], "AS : GLITCH MATTE", comp.width, comp.height, comp.pixelAspect, 1);
  n.startTime = comp.time;
  n.label = 16; // dark green
  var slide1 = n.effect.addProperty("ADBE Slider Control");
  slide1.name = "Fractal Height";
  slide1.property("Slider").setValue(50);
  var slide2 = n.effect.addProperty("ADBE Slider Control");
  slide2.name = "Fractal Width";
  slide2.property("Slider").setValue(400);
  var slide3 = n.effect.addProperty("ADBE Slider Control");
  slide3.name = "Evolution Speed";
  slide3.property("Slider").setValue(1000);

  var noise = n.effect.addProperty("Fractal Noise");
  noise.property("Fractal Type").setValue(17);
  noise.property("Noise Type").setValue(1);
  noise.property("Uniform Scaling").setValue(0);
  noise.property("Contrast").setValue(1200);
  noise.property("Brightness").setValue(-400);
  noise.property("Evolution").expression = 'time*effect("Evolution Speed")("Slider")';
  noise.property("Scale Height").expression = 'effect("Fractal Height")("Slider")';
  noise.property("Scale Width").expression = 'effect("Fractal Width")("Slider")';
  adjust.trackMatteType = TrackMatteType.LUMA;
  app.endUndoGroup();
}

function Stringer(am, tanCheck, closedCheck, existingCheck) {
  app.beginUndoGroup("AS : Stringer");
  var myComp = app.project.activeItem;
  var selectedLayers = myComp.selectedLayers;
  var nameArray = [];
  var lastIndex = 0;
  var lastLayer = 0;

  if(selectedLayers.length>0){
    for(var l=0; l<selectedLayers.length; l++){
      nameArray.push(selectedLayers[l].name);
      if(selectedLayers[l].threeDLayer){
        alert("Make sure all layers are 2D.");
        return false;
      }
    }
    if(checkForUniqueNames(nameArray)){
      alert("Make sure all layers have unique names.");
      return false;
    }
  }

  numberOfPoints = am;
  if(existingCheck){
    if(selectedLayers.length==0){
      alert('Select some layers or uncheck "Existing Points".');
    }else{
      numberOfPoints = selectedLayers.length;
    }
  }
  if (myComp) {
    var stringShape = myComp.layers.addShape();
    stringShape.label = 1;
    var controllerNum = checkName("AS : Stringer_")
    stringShape.name = "AS : Stringer_" + controllerNum;
    stringShape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var shapeGroup = stringShape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group");
    shapeGroup.addProperty("ADBE Vector Shape - Group");
    var cpg1f = shapeGroup.addProperty("ADBE Vector Graphic - Stroke");
    cpg1f.property("ADBE Vector Stroke Color").setValue([1, 1, 1, 1]);
    stringShape.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Materials Group").remove();
    stringShape.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue([(myComp.width / -2), (myComp.height / -2)]);
    var closedControl = stringShape.Effects.addProperty("ADBE Checkbox Control");
    closedControl.name = "Closed";
    if (closedCheck) {
      closedControl.property(1).setValue(true);
    } else {
      closedControl.property(1).setValue(false);
    }

    var express = "// AS : Stringer\n";
    var pointsString = "";
    var inTanString = "";
    var outTanString = "";

    for (x = 0; x < numberOfPoints; x++) {
      var nullPoint = null;
      if(existingCheck){
        nullPoint = selectedLayers[x];
      }else{
        nullPoint = app.project.activeItem.layers.addNull();
        nullPoint.name = "String Point " + controllerNum + "-" + x;
      }
      if(lastIndex < nullPoint.index){
        lastIndex = nullPoint.index;
        lastLayer = nullPoint;
      }

      express += "nullPoint" + x + " = thisComp.layer('" + nullPoint.name + "');\n"
      pointsString += "nullPoint" + x + ".toWorld([0,0])";

      if (tanCheck) {
        var inTan = app.project.activeItem.layers.addNull();
        inTan.name = "in tangent " + controllerNum + "-" + x;
        //alert(nullPoint.transform.position);
        inTan.property("Position").setValue(nullPoint.property("Position").value);
        inTan.parent = nullPoint;
        inTan.label = 1;
        inTan.scale.setValue([40, 40]);
        var lockControl = inTan.Effects.addProperty("ADBE Checkbox Control");
        lockControl.name = "Lock tangents";
        lockControl.property(1).setValue(true);
        express += "inTan" + x + " = thisComp.layer('in tangent " + controllerNum + "-" + x + "');\n"
        inTanString += "inTan" + x + ".toWorld([0,0])-nullPoint" + x + ".toWorld([0,0])"


        var outTan = app.project.activeItem.layers.addNull();
        outTan.name = "out tangent " + controllerNum + "-" + x;
        outTan.property("Position").setValue(nullPoint.property("Position").value);
        var oStr = "";
        oStr += "var i = thisComp.layer('in tangent "+ controllerNum + "-" + x+"');\n";
        oStr += "var p = thisComp.layer('"+ nullPoint.name +"');\n";
        oStr += "if(i.effect('Lock tangents')('Checkbox').value){\n\t";
        oStr += "if(thisLayer.hasParent){\n\t\t";
        oStr += "if(thisLayer.parent==p){\n\t\t\t";
		    oStr += "-i.transform.position;\n\t\t";
        oStr += "}\n\t";
        oStr += "}else{\n\t\t";
        oStr += "var pp = p.toWorld([0,0,0]);\n\t\t";
        oStr += "var ip = i.toWorld([0,0,0]);\n\t\t";
        oStr += "pp+(pp-ip);\n\t";
        oStr += "}\n";
        oStr += "}else{\n\t";
        oStr += "value;\n";
        oStr += "}";
        outTan.property("Position").expression = oStr;
        outTan.parent = nullPoint;
        outTan.label = 1;
        outTan.scale.setValue([40, 40]);
        outTan.enabled=false;
        express += "outTan" + x + " = thisComp.layer('out tangent " + controllerNum + "-" + x + "');\n"
        outTanString += "outTan" + x + ".toWorld([0,0])-nullPoint" + x + ".toWorld([0,0])"

      }
      if (x != (numberOfPoints - 1)) {
        pointsString += ","
        if (tanCheck) {
          inTanString += ","
          outTanString += ","
        }
      }
    }
    express += "createPath(points=[" + pointsString + "], inTangents=[" + inTanString + "], outTangents=[" + outTanString + "], is_closed=effect('Closed')('Checkbox'));"
    stringShape.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property("ADBE Vector Shape - Group").path.expression = express;
    stringShape.moveAfter(lastLayer);
  }
  app.endUndoGroup();
}


function TextGreebler(t, num) {
  app.beginUndoGroup("AS : Text Greebler");
  if (t.length == 0) {
    alert("Enter some text or add some parameters.");
    return false;
  }

  var controlNull = app.project.activeItem.layers.addNull();
  var controllerNum = checkName("AS : Text Greebler_")
  controlNull.name = "AS : Text Greebler_" + controllerNum;
  var posterizeSlider = controlNull.Effects.addProperty("ADBE Slider Control");
  posterizeSlider.name = "Posterize Time (times per second)";
  posterizeSlider.property(1).setValue(5);
/*
  var randomizeCheckbox = controlNull.Effects.addProperty("ADBE Checkbox Control");
  randomizeCheckbox.name = "Static Text";
  randomizeCheckbox.value = true;
*/
  var seedSlider = controlNull.Effects.addProperty("ADBE Slider Control");
  seedSlider.name = "Random Seed";
  seedSlider.property(1).setValue(1);

  var output = "'" + t + "'";

  var output2 = output.replace(/<<UC>>/g, "'+ucLetterArray[Math.floor(random(ucLetterArray.length))]+'");
  var output3 = output2.replace(/<<LC>>/g, "'+lcLetterArray[Math.floor(random(lcLetterArray.length))]+'");
  var output4 = output3.replace(/<<N>>/g, "'+Math.floor(random(10))+'");

  var ucLetterArrayString = 'var ucLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];\r';
  var lcLetterArrayString = 'var lcLetterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];\r';

  //'var r = Math.floor(random()*letterArray.length);\rvar r2= Math.floor(random()*letterArray.length);\rvar str = letterArray[r]+letterArray[r2]+Math.floor(random(100));\rstr'

  for (var x = 0; x < num; x++) {
    var myTextLayer = app.project.activeItem.layers.addText("AS : Greeble " + (x + 1));
    myTextLayer.text.sourceText.expression = '// AS : Greebler\n'+ucLetterArrayString + lcLetterArrayString + 'posterizeTime(thisComp.layer("AS : Text Greebler_' + controllerNum + '").effect("Posterize Time (times per second)")("Slider"));\rseedRandom(thisComp.layer("AS : Text Greebler_' + controllerNum + '").effect("Random Seed")("Slider"), false);\r' + output4;
  }
  app.endUndoGroup();
}


function Effector(pCheck, sCheck, rCheck, oCheck) {
  app.beginUndoGroup("AS : Effector");
  var activeComp = app.project.activeItem;
  var selectedLayers = app.project.activeItem.selectedLayers;
  if (selectedLayers.length == 0) {
    alert("Select some layers to effect.");
    return false;
  }

  var controllerNum = checkName("AS : Effector_");
  var controller = app.project.activeItem.layers.addNull();
  controller.name = "AS : Effector_" + controllerNum;
  controller.transform.scale.expression = "[100,100]";
  controller.label = 1;
  var controllerPreview = activeComp.layers.addSolid([1, 0, 0], "AS : Effector_" + controllerNum + " preview", 1000, 1000, activeComp.pixelAspect, activeComp.duration);
  controllerPreview.label = 1;
  controllerPreview.parent = controller;
  controllerPreview.moveToBeginning();
  controllerPreview.blendingMode = BlendingMode.SCREEN;
  controllerPreview.guideLayer = true;

  controller.moveToBeginning();

  var sizeSlide = controller.effect.addProperty("ADBE Slider Control");
  sizeSlide.name = "Effector Size";
  sizeSlide.property(1).setValue(500);

  var falloffSlide = controller.effect.addProperty("ADBE Slider Control");
  falloffSlide.name = "Effector Falloff";
  falloffSlide.property(1).max = 100;
  falloffSlide.property(1).min = 0;
  falloffSlide.property(1).setValue(50);

  if (pCheck) {
    var posSlider = controller.effect.addProperty("ADBE Slider Control");
    posSlider.name = "Effected Position %";
    posSlider.property("Slider").setValue(100);
  }

  if (sCheck) {
    var scaSlider = controller.effect.addProperty("ADBE Slider Control");
    scaSlider.name = "Effected Scale";
    scaSlider.property("Slider").setValue(200);
  }

  if (rCheck) {
    var rotSlider = controller.effect.addProperty("ADBE Slider Control");
    rotSlider.name = "Effected Rotation";
    rotSlider.property("Slider").setValue(360);
    var rotCheck = controller.effect.addProperty("ADBE Checkbox Control");
    rotCheck.name = "Look at Effector";
  }

  if (oCheck) {
    var opaSlider = controller.effect.addProperty("ADBE Slider Control");
    opaSlider.name = "Effected Opacity";
    opaSlider.property("Slider").setValue(0);
  }

  var mainRandomSlider = controller.effect.addProperty("ADBE Slider Control");
  mainRandomSlider.name = "Main Effector Random";
  mainRandomSlider.property("Slider").setValue(0);

  var mainRandomSeedSlider = controller.effect.addProperty("ADBE Slider Control");
  mainRandomSeedSlider.name = "Main Random Seed";
  mainRandomSeedSlider.property("Slider").setValue(1);

  var auxMultSlider = controller.effect.addProperty("ADBE Slider Control");
  auxMultSlider.name = "Aux Multiplier";
  auxMultSlider.property("Slider").setValue(1);

  var auxRandomSlider = controller.effect.addProperty("ADBE Slider Control");
  auxRandomSlider.name = "Aux Random";
  auxRandomSlider.property("Slider").setValue(0);

  var auxRandomSeedSlider = controller.effect.addProperty("ADBE Slider Control");
  auxRandomSeedSlider.name = "Aux Random Seed";
  auxRandomSeedSlider.property("Slider").setValue(1);

  controllerPreview.transform.scale.expression = "var EF = thisComp.layer('" + controller.name + "');\nvar s = EF.effect('Effector Size')('Slider')/10;\n[s, s]";
  var ramp = controllerPreview.effect.addProperty("Gradient Ramp");
  ramp.property("Start of Ramp").expression = ("var EF = thisComp.layer('" + controller.name + "');\nvar v = EF.effect('Effector Falloff')('Slider');\n[500, linear(v, 0,100,999,0)]");
  ramp.property("Start Color").setValue([1, 0, 0]);
  ramp.property("End Color").setValue([0, 0, 0]);
  var polar = controllerPreview.effect.addProperty("Polar Coordinates");
  polar.property("Type of Conversion").setValue(1);
  polar.property(1).setValue(1);

  var baseStr = "var r = EF.effect('Effector Size')('Slider')/2;";
  baseStr += "\n";
  baseStr += "var p1 = thisLayer.toWorld(thisLayer.anchorPoint)";
  baseStr += "\n";
  baseStr += "var p2 = EF.toWorld(EF.anchorPoint)";
  baseStr += "\n";
  baseStr += "var delta = length(p1, p2);";
  baseStr += "\n";
  baseStr += "if (delta < r) {";
  baseStr += "\n\t";


  if (pCheck) {
    var posStr = "// AS : Effector position";
    var posStr2 = "";
    posStr += "\n";
    posStr += "var EF = thisComp.layer('" + controller.name + "');";
    posStr += "\n";
    posStr += baseStr;
    posStr += "seedRandom(EF.effect('Main Random Seed')('Slider'), true);"
    posStr += "\n\t";
    posStr += "var ran = (random()-.5)*(EF.effect('Main Effector Random')('Slider')/100);";
    posStr += "\n\t";
    posStr += "var a = Math.atan2((p1[1] - p2[1]),(p1[0] - p2[0]));";
    posStr += "\n\t";
    posStr += "var xa = Math.cos(a);";
    posStr += "\n\t";
    posStr += "var ya = Math.sin(a);";
    posStr += "\n\t";
    posStr += "var f = EF.effect('Effector Falloff')('Slider');";
    posStr += "\n\t";
    posStr += "var c = r*((-f+100)/100);";
    posStr += "\n\t";
    posStr += "var ep = EF.effect('Effected Position %')('Slider')/100;";
    posStr += "\n\t";
    posStr += "var p = 1-(f/100);";
    posStr += "\n\t";
    posStr += "var v2 = ((r-delta)*(p*ep))+((r-delta)*ran);";
    posStr += "\n\t";

    posStr2 += "\n";
    posStr2 += "} else {";
    posStr2 += "\n\t";
    posStr2 += "value;";
    posStr2 += "\n";
    posStr2 += "}";
  }

  if (sCheck) {
    var scaStr = "// AS : Effector scale";
    scaStr += "\n";
    scaStr += "var EF = thisComp.layer('" + controller.name + "');";
    scaStr += "\n";
    scaStr += baseStr;
    scaStr += "seedRandom(EF.effect('Main Random Seed')('Slider'), true);"
    scaStr += "\n\t";
    scaStr += "var ran = (random()-.5)*(EF.effect('Main Effector Random')('Slider')/10);";
    scaStr += "\n\t";
    scaStr += "var f = EF.effect('Effector Falloff')('Slider');";
    scaStr += "\n\t";
    scaStr += "var c = r*((-f+100)/100);";
    scaStr += "\n\t";
    scaStr += "var v = linear(delta, r, c, EF.effect('Effected Scale')('Slider'), value[0]);";
    scaStr += "\n\t";
    scaStr += "var sr = linear(r-delta, 0, r, 0, 100);";
    scaStr += "\n\t";
    scaStr += "[v+(ran*sr),v+(ran*sr)];";
    scaStr += "\n";
    scaStr += "} else {";
    scaStr += "\n\t";
    scaStr += "value;";
    scaStr += "\n";
    scaStr += "}";
  }

  if (rCheck) {
    var rotStr = "// AS : Effector rotation";
    rotStr += "\n";
    rotStr += "var EF = thisComp.layer('" + controller.name + "');";
    rotStr += "\n";
    rotStr += baseStr;
    rotStr += "seedRandom(EF.effect('Main Random Seed')('Slider'), true);"
    rotStr += "\n\t";
    rotStr += "var ran = (random()-.5)*(EF.effect('Main Effector Random')('Slider')/10);";
    rotStr += "\n\t";
    rotStr += "var f = EF.effect('Effector Falloff')('Slider');";
    rotStr += "\n\t";
    rotStr += "var c = r*((-f+100)/100);";
    rotStr += "\n\t";
    rotStr += "var v = linear(delta, r, c, 100, 0)/100;";
    rotStr += "\n\t";
    rotStr += "var targetAngle = EF.effect('Effected Rotation')('Slider');";
    rotStr += "\n\t";
    rotStr += "if(EF.effect('Look at Effector')('Checkbox').value){";
    rotStr += "\n\t\t";
    rotStr += "var diff = p2 - p1;";
    rotStr += "\n\t\t";
    rotStr += "var radi = Math.atan2(diff[1], diff[0]);";
    rotStr += "\n\t\t";
    rotStr += "var baseAngle = (Math.round(radiansToDegrees(radi)));";
    rotStr += "\n\t\t";
    rotStr += "targetAngle = baseAngle-value;";
    rotStr += "\n\t\t";
    rotStr += "if(targetAngle>180){";
    rotStr += "\n\t\t\t";
    rotStr += "targetAngle-=360;";
    rotStr += "\n\t\t";
    rotStr += "}else if(targetAngle<-180){";
    rotStr += "\n\t\t\t";
    rotStr += "targetAngle+=360;";
    rotStr += "\n\t\t";
    rotStr += "}";
    rotStr += "\n\t";
    rotStr += "}";
    rotStr += "\n\t";
    rotStr += "var rr = linear(r-delta, 0, r, 0, 100);";
    rotStr += "\n\t";
    rotStr += "value+(targetAngle*v)+(ran*rr);";
    rotStr += "\n";
    rotStr += "} else {";
    rotStr += "\n\t";
    rotStr += "value;";
    rotStr += "\n";
    rotStr += "}";
  }

  if (oCheck) {
    var opaStr = "// AS : Effector opacity";
    opaStr += "\n";
    opaStr += "var EF = thisComp.layer('" + controller.name + "');";
    opaStr += "\n";
    opaStr += baseStr;
    opaStr += "seedRandom(EF.effect('Main Random Seed')('Slider'), true);"
    opaStr += "\n\t";
    opaStr += "var ran = (random()-.5)*(EF.effect('Main Effector Random')('Slider')/10);";
    opaStr += "\n\t";
    opaStr += "var f = EF.effect('Effector Falloff')('Slider');";
    opaStr += "\n\t";
    opaStr += "var c = r*((-f+100)/100);";
    opaStr += "\n\t";
    opaStr += "var v = linear(delta, r, c, EF.effect('Effected Opacity')('Slider'), value);";
    opaStr += "\n\t";
    opaStr += "var or = linear(r-delta, 0, r, 0, 100);";
    opaStr += "\n\t";
    opaStr += "v+(ran*or);";
    opaStr += "\n";
    opaStr += "} else {";
    opaStr += "\n\t";
    opaStr += "value;";
    opaStr += "\n";
    opaStr += "}";
  }

  var auxStr = "// AS : Effector Aux";
  auxStr += "\n";
  auxStr += "var EF = thisComp.layer('" + controller.name + "');";
  auxStr += "\n";
  auxStr += baseStr;
  auxStr += "seedRandom(EF.effect('Aux Random Seed')('Slider'), true)"
  auxStr += "\n\t";
  auxStr += "var ran = (random()-.5)*(EF.effect('Aux Random')('Slider')/100);";
  auxStr += "\n\t";
  auxStr += "var f = EF.effect('Effector Falloff')('Slider');";
  auxStr += "\n\t";
  auxStr += "var c = r*((-f+100)/100);";
  auxStr += "\n\t";
  auxStr += "var v = linear(delta, r, c, 100, 0);";
  auxStr += "\n\t";
  auxStr += "var ar = (r-delta)*ran;";
  auxStr += "\n\t";
  auxStr += "(v*EF.effect('Aux Multiplier')('Slider'))+ar;";
  auxStr += "\n";
  auxStr += "} else {";
  auxStr += "\n\t";
  auxStr += "value;";
  auxStr += "\n";
  auxStr += "}";

  for (var k = 0; k < selectedLayers.length; k++) {
    var l = selectedLayers[k];
    if (pCheck) {
      if(l.property("Transform").property("Position").dimensionsSeparated){
        l.property("Transform").property("X Position").expression = posStr + "value + xa*v2" + posStr2;
        l.property("Transform").property("Y Position").expression = posStr + "value + ya*v2;" + posStr2;
      }else{
        l.transform.position.expression = posStr + "value + [xa*v2,ya*v2];" + posStr2;
      }
    }
    if (sCheck) {
      l.transform.scale.expression = scaStr;
    }
    if (rCheck) {
      l.transform.rotation.expression = rotStr;
    }
    if (oCheck) {
      l.transform.opacity.expression = opaStr;
    }
    var auxSlide = l.effect.addProperty("ADBE Slider Control");
    auxSlide.name = "Aux Slider " + controllerNum;
    auxSlide.property(1).max = 100;
    auxSlide.property(1).expression = auxStr;
  }
  controllerPreview.locked = true;
  app.endUndoGroup();
}

function PropertyManager() {
  app.beginUndoGroup("AS : Property Manager");
  var activeComp = app.project.activeItem;
  var selectedLayers = activeComp.selectedLayers;
  var selectedProps = activeComp.selectedProperties;
  var propPaths = [];

  if (selectedLayers.length == 0) {
    alert("Select some layers.");
    return false;
  }
  if (selectedProps.length == 0) {
    alert("Select some properties.");
    return false;
  }

  for (var i = 0; i < selectedProps.length; i++) {
    var p = selectedProps[i];
    var supported=false;
    if (p.propertyType == PropertyType.PROPERTY) {
        if (p.propertyValueType == PropertyValueType.OneD || p.propertyValueType == PropertyValueType.TwoD || p.propertyValueType == PropertyValueType.TwoD_SPATIAL || p.propertyValueType == PropertyValueType.ThreeD || p.propertyValueType == PropertyValueType.ThreeD_SPATIAL || p.propertyValueType == PropertyValueType.COLOR) {
        supported=true;
      }
      var levelArray = [];
      levelArray.push(p);
      var t = p;
      while (t.parentProperty) {
        t = t.parentProperty;
        if (t.parentProperty != null) {
          levelArray.push(t);
        }
      }
      propPaths.push(levelArray);
    }
  }
  if(!supported){
    alert("Only one, two, or three dimensional numbers and colors are supported.");
    return false;
  }

  for (var l = 0; l < selectedLayers.length; l++) {
    var layer = selectedLayers[l];
    if (l == 0) {
      var controller = activeComp.layers.addNull();
      var controllerNum = checkName("AS : Property Manager_")
      controller.name = "AS : Property Manager_" + controllerNum;
    }
    for (var i = 0; i < propPaths.length; i++) {
      var currentProp = propPaths[i][0];
      if (currentProp.propertyType == PropertyType.PROPERTY) {
        var expStr = "// AS : Property Manager\n";
        if (currentProp.propertyValueType == PropertyValueType.OneD) {
          if (l == 0) {
            var pslide1 = controller.effect.addProperty("ADBE Slider Control");
            pslide1.name = currentProp.name;
            pslide1.property(1).setValue(currentProp.value);
          }
          expStr += "var c = thisComp.layer('" + controller.name + "');\n"
          expStr += "var v = c.effect('" + currentProp.name + "')('Slider');\nv";
        } else if (currentProp.propertyValueType == PropertyValueType.TwoD || currentProp.propertyValueType == PropertyValueType.TwoD_SPATIAL || currentProp.propertyValueType == PropertyValueType.ThreeD || currentProp.propertyValueType == PropertyValueType.ThreeD_SPATIAL) {
          if (l == 0) {
            var pslide1 = controller.effect.addProperty("ADBE Slider Control");
            pslide1.name = currentProp.name + " X";
            pslide1.property(1).setValue(currentProp.value[0]);
            var pslide2 = controller.effect.addProperty("ADBE Slider Control");
            pslide2.name = currentProp.name + " Y";
            pslide2.property(1).setValue(currentProp.value[1]);
            var pcheck1 = controller.effect.addProperty("ADBE Checkbox Control");
            pcheck1.name = "Link "+currentProp.name;
            pcheck1.property(1).setValue(true);
          }
          expStr += "var c = thisComp.layer('" + controller.name + "');\n"
          expStr += "var v1 = c.effect('" + currentProp.name + " X')('Slider');\n";
          expStr += "var v2 = c.effect('" + currentProp.name + " Y')('Slider');\n";
          expStr += "if(c.effect('Link " + currentProp.name + "')('Checkbox').value){\n"
          expStr += "\t[v1,v1];\n";
          expStr += "}else{\n";
          expStr += "\t[v1, v2];\n";
          expStr += "}";
        } else if(currentProp.propertyValueType == PropertyValueType.COLOR){
          if (l == 0) {
            var pccon = controller.effect.addProperty("ADBE Color Control");
            pccon.name = currentProp.name;
            pccon.property(1).setValue(currentProp.value);
          }
          expStr += "var c = thisComp.layer('" + controller.name + "');\n"
          expStr += "var v = c.effect('" + currentProp.name + "')('Color');\nv";
        }
      }
      assignDeepProperties(layer, propPaths[i], currentProp, expStr);
    }
  }
  app.endUndoGroup();
}



function assignDeepProperties(layer, propPath, currentProp, expStr){
  // I can't figure out a better way to do this
  var len = propPath.length;
  if (len == 1) {
    layer.property(currentProp.name).expression = expStr;
  } else if (len == 2) {
    layer.property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 3) {
    layer.property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 4) {
    layer.property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 5) {
    layer.property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 6) {
    layer.property(propPath[5].name).property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 7) {
    layer.property(propPath[6].name).property(propPath[5].name).property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 8) {
    layer.property(propPath[7].name).property(propPath[6].name).property(propPath[5].name).property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 9) {
    layer.property(propPath[8].name).property(propPath[7].name).property(propPath[6].name).property(propPath[5].name).property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 10) {
    layer.property(propPath[9].name).property(propPath[8].name).property(propPath[7].name).property(propPath[6].name).property(propPath[5].name).property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 11) {
    layer.property(propPath[10].name).property(propPath[9].name).property(propPath[8].name).property(propPath[7].name).property(propPath[6].name).property(propPath[5].name).property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 12) {
    layer.property(propPath[11].name).property(propPath[10].name).property(propPath[9].name).property(propPath[8].name).property(propPath[7].name).property(propPath[6].name).property(propPath[5].name).property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  } else if (len == 13) {
    layer.property(propPath[12].name).property(propPath[11].name).property(propPath[10].name).property(propPath[9].name).property(propPath[8].name).property(propPath[7].name).property(propPath[6].name).property(propPath[5].name).property(propPath[4].name).property(propPath[3].name).property(propPath[2].name).property(propPath[1].name).property(currentProp.name).expression = expStr;
  }
}
















// ------------------------------------------------------------------------------------
// UTILITY FUNCTIONS
// ------------------------------------------------------------------------------------


function getDistance(p1, p2) {
  var a = p1[0] - p2[0];
  var b = p1[1] - p2[1];
  var c = Math.sqrt(a * a + b * b);
  return c;
}

function degreesToRadians(angle) {
  return angle * (Math.PI / 180);
}

function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

function deselectAllLayers() {
  var layersArray = app.project.activeItem.layers;
  for (var k = 1; k <= layersArray.length; k++) {
    var layer = layersArray[k];
    layer.selected = false;
  }
}

function selectAllLayers() {
  var layersArray = app.project.activeItem.layers;
  for (var k = 1; k <= layersArray.length; k++) {
    var layer = layersArray[k];
    layer.selected = true;
  }
}

function checkName(myStr) {
  var myComp = app.project.activeItem;
  var maxNum = 0;
  for (var i = 1; i <= myComp.numLayers; i++) {
    if (myComp.layer(i).name.indexOf(myStr) == 0) {
      maxNum = Math.max(maxNum, parseInt(myComp.layer(i).name.split("_")[1], 10));
    }
  }
  return (maxNum + 1);
}

function openURL(str){
  var os = $.os;
  if(os.indexOf("Windows") != (-1)){
    system.callSystem("Start " + str);
  }else{
    system.callSystem("Open " + str);
  }
}

function checkForUniqueNames(arr) {
  var valuesSoFar = [];
  for (var i = 0; i < arr.length; ++i) {
    var value = arr[i];
    if (value in valuesSoFar) {
      return true;
    }
    valuesSoFar[value] = true;
  }
  return false;
}
