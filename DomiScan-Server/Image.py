import cv2
import Image
import numpy as np

def countDots(path):
    image = cv2.imread(path, 0)

    params = cv2.SimpleBlobDetector_Params()

    params.filterByArea = True
    params.minArea = 50

    params.filterByCircularity = True
    params.minCircularity = 0.5

    params.filterByConvexity = True
    params.minConvexity = 0.2
        
    params.filterByInertia = True
    params.minInertiaRatio = 0.01

    detector = cv2.SimpleBlobDetector_create(params)

    keypoints = detector.detect(image)

    blank = np.zeros((1, 1))
    blobs = cv2.drawKeypoints(image, keypoints, blank, (0, 0, 255),
                            cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)

    count = len(keypoints)

    return count
