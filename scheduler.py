import csv
import json
from database import SessionLocal
import models

def export_csv():

    db = SessionLocal()
    items = db.query(models.Item).all()

    with open("report.csv","w",newline="") as file:

        writer = csv.writer(file)
        writer.writerow(["ID","Name","Quantity","Threshold"])

        for item in items:
            writer.writerow([item.id,item.name,item.quantity,item.threshold])

    db.close()


def export_json():

    db = SessionLocal()
    items = db.query(models.Item).all()

    data = []

    for item in items:
        data.append({
            "id":item.id,
            "name":item.name,
            "quantity":item.quantity,
            "threshold":item.threshold
        })

    with open("report.json","w") as file:
        json.dump(data,file)

    db.close()