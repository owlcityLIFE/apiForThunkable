from flask import Flask, request, jsonify
import datetime

app = Flask(__name__)

@app.route('/convert_timestamp', methods=['GET'])
def convert_timestamp():
    timestamp = request.args.get('timestamp')
    
    try:
        timestamp = int(timestamp)
        date_time = datetime.datetime.fromtimestamp(timestamp)
        formatted_date_time = {
            'year': date_time.year,
            'month': '{:02d}'.format(date_time.month),
            'day': '{:02d}'.format(date_time.day),
            'hours': '{:02d}'.format(date_time.hour),
            'minutes': '{:02d}'.format(date_time.minute),
            'seconds': '{:02d}'.format(date_time.second)
        }
        return jsonify(formatted_date_time)
    except ValueError:
        return jsonify({'error': 'Invalid timestamp'})

if __name__ == '__main__':
    app.run()