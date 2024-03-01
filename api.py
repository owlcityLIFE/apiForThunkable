from flask import Flask, request
import datetime

app = Flask(__name__)

@app.route('/convert_timestamp', methods=['GET'])
def convert_timestamp():
    timestamp = request.args.get('timestamp')
    
    try:
        timestamp = int(timestamp)
        date_time = datetime.datetime.fromtimestamp(timestamp)
        formatted_date_time = date_time.strftime('%Y-%m-%d %H:%M:%S')
        return f"The formatted date and time for timestamp {timestamp} is: {formatted_date_time}"
    except ValueError:
        return "Invalid timestamp"

if __name__ == '__main__':
    app.run()