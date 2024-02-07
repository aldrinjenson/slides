import time
import keyboard

def press_right_arrow():
    while True:
        for i in range(20, 0, -1):
            print(f"Next key press in {i} seconds", end='\r', flush=True)
            time.sleep(1)
        keyboard.press_and_release('right')


if __name__ == "__main__":
    press_right_arrow()
