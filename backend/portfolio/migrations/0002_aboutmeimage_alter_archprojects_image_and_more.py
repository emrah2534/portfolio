# Generated by Django 4.1 on 2022-09-24 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutMeImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('aboutMeText', models.TextField()),
                ('techSkills', models.CharField(max_length=50)),
                ('techSkillsRange', models.IntegerField()),
                ('image', models.ImageField(upload_to='my_image/')),
            ],
        ),
        migrations.AlterField(
            model_name='archprojects',
            name='image',
            field=models.ImageField(upload_to='coding_images/'),
        ),
        migrations.AlterField(
            model_name='codingprojects',
            name='image',
            field=models.ImageField(upload_to='arch_images/'),
        ),
    ]
