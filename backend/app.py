from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load("model.pkl")

@app.route('/api/v1/dashboard/predict', methods=['POST'])
def predict_placement():
    try:
        # Parse request JSON
        data = request.get_json()
        if not data or 'score' not in data or 'time_taken' not in data:
            return jsonify({"error": "Invalid input", "details": "Missing 'score' or 'time_taken' in request body"}), 400
        
        # Extract and preprocess input data
        score = float(data['score'])
        time_taken = float(data['time_taken']) / 60.0  # Convert seconds to minutes
        
        # Prepare input for prediction
        input_features = np.array([[score, time_taken]])
        print(f"Input features for model: {input_features}")  # Debugging

        # Predict placement percentage
        prediction = model.predict(input_features)
        print(f"Raw model prediction: {prediction}")  # Debugging

        # Respond with the prediction
        response = {
            "score": score,
            "time_taken_minutes": time_taken,
            "predicted_placement_percentage": round(prediction[0], 2)
        }
        return jsonify(response)

    except Exception as e:
        # Log the error and return a generic error message
        print(f"Error in prediction: {e}")
        return jsonify({"error": "Something went wrong", "details": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8000))
    app.run(debug=True, host="0.0.0.0", port=port)
    # app.run(debug=True, port=8000)
