# Generated by Django 4.1 on 2022-09-24 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_aboutme_techskills_delete_aboutmeimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Owner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('aboutMeText', models.TextField()),
                ('image', models.ImageField(upload_to='my_image/')),
            ],
        ),
        migrations.RemoveField(
            model_name='techskills',
            name='person',
        ),
        migrations.DeleteModel(
            name='AboutMe',
        ),
    ]