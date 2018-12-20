#!C:\Python27\python.exe
# -*- coding: utf8 -*-
from flask import Flask
from flask_cors import CORS
import json
import time

class Hotel(object):
    def __init__(self, id, name, alias,address, rank, price, date):
        self.ID = id
        self.Name = name
        self.Alias = alias
        self.Address = address
        self.Rank = rank
        self.Price = price
        self.Date = date

def hotel_dict(obj):
    return obj.__dict__


global hotelList
hotelList = []

hotelList.append(Hotel("1","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("2","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("3","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("4","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("5","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("6","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("7","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("8","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("9","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("10","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("11","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("12","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("13","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("14","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("15","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))
hotelList.append(Hotel("16","深圳罗湖智选假日酒店","HLD","罗湖区桂园北路6号","准三星",400,time.strftime("%d/%m/%Y")))

app = Flask(__name__)
CORS(app)

@app.route('/hotels', methods=['GET'])
def getHotels():
    return json.dumps(hotelList, default=hotel_dict).encode('utf8')

if __name__ == '__main__':
    app.debug = True
    app.run(host = '0.0.0.0',port=5000)
