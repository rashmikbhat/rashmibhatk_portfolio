from PIL import Image, ImageDraw
import numpy as np

# Load the image
img = Image.open('profilepic.png').convert('RGBA')
width, height = img.size

# Create a new image with gradient background
gradient = Image.new('RGB', (width, height))
draw = ImageDraw.Draw(gradient)

# Create purple to pink gradient
for y in range(height):
    # Gradient from purple (#7B2CBF) to pink (#FF6EC7)
    r = int(123 + (255 - 123) * (y / height))
    g = int(44 + (110 - 44) * (y / height))
    b = int(191 + (199 - 191) * (y / height))
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# Convert to RGBA
gradient = gradient.convert('RGBA')

# Get the image data
img_data = np.array(img)

# Create mask: detect gray background (approximate range)
# Gray background is around RGB(128, 128, 128) with some tolerance
gray_mask = (
    (img_data[:, :, 0] > 100) & (img_data[:, :, 0] < 180) &
    (img_data[:, :, 1] > 100) & (img_data[:, :, 1] < 180) &
    (img_data[:, :, 2] > 100) & (img_data[:, :, 2] < 180) &
    (np.abs(img_data[:, :, 0].astype(int) - img_data[:, :, 1].astype(int)) < 30) &
    (np.abs(img_data[:, :, 1].astype(int) - img_data[:, :, 2].astype(int)) < 30)
)

# Set gray pixels to transparent
img_data[:, :, 3][gray_mask] = 0

# Convert back to PIL Image
img_no_bg = Image.fromarray(img_data)

# Composite the image over the gradient
result = Image.alpha_composite(gradient, img_no_bg)

# Convert to RGB and save
result_rgb = result.convert('RGB')
result_rgb.save('profilepic-edited.jpg', 'JPEG', quality=90, optimize=True)

print("SUCCESS: Image edited successfully!")
print("   - Background removed")
print("   - Purple-to-pink gradient added")
print("   - Optimized for web")
print("   - Saved as: profilepic-edited.jpg")
